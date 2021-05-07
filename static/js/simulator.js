var GTW = GTW || {};

(function() {

    var MS_PER_HOUR = 3600000;
    var MS_PER_DAY = 86400000;

    function expovariate(mu) {
        return -mu * Math.log(1.0 - MersenneTwister.random());
    }

    // an event record
    function KEvent() {
        this.type = 0;
        this.target = 0;
        this.source = 0;
        this.count = 0;
        this.remaining = 0;
        this.end_time = 0;
        this.next_event_time = 0;
        this.coords = null;             // ddos only
        this.angle = 0;
    }

    KEvent.prototype.next_event = function() {
        var remaining_time = Math.max(0, this.end_time - this.next_event_time);
        var mean_time_to_next_event = remaining_time / this.remaining;
        var time_to_next_event = expovariate(mean_time_to_next_event);
        this.next_event_time += time_to_next_event;
        this.angle += Math.PI/5;
    };

    function Simulator() {
        this.next_fetch_time = 0;
        this.kevents = [];
    }

    Simulator.prototype.clear_events = function() {
        this.kevents = [];
    };

    Simulator.prototype.add_events = function(data, start_time) {
        // setup kevents from data
        for (var i = 0; i < data.length; i += 2) {
            var key = data[i + 0];
            var count = data[i + 1];

            var eventType = (key >> 16) & 0xff
            if (!(!!GTW.systems[eventType]))
                continue;
            var ke = new KEvent();
            ke.type = eventType;
            ke.target = (key >> 8) & 0xff;
            ke.source = (key >> 0) & 0xff;
            ke.remaining = ke.count = count;

            ke.next_event_time = start_time;
            ke.end_time = start_time + MS_PER_HOUR;


            // prime first event
            ke.next_event();

            this.kevents.push(ke);
        }
    };

    Simulator.prototype.add_ddos_events = function(data, start_time) {
        // data is Uint32Array
        // start_time is start of the hour utc
        
        // ddos format:
        //   u32 key (sys|tar|src)
        //   u32 target_loc (lon|lat)
        //   u32 source_loc (lon|lat)
        //   u32 count|time (0..99)
        //   ...
        //   -- zero count|time to finish run

        // s16 to float (-1..1)
        function decode_u16(x) {
            x = x & 0xffff;
            if (x >= 0x8000) x = -(0x10000 - x);
            return x/32768.0;
        }

        function decode_coord(out, v) {
            var lon = decode_u16(v >>  0);
            var lat = decode_u16(v >> 16);
            out[0] = 180.0 * lon;
            out[1] =  90.0 * lat;
        }

        var timeslot_duration = MS_PER_HOUR / 100;
        var sp = 0;

        var target_coord = vec2.create();
        var source_coord = vec2.create();

        while (sp < data.length) {
            var key = data[sp++];

            // ensure system is ddos
            var system_id = (key >> 16) & 0xff;
            var target_key = (key >> 8) & 0xff;
            var source_key = (key >> 0) & 0xff;

            decode_coord(target_coord, data[sp++]);
            decode_coord(source_coord, data[sp++]); // might be useless

            for (;;) {
                var d = data[sp++];
                var timeslot_index = d & 0xffff;
                var timeslot_count = (d >> 16);
                if (timeslot_count == 0) {
                    // end of run
                    break;
                }

                var timeslot_time = start_time + timeslot_duration * timeslot_index;

                var timeslot_count_factor = 30;
                var timeslot_count_max = 500;

                timeslot_count = Math.min(
                    timeslot_count * timeslot_count_factor,
                    timeslot_count_max);

                if (!!GTW.systems[system_id]) {
                    // XXX refactor with above
                    var ke = new KEvent();
                    ke.type = system_id;
                    ke.source = source_key;
                    ke.target = target_key;
                    ke.remaining = ke.count = timeslot_count;

                    ke.next_event_time = timeslot_time;
                    ke.end_time = timeslot_time + timeslot_duration;

                    ke.coords = vec4.fromValues(
                        target_coord[0],
                        target_coord[1],
                        source_coord[0],
                        source_coord[1]
                    );

                    ke.next_event();

                    this.kevents.push(ke);
                }
            }
        }
    };

    // now is now in UTC
    Simulator.prototype.fetch = function(now) {

        var hour = Math.floor((now / MS_PER_HOUR) % 24);

        // one hour from now
        this.next_fetch_time = (1 + Math.floor(now / MS_PER_HOUR))*MS_PER_HOUR;

        var self = this;
        function process_event_data(data)
        {
            var events = Base64.decode(data.events, Uint32Array);
            var totals = Base64.decode(data.totals, Uint32Array);

            GTW.reset_counters();
            GTW.update_counters(totals);

            if (data.totals8) {
                // ddos cumulative totals
                var totals8 = Base64.decode(data.totals8, Uint32Array);
                GTW.update_counters(totals8);
            }

            var start_time = Math.floor(now / MS_PER_DAY)*MS_PER_DAY + hour*MS_PER_HOUR;
            self.clear_events();
            self.add_events(events, start_time);

            if (data.events8) {
                // ddos visualization events
                var ddos_events = Base64.decode(data.events8, Uint32Array);
                self.add_ddos_events(ddos_events, start_time);
            }

            if (data.counts8) {
                // add ddos count events as regular events
                var counts8 = Base64.decode(data.counts8, Uint32Array);
                self.add_events(counts8, start_time);
            }

            var flushed = self.poll_events(now);  // flush expired events

            // add to counters
            // XXX same as main.js
            _.each(flushed, function(ke) {
                
                var should_count_event = true;
                if (ke.type == 8 && ke.coords)
                    should_count_event = false;
                if (ke.type == 8 && ke.target == 0)
                    should_count_event = false;

                if (should_count_event) {
                    var system = GTW.systems[ke.type];
                    ++system.count;
                    ++system.target_count[ke.target];
                    ++GTW.total_target_count[ke.target];
                }
            });
        }

        var url = '/data/events/'+window.feedUrl+'/'+hour+'.json';
        $.getJSON(url, process_event_data);
    };

    // return a list of events fired since last poll
    Simulator.prototype.poll_events = function(now) {
        if (this.next_fetch_time < now) {
            this.fetch(now);
        }

        // a list of fired keys
        var fired_events = [];

        _.each(this.kevents, function(ke) {
            // fire as many events as available for this timeslot
            while (ke.next_event_time <= now) {
                fired_events.push(ke);

                if (--ke.remaining == 0) {
                    // dead
                    ke.next_event_time = Infinity;
                    break;
                }

                // schedule the next event
                ke.next_event();
            }
        });

        return fired_events;
    };

    GTW.Simulator = Simulator;

})();
