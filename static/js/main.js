var GTW = window.GTW || {};
var MAP = window.MAP || {};


// XXX should this really be here?
function System(id, shortname, name, description, color, sides) {
    // ID
    this.id = id;
    this.shortname = shortname;
    this.name = name;
    this.description = description;
    this.color = color;
    this.n_sides = sides;

    // show on map
    this.enabled = true;
    // show on stats
    this.enabled_graph = true;

    this.count = 0;
    this.target_count = new Int32Array(256);
    this.target_rank = new Int32Array(256);
    this.graph = new Int32Array(60);
};

System.prototype.getRGBColor = function () {
    var color = this.color;
    if (color[0] == '#')
        color = color.substr(1);

    var c = vec3.create();
    c[0] = parseInt(color.substr(0, 2), 16) / 255;
    c[1] = parseInt(color.substr(2, 2), 16) / 255;
    c[2] = parseInt(color.substr(4, 2), 16) / 255;
    return c;
};

// per-system rank
System.prototype.compute_target_rank = function () {
    compute_ranks(this.target_count, this.target_rank);
};

// Function to initialize map object
// opts - dictionary with keys and values
MAP.init = function (opts) {
    MAP.attachedUpdateEventsCallbacks = [];
    MAP.showSystemInfo = null;
    MAP.countrySelect = null;
    MAP.updateCountryStats = null;

    // zoom/altitude constants
    var ZOOM_INITIAL = 2.00;
    var ZOOM_DEFAULT = 1.60;
    var ZOOM_CLOSEUP = 1.00;

    var UI = opts.functions;
    var high_quality = (opts.quality == 'high');
    var map_visible = true;
    var showMapLabels = !!opts.showMapLabels;
    var showCountryPops = !!opts.showCountryPops;
    var demoEnabled = !!opts.demoEnabled;
    var demoFlightEnabled = !!opts.demoFlightEnabled;
    var allowInteraction = !!opts.allowInteraction;
    var showSubsystemPopup = !!opts.showSubsystemPopup;
    var showCountryPopup = !!opts.showCountryPopup;
    // todo remove this and use showMapLabels
    var is_widget = !!opts.widget;
    var is_screensaver = !!opts.screensaver;
    var systems = opts.systems;
    var startCountry = opts.startCountry;
    var startFromSelectedCountry = opts.startFromSelectedCountry
    var countryForGraph = opts.countryForGraph;

    GTW.systems = {};
    _.forEach(opts.systems, function (s) {
            GTW.systems[s.id] = new System(s.id, s.shortname, s.name, s.description, s.color, s.edges);
        }
    );



    function attachUpdateEventsCallback(funcName) {
        MAP.attachedUpdateEventsCallbacks.push(funcName);
    }

    function showSystemInfo(funcName) {
        MAP.showSystemInfo = funcName;
    }

    function countrySelect(funcName) {
        MAP.countrySelect = funcName;
    }

    function updateCountryStats(funcName) {
        MAP.updateCountryStats = funcName;
    }

    // popup country box
    var popup_country = null;
    var timeout_popup_country = null;

    // popup that shows when marker drops
    var marker_animation_popup_timeout = null;

    function cancel_marker_animation_popup() {
        if (marker_animation_popup_timeout) {
            clearTimeout(marker_animation_popup_timeout);
            marker_animation_popup_timeout = null;
            vec3.copy(env.geocam.coord_target, env.geocam.coord);
            marker.cancel_flash();
        }
    }

    function setup_connector_line(el, country) {
        connectors.clear();

        if (!el || !country) return;

        var rect = el.getBoundingClientRect();
        var canvas_rect = canvas.getBoundingClientRect();

        var cx = rect.left + 0.5 * rect.width;
        var cy = rect.top + 0.5 * rect.height;

        // convert to canvas coords
        cx -= canvas_rect.left;
        cy -= canvas_rect.top;

        var v0 = vec3.create();
        v0[0] = 2 * (cx / canvas.width - 0.5);
        v0[1] = -2 * (cy / canvas.height - 0.5);

        var v1 = vec3.create();
        var co = vec3.create();

        // corrected endpoints for some country, per client request
        var country_endpoints = {
            NO: [9.787, 61.391],
            SE: [15.179, 60.131],
            FI: [26.199, 63.0149],
        };

        var endpoint = country_endpoints[country.iso2];
        if (endpoint) vec2.copy(co, endpoint);
        else vec3.copy(co, country.center);

        env.project(v1, co);
        connectors.add_line(v0, v1);
    }

    // hide popup if country goes out of view
    function update_popup_country_connector_line() {
        if (popup_country && !is_country_visible(popup_country, 70)) {
            UI.hide_country_popup();
            setTimeout(function() { connectors.clear() }, 1000);
        }
    }

    setInterval(update_popup_country_connector_line, 500);

    function set_popup_country(country) {
        if (country === popup_country)
            return;

        if (country) {
            MAP.countrySelect(country);/*
            UI.show_country_popup(GTW.get_country_name(country), country);*/
            // make the counters update
            next_counter_update_time = 0.0;
            next_rank_update_time = 0.0;
        } else {
            /*
            UI.hide_country_popup();*/
            MAP.countrySelect(null);
        }

        popup_country = country;
        setup_connector_line($('#countrypop')[0], country);
    }

    // need to listen to close button to maintain state
    $('#countrypop').on('click', '.popclose', function () {
        set_popup_country(null);
    });

    // top-infected links
    $('#topinfected').on('click', 'li', function (e) {
        on_interaction();

        var key = this.dataset.key;
        var country = world.key_to_country[key];
        if (country) {
            vec3.set(
                env.geocam.coord_target,
                country.center[0],
                country.center[1],
                ZOOM_CLOSEUP);

            if (showCountryPopup)
                set_popup_country(country);
        }
    });

    // set up canvas and webgl
    var bindKey = key.noConflict();
    var canvas = $('#webgl-canvas')[0];
    window.gl = webgl.setupCanvas(canvas, {
        antialias: high_quality ? true : false,
        //premultipliedAlpha: false,
        extensions: high_quality ? ['WEBKIT_EXT_texture_filter_anisotropic'] : [],
        shaderSources: [
            GTW.SHADER_SOURCES || '/map/shaders/all-shaders.glsl',
            '/map/shaders/demo-shaders.glsl'
        ],
    });

    if (!window.gl) {
        console.warn('WebGL initialization failed.');

        $('#webgl-splash').show();
        $('#webgl-proceed').on('click', function () {
            $('#webgl-splash').hide();
        });

        // dummy UI implementation
        MAP.lang = 'en';

        _.assign(MAP, {
            zoom_in: function () {
            },
            zoom_out: function () {
            },
            set_view: function () {
            },
            set_language: function (lang) {
                MAP.lang = lang
            },
            set_palette: function () {
            },
            toggle_palette: function () {
            },
            toggle_map: function (system) {
            },
            toggle_graph: function (system) {
            },
        });

        return;
    }


    // rendering environment
    var env = {
        camera: new GTW.Camera(),
        flash: function (color) {
            flash.flash(color)
        },
        high_quality: high_quality,

        orbit: {
            rotate: vec3.fromValues(deg2rad(15), 0, 0),
            translate: vec3.fromValues(0, 0, -20),

            pos: vec3.create(),
            dir: vec3.create(),
        },

        geocam: {
            coord: vec3.fromValues(0, 0, 5),
            coord_target: vec3.fromValues(0, 0, 2),
            coord_delta: vec3.create(),
            lerp_speed: 0.2,
        },

        camera_mode: 'geocam',

        time: timeNow(),
        demo_time_start: 0,
        demo_time: 0,
        pickRay: null,

        light: {
            position: vec3.fromValues(20, 20, -20),
            position2: vec3.fromValues(20, -25, -20),
        },

        //project: project_ecef,
        project: function (out, coord) {
            if (this.projection.blend < 0.5)
                GTW.project_mercator(out, coord);
            else
                GTW.project_ecef(out, coord);
        },

        // hmm...
        projection: {
            blend: 1,
            dir: 1,
        },

        pick_required: false,
        pick_index: -1,

        palette: 'dark',
        solo_system_id: 1,

        draw_world: true
    };

    // Cairo
    var start_coord = [-90.0, 30.0444];
    vec2.copy(env.geocam.coord, start_coord);
    vec2.copy(env.geocam.coord_target, start_coord);

    env.camera.near = 0.01;
    env.camera.far = 200;
    MAP._env = env;

    if (is_widget || is_screensaver) {
        // firefox on windows has less depth precision
        env.camera.near = 1.0;
    }

    // draw functions
    var temps = {
        mat4: mat4.create(),
        vec3: vec3.create(),
        vec4: vec4.create(),
    };

    var pos0 = vec3.create();
    var pos1 = vec3.create();
    var dir0 = vec3.create();
    var dir1 = vec3.create();

    var zoom_limits = {
        mercator: [0.15, 1.0],
        ecef: [0.35, 4.5],
    };

    // zoom out to see whole world
    function geocam_zoom_out() {
        env.geocam.coord_target[2] = ZOOM_DEFAULT;
        env.geocam.lerp_speed = 0.2;
    }

    function update_camera() {
        if (env.camera_mode == 'orbit') {
            var mat = temps.mat4;
            mat4.identity(mat);
            mat4.rotateY(mat, mat, -env.orbit.rotate[1]);
            mat4.rotateX(mat, mat, env.orbit.rotate[0]);
            vec3.transformMat4(env.orbit.pos, env.orbit.translate, mat);

            var v = temps.vec3;
            vec3.set(v, 0, 0, 1);
            vec3.transformMat4(v, v, mat);
            vec3.copy(env.orbit.dir, v);

            env.camera.update(env.orbit.pos, env.orbit.dir);
        }

        else if (env.camera_mode == 'geocam') {
            var ecef = env.projection.dir > 0;

            var coord = env.geocam.coord;
            var target = env.geocam.coord_target;
            var delta = env.geocam.coord_delta;

            vec3.add(target, target, delta);
            target[1] = clamp(target[1], -80, 80);

            var zl;
            if (ecef)
                zl = zoom_limits.ecef;
            else
                zl = zoom_limits.mercator;

            target[2] = clamp(target[2], zl[0], zl[1]);

            if (ecef) {
                // wrap-around longitudinally
                if (coord[0] < -180) {
                    coord[0] += 360;
                    target[0] += 360;
                } else if (coord[0] > 180) {
                    coord[0] -= 360;
                    target[0] -= 360;
                }
            } else {
                // clamp longitude
                target[0] = clamp(target[0], -180, 180);
            }

            vec3.lerp(coord, coord, target, env.geocam.lerp_speed);

            // decay delta
            vec3.scale(delta, delta, 0.90);

            // mercator projection
            GTW.project_mercator(pos0, [coord[0], coord[1], 0]);
            GTW.project_mercator(pos1, coord);
            pos1[1] -= 2;
            vec3.sub(dir0, pos0, pos1);
            vec3.normalize(dir0, dir0);

            //var side_on = 1 - clamp(coord[2], 0.0, 1.0);
            //vec3.set(dir0, 0, smoothstep(side_on), 1);
            //vec3.normalize(dir0, dir0);
            vec3.copy(pos0, pos1);

            // ecef projection
            var tmp = [0, 0, 0];
            GTW.project_ecef(tmp, [coord[0], coord[1], 0]);
            GTW.project_ecef(pos1, coord);

            // tilt effect
            var h = clamp(2 * (ZOOM_DEFAULT - coord[2]), 0, 1);
            var h = lerp(0, 2, h);
            pos1[1] -= h;

            vec3.sub(dir1, tmp, pos1);
            vec3.normalize(dir1, dir1);

            //vec3.normalize(dir1, pos1);
            //vec3.negate(dir1, dir1);

            // mix projections
            var t = smoothstep(env.projection.blend);
            vec3.lerp(pos0, pos0, pos1, t);
            vec3.lerp(dir0, dir0, dir1, t);

            // update camera
            env.camera.update(pos0, dir0);
        }

        // projection animation
        env.projection.blend = clamp(
            env.projection.blend + env.projection.dir / 120,
            0,
            1);
    }

    function update_lights() {
        return;
        var theta = 0.1 * env.time;
        var r = 20;

        env.light.position[0] = r * Math.cos(theta);
        env.light.position[2] = r * Math.sin(theta);

        env.light.position2[0] = r * Math.cos(theta + Math.PI);
        env.light.position2[2] = r * Math.sin(theta + Math.PI);
    }

    var start_time = timeNow();
    var selected_country = null;

    function format_time(hour, minute, second) {
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        if (second < 10) second = '0' + second;
        return hour + ':' + minute + ':' + second;
    }

    function format_coord(coord) {
        function to_angle(x) {
            return (x < 0 ? '-' : '+') + Math.abs(x).toFixed(2) + '°';
        }

        return to_angle(coord[0]) + ' ' + to_angle(coord[1]) + ' ' + Math.abs(coord[2]).toFixed(3);
    }

    // graph canvas element, context and current dimensions
    var graph_canvas = null;
    var graph_ctx = null;
    var graph_w = 0;
    var graph_h = 0;

    // scrolling graph entries and current entry pointer
    var graph_ptr = 0;
    var graph_length = 100;

    GTW.systems_foreach(function (system) {
        system.graph = new Int32Array(graph_length);
    });

    // graph time detached from real time to avoid gaps on pause/resume
    var graph_time = 0;

    // current maximum on the y axis
    var graph_max_value = 100;

    // attach/detach graph to canvas element
    function attach_graph_canvas(el) {
        if (graph_canvas === el) return;
        graph_canvas = el;
        graph_ctx = el.getContext('2d');
    }

    function draw_graph() {
        // match canvas dimensions to client dimensions
        /*
         if (graph_w !== graph_canvas.clientWidth &&
         graph_h !== graph_canvas.clientHeight)
         {
         graph_w = graph_canvas.width = graph_canvas.clientWidth;
         graph_h = graph_canvas.height = graph_canvas.clientHeight;
         }
         */
        var graphElemWidth = graph_canvas.clientWidth;
        if (graph_w !== graphElemWidth) {
            graph_w = graph_canvas.width = graphElemWidth;
        }



        var graphElemHeight = ($(document).height() - (250 + $('#header').height() + $('#footer').height()));
        if (graphElemHeight < 150) {
            graphElemHeight = 150;
        }
        if (graphElemHeight > 700) {
            graphElemHeight = 700;
        }
        if (graph_h !== graphElemHeight) {
            graph_h = graph_canvas.height = graphElemHeight;
        }
        var dx = graph_w / (graph_length - 1);

        //graph_ctx.fillStyle = '#000';
        //graph_ctx.fillRect(0, 0, graph_w, graph_h);
        graph_ctx.clearRect(0, 0, graph_w, graph_h);

        // labels
        graph_ctx.font = '12px Ubuntu Mono';

        var x = graph_w - 1;
        var max_value = Math.floor(graph_max_value * 0.1) * 10;
        var step = 5;
        if (max_value > 20) step = 10;
        if (max_value > 50) step = 20;
        if (max_value > 100) step = 50;
        if (max_value > 500) step = 100;
        if (max_value > 2000) step = 500;
        if (max_value > 5000) step = 2000;

        graph_ctx.textBaseline = 'middle';
        graph_ctx.textAlign = 'right';
        for (var value = 0; value < max_value; value += step) {
            var y = (1 - value / max_value) * graph_h;
            y = Math.floor(y);
            graph_ctx.fillStyle = '#181818';
            graph_ctx.fillRect(0, y, graph_w, 1);
        }

        graph_ctx.lineWidth = 1.5;
        var next_max_value = 0;

        GTW.systems_foreach(function (system) {
            if (!system.enabled_graph)
                return;

            graph_ctx.strokeStyle = "#" + system.color;

            graph_ctx.beginPath();
            for (var i = 0; i < graph_length; ++i) {
                var p = modulo(graph_ptr - i - 1, graph_length);
                var value = system.graph[p];
                next_max_value = Math.max(next_max_value, value);
                var x = graph_w - i * dx;
                var y = (1 - value / max_value) * graph_h;

                if (i == 0)
                    graph_ctx.moveTo(x, y);
                else
                    graph_ctx.lineTo(x, y);
            }
            graph_ctx.stroke();

            graph_max_value = clamp(
                lerp(graph_max_value, next_max_value * 1.5, 0.2),
                20, 10000);
        });

        // Numbers on top!
        for (var value2 = 0; value2 < max_value; value2 += step) {
            var y = (1 - value2 / max_value) * graph_h;
            graph_ctx.fillStyle = '#fff';
            graph_ctx.fillText('' + value2, graph_w - 10, y - 10);
        }


    }

    function update_graph() {
        var curr_second = ~~graph_time;
        graph_time += 1 / 60;

        var ptr = curr_second % graph_length;
        if (ptr === graph_ptr) {
            // already done this entry, skip
            return;
        } else {
            graph_ptr = ptr;
        }

        if (graph_canvas)
            draw_graph();

        // reset counts at head of graph
        GTW.systems_foreach(function (system) {
            system.graph[graph_ptr] = 0;
        });
    }

    var simulator = new GTW.Simulator();
    var missiles = new GTW.MissileSystem(env);
    var stars = new GTW.Stars();
    var corona = new GTW.Corona();
    var world = new GTW.World();
    MAP.World = world;
    var labels = new GTW.Labels();
    var demo = GTW.init_demo(env, missiles);
    var marker = GTW.init_marker(env);
    var hedgehog = GTW.init_hedgehog();
    var connectors = GTW.init_connectors();
    var flash = GTW.init_flash();

    function _random_city_coord(out, cities) {
        var n_cities = cities.length / 3;

        // weighted sample
        var value = Math.random();

        // binary search using cumulative probability
        var high = n_cities - 1;
        var low = 0;
        var index = 0;
        while (low <= high) {
            var mid = (low + high) >> 1;
            var cp = cities[3 * mid + 0];
            if (cp > value)
                high = mid - 1;
            else
                low = mid + 1;
        }
        index = high;

        //var i = 3 * Random.cardinal(n_cities);
        var i = 3 * index;
        var lon = cities[i + 1];
        var lat = cities[i + 2];

        // jitter
        lat += Random.gauss(0, 0.01);
        lon += Random.gauss(0, 0.01);

        // return coord
        out[0] = lon;
        out[1] = lat;
    };

    function random_city_coord(out, country_key) {
        if (country_key === 0)
            return false;

        var country = world.key_to_country[country_key];
        if (!country)
            return false;

        _random_city_coord(out, country.cities);

        if (world.geoip && (country == world.geoip.country)) {
            out[2] = 0.014;
        } else {
            out[2] = 0.000;
        }

        return true;
    }

    // translate events into missile launches
    var next_counter_update_time = 0.0;
    var next_rank_update_time = 0.0;
    var next_top_infected_update_time = 0.0;











    var el_top_infected = $('#topinfectedlist');

    var target_coord = vec3.create();
    var source_coord = vec3.create();

    // one-shot boolean for discarding batch of events after an animation freeze
    var discard_events = false;

    function launch_missile(system_id, target_key, source_key, coords, angle) {
        if (coords) {
            // explicit ddos locations
            target_coord[0] = coords[0];
            target_coord[1] = coords[1];
            target_coord[2] = 0;

            if (world.geoip && (target_key == world.geoip.country)) {
                // geoip country is raised
                target_coord[2] += 0.014;
            }

            if (source_key) {
                source_coord[0] = coords[2];
                source_coord[1] = coords[3];
                source_coord[2] = 0;

                if (world.geoip && (source_key == world.geoip.country)) {
                    // geoip country is raised
                    target_coord[2] += 0.014;
                }

                angle = (Math.random() - 0.5) * Math.PI;
                missiles.launch(env, system_id, target_coord, source_coord, angle);

            } else {
                // airstrike
                vec3.copy(source_coord, target_coord);

                var theta = angle;
                var distance = 0.5 * lerp(5, 6, Math.random());

                source_coord[0] += distance * Math.cos(theta);
                source_coord[1] += distance * Math.sin(theta);
                source_coord[2] += lerp(0.150, 0.200, Math.random());

                missiles.launch(env, system_id, target_coord, source_coord);
            }

        } else {
            // standard cybermap (non-ddos) behaviour
            if (!random_city_coord(target_coord, target_key)) {
                // country not found
                return;
            }

            if (source_key) {
                random_city_coord(source_coord, source_key);
                missiles.launch(env, system_id, target_coord, source_coord);
            } else {
                missiles.launch(env, system_id, target_coord, null);
            }

        }
    }

    function update_missiles(events) {
        // discard events after a long pause
        if (discard_events) {
            discard_events = false;
            return;
        }

        if (!world.countries.length)
            return;

        // FIXME refactor with code in simulator.js:fetch()
        _.each(events, function (ke) {
            var system = GTW.systems[ke.type];

            var should_count_event = true;
            if (ke.type == 8 && ke.coords)
                should_count_event = false;
            if (ke.type == 8 && ke.target == 0)
                should_count_event = false;

            if (should_count_event) {
                ++system.count;
                ++system.target_count[ke.target];

                if(!(!!countryForGraph) || MAP.getCountryKeyByIso2(countryForGraph) == ke.target)
                    ++system.graph[graph_ptr];
            }

            // note: this is shared
            ++GTW.total_target_count[ke.target];

            // don't launch missiles if map isn't running
            if (!map_visible)
                return;

            // don't launch missiles in scape mode (i think?)
            if (!env.draw_world)
                return;

            // don't launch missiles if system is disabled by user
            if (!system.enabled)
                return;

            launch_missile(ke.type, ke.target, ke.source, ke.coords, ke.angle);
        });

        // update the country popup rank (eg CHINA: #19 MOST-INFECTED COUNTRY)
        if (popup_country && (next_rank_update_time < env.time)) {
            var key = popup_country.key;
            GTW.compute_total_target_rank();

            MAP.updateCountryStats(key, GTW.total_target_rank[key], GTW.systems);
            next_rank_update_time = env.time + 1.0;
        }

        // update the top infected list (stats/MOST INFECTED TODAY: 1. Russia 2. India etc)
        if (next_top_infected_update_time < env.time) {
            GTW.compute_total_target_rank();
            var html = [];
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                var country = world.key_to_country[key];

                if (country && !_.contains(disabledCountries, country.key)){
                    html.push('<li data-key="' + key + '">' + GTW.get_country_name(country) + '</li>');
                }
            }

            el_top_infected.html(html.join(''));
            next_top_infected_update_time = env.time + 5.0;

            // update the hedgehog to match
            hedgehog.setup(env, world);

            // update the UI.stats_top5
            update_ui_stats_top5();

            // check if we're required to fly to top-infected country as geoip failed
            if (start_marker_animation_to_top_infected_country_because_geoip_failed) {
                var top_infected_country_key = GTW.top_infected[0];
                var top_infected_country = world.key_to_country[top_infected_country_key];
                if (top_infected_country) {
                    start_marker_animation(top_infected_country);
                    start_marker_animation_to_top_infected_country_because_geoip_failed = false;
                }
            }
        }

        // update the global system counts (map & stats/OAS: 5738321 ODS: 2314812 etc..)
        if (next_counter_update_time < env.time) {
            _.each(MAP.attachedUpdateEventsCallbacks, function(func) {
                func(GTW.systems);
            });


            next_counter_update_time = env.time + Random.uniform(0.1, 0.5);
        }
    }

    var update_ui_stats_top5 = (function () {
        var last_top5 = [0, 0, 0, 0, 0];

        return function () {
            if (!UI.stats_top5) return;

            var changed = false;
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                if (last_top5[i] !== key) {
                    changed = true;
                    break;
                }
            }

            if (!changed) return;

            var result = [];
            for (var i = 0; i < 5; ++i) {
                var key = GTW.top_infected[i];
                last_top5[i] = key;
                var country = world.key_to_country[key];
                if (!country) continue;
                result.push({
                    key: key,
                    name: country.name
                });
            }
            UI.stats_top5(result);
        };
    }());

    var animation_state = 'idle';
    var animation_next_state_time = 0;
    var animation_next_state = 'idle';

    change_animation_state('idle');

    function schedule_animation_state(new_state, delay) {
        animation_next_state_time = env.time + delay;
        animation_next_state = new_state;
    }

    function change_animation_state(new_state, force) {
        if (!force && (new_state === animation_state))
            return;

        if ($('body').hasClass('scroll')) // dont allow demo stuff when the visitor is reading about types!!!
            return;

        switch (new_state) {
            case 'idle':
                UI.set_demo_state(false);
                env.geocam.lerp_speed = 0.200;

                if (high_quality && demoEnabled)
                    schedule_animation_state('spin_1', 30);
                break;

            case 'spin_1':
                if (env.projection.dir < 0) {
                    MAP.set_view('globe');
                }

                if (!MAP.is_bad_mode) {
                    UI.set_demo_state(true);
                    cancel_marker_animation_popup();
                    hedgehog.setup(env, world);
                    hedgehog.show();
                    schedule_animation_state('solo', 20);
                }

                env.geocam.lerp_speed = 0.015;
                geocam_zoom_out();
                set_popup_country(null);
                break;

            case 'solo':
                hedgehog.hide();
                var sysIdArray = [];
                GTW.systems_foreach(function (system) {
                    if (system.enabled) {
                        sysIdArray.push(system.id);
                    }
                });
                if (sysIdArray.length > 0) {
                    env.solo_system_id = _.sample(sysIdArray);
                    if (showSubsystemPopup) {
                        MAP.showSystemInfo(GTW.systems[env.solo_system_id]);
                    }
                    else {
                        MAP.showSystemInfo(null);
                    }
                    schedule_animation_state('spin_2', 15);
                }
                break;

            case 'spin_2':
                MAP.showSystemInfo(null);
                if (demoFlightEnabled)
                    schedule_animation_state('demo', 5);
                else
                    schedule_animation_state('spin_1', 5);
                break;

            case 'demo':
                env.demo_time_start = env.time;
                var demo_ok = false;

                (function () {
                    var source_country = sample_visible_countries(true);
                    var target_country = sample_top10_countries();

                    if (!(source_country && target_country)) {
                        // try again in 5 secs
                        return;
                    }

                    var target_coord = vec3.create();
                    random_city_coord(target_coord, target_country.key);
                    demo.setup(env, source_country.center, target_coord);


                    // exit position
                    vec2.copy(env.geocam.coord_target, target_coord);
                    vec2.copy(env.geocam.coord, target_coord);

                    // XXX these need to be put in demo code or cancellable
                    setTimeout(function () {
                        set_popup_country(target_country);
                        MAP.showSystemInfo(null);
                    }, 5000);
                    setTimeout(function () {
                        set_popup_country(null)
                    }, 15000);

                    demo_ok = true;
                }());

                if (demo_ok)
                    schedule_animation_state('spin_1', 20);
                else {
                    change_animation_state('spin_2', 0);
                    return;
                }
                break;
        }
        ;

        animation_state = new_state;
        //$('title').text('PHASE: '+animation_state);
    }

    // do things based on animation state
    function update_animation() {
        if (env.time > animation_next_state_time) {
            change_animation_state(animation_next_state);
        }

        // dt is seconds since last update
        // delta is degrees
        // rpm is 360deg/60sec = 6deg/sec

        if (is_widget || is_screensaver) {
            env.geocam.coord_delta[0] = env.dt * 6;
            return;
        }

        switch (animation_state) {
            case 'spin_1':
            case 'spin_2':
            case 'solo':
                var ecef = env.projection.dir > 0;
                if (ecef) {
                    var dt = env.dt;
                    var deg_per_rpm = -dt * 6;

                    // 0..1 over 5 seconds
                    var rpm_curve = Math.min(1, env.time * 0.2);
                    var rpm = lerp(10, 2, rpm_curve);
                    env.geocam.coord_delta[0] = rpm * deg_per_rpm;
                }
                break;

            default:
                break;
        }
        ;
    }

    // stop animation
    function on_interaction() {
        set_popup_country(null);
        change_animation_state('idle', true);
        demo.exit();
        hedgehog.hide();
        cancel_marker_animation_popup();
    }

    function on_interaction2() {
        // this version is specifically for mousedown, which is having trouble with the
        // zoom in-out behviour. bit of a mess but...
        //
        //set_popup_country(null);
        change_animation_state('idle', true);
        demo.exit();
        hedgehog.hide();
        cancel_marker_animation_popup();
    }


    var get_time_now = (function () {

        // offset zero means current time
        var t_offset = 0;

        var ms_per_hour = 1000 * 3600;
        var ms_per_day = ms_per_hour * 24;

        if (0) {
            (function () {
                // start at beginning of today instead (for testing ddos data)
                var t_now = Date.now();
                var t_day = Math.floor(t_now / ms_per_day) * ms_per_day;
                var t_start = t_day + (0.00 * ms_per_hour);
                var t_offset = t_start - t_now;
                t_offset = 0;
            }());
            // fast-forward
            bindKey(']', function () {
                t_offset += 1.0 * ms_per_hour;
            });
        }

        return function () {
            return Date.now() + t_offset;
        };

    }());


    // returns Date.now(), but checks for pauses when out-of-focus
    var get_current_time = (function () {
        var last_frame_time = get_time_now();
        var max_frame_delta = 1000.0;
        return function () {
            var now = get_time_now();
            if (now - last_frame_time > max_frame_delta) {
                discard_events = true;
            }
            last_frame_time = now;
            return now;
        };
    }());

    function draw() {
        // setup camera and rendering environment
        env.time = (timeNow() - start_time) * 1.0;
        env.dt = 1 / 60;

        var now = get_current_time();
        var events = simulator.poll_events(now);

        update_missiles(events);
        update_graph();

        if (!map_visible) {
            // bail now if map not running (eg we're on the stats page)
            return;
        }

        /** -- debug animation --
         el_debug.text(debug_template({
            curr: animation_state,
            next: animation_next_state,
            remain: (animation_next_state_time - env.time).toFixed(2),
        }));
         */

        update_animation();
        update_camera();
        update_lights();

        if (animation_state == 'demo') {
            demo.update(env);
        }

        // do picking only within draw time
        if (env.pick_required) {
            var pick_index = world.pick(env, mousePos[0], mousePos[1]);
            if (pick_index !== env.pick_index) {
                canvas.style.cursor = (pick_index < 0) ? 'default' : 'pointer';
                env.pick_index = pick_index;

                if (pick_index >= 0) {
                    selected_country = world.countries[pick_index];
                    UI.show_country_name(world.countries[pick_index].iso3);
                } else {
                    selected_country = null;
                    UI.show_country_name(null);
                }
            }
            env.pick_required = false;
        }

        // draw scene
        var bg = (env.palette === 'dark') ? 0.0 : 0.9;
        gl.clearColor(bg, bg, bg, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        if (env.projection.blend > 0.5) {
            stars.draw(env);

            if (env.draw_world)
                corona.draw(env);
            else
                corona.draw(env, -1);
        }


        if (env.draw_world) {
            world.draw(env);
            if (!is_widget && showMapLabels) labels.draw(env);
            missiles.draw(env);
            marker.draw(env);
        }

        if (animation_state == 'demo') {
            env.demo_time = env.time - env.demo_time_start;
            demo.draw(env);
        }

        if (showCountryPops)
            hedgehog.draw(env);

        if (animation_state == 'idle') {
            connectors.draw(env);
        }

        flash.draw(env);
    }

    var animation = (function () {

        var enabled = false;

        function animate() {
            if (enabled) {
                requestAnimationFrame(animate);
                draw();
            }
        }

        return {
            start: function () {
                if (!enabled) {
                    enabled = true;
                    discard_events = true;
                    animate();
                }
            },

            stop: function () {
                enabled = false;
            }
        };

    }());

    function resize() {
        canvas.width = canvas.clientWidth;
        if (is_widget || is_screensaver) {
            canvas.height = canvas.clientHeight;
        } else {
            if (platformDetection.isMobile) {
                canvas.height = $("#app").innerHeight();//parseInt($(window).innerHeight()) - (parseInt($('#header').height()) + 45);
            } else {
                canvas.height = $("#app").innerHeight();//parseInt($(window).innerHeight()) - (parseInt($('#header').height()) + parseInt($('#footer').height()));
            }
        }

        var aspect = canvas.width / canvas.height;
        if (aspect < 1) {
            env.camera.fov = 60 / aspect;
        } else {
            env.camera.fov = 60;
        }

        gl.viewport(0, 0, canvas.width, canvas.height);
        vec4.copy(env.camera.viewport, gl.getParameter(gl.VIEWPORT));
    }

    window.addEventListener('resize', resize, false);
    resize();

    // event interaction
    var mousePos = [0, 0];
    var mousePosStart = [0, 0];
    var mouseButton = -1;
    canvas.oncontextmenu = function () {
        return false;
    }

    function on_map_click(click_distance) {
        // on touchend/mouseup - test if we should select something

        if (is_widget || is_screensaver) {
            // no interations on widget
            return;
        }

        var MIN_CLICK_DISTANCE = 5;
        if (click_distance > MIN_CLICK_DISTANCE) {
            // too far from mousedown/touchstart point
            return;
        }

        if (env.pick_index < 0) {
            // nothing picked
            set_popup_country(null);
            geocam_zoom_out();
            return;
        }

        cancel_marker_animation_popup();

        // pick country
        var country = world.countries[env.pick_index];

        if (_.contains(disabledCountries, country.key)) {
            return;
        }

        if (country === popup_country) {
            // same country as selected: zoom out
            set_popup_country(null);
            geocam_zoom_out();
        } else {
            // new country: zoom in
            vec3.set(
                env.geocam.coord_target,
                country.center[0],
                country.center[1],
                ZOOM_CLOSEUP);

            if (showCountryPopup)
                set_popup_country(country);
        }

        MAP.showSystemInfo(null);
    }

    var handlers = {
        mousedown: function (e) {
            if (allowInteraction)
                on_interaction2();

            mousePos = mousePosStart = getMouseEventOffset(e);
            mouseButton = e.button;
            e.preventDefault();
            //env.pickRay.fromWindowCoords(e.offsetX, canvas.height - e.offsetY - 1);
            return false;
        },

        mouseup: function (e) {
            var newMousePos = getMouseEventOffset(e);
            var click_distance = vec2.dist(newMousePos, mousePosStart);
            if (allowInteraction)
                on_map_click(click_distance);
            mouseButton = -1;
            return false;
        },

        mousemove: function (e) {
            if (allowInteraction) {
                var newMousePos = getMouseEventOffset(e);
                var dx = newMousePos[0] - mousePos[0];
                var dy = newMousePos[1] - mousePos[1];
                mousePos = newMousePos;

                if (env.camera_mode == 'orbit') {
                    switch (mouseButton) {
                        case 0:
                            env.orbit.rotate[0] += 0.0025 * dy
                            env.orbit.rotate[1] += 0.0025 * dx
                            break;

                        case 1:
                            env.orbit.translate[0] += 0.010 * dx
                            env.orbit.translate[1] += 0.010 * dy
                            break;

                        case 2:
                            var d = (Math.abs(dx) > Math.abs(dy)) ? dx : -dy;
                            env.orbit.translate[2] += 0.050 * d;
                            break;

                        default:
                            env.pick_required = true;
                            break;
                    }
                }
                else if (env.camera_mode == 'geocam') {
                    var delta = env.geocam.coord_delta;
                    switch (mouseButton) {
                        case 0:
                            delta[0] -= 0.030 * dx;
                            delta[1] += 0.030 * dy;
                            break;

                        case 2:
                            var d = (Math.abs(dx) > Math.abs(dy)) ? dx : -dy;
                            delta[2] = -0.01 * d;
                            break;

                        default:
                            env.pick_required = true;
                            break;
                    }
                }
            }
            return false;
        },

        mousewheel: function (e) {
            if (allowInteraction) {
                //on_interaction();

                var SCALE = 0.9;
                var dy = e.wheelDelta / 120;

                if (env.camera_mode == 'orbit') {
                    env.orbit.translate[2] *= (dy < 0) ? SCALE : 1 / SCALE;
                } else if (env.camera_mode == 'geocam') {
                    env.geocam.coord_delta[2] -= 0.01 * dy;
                }
            }
            e.preventDefault();

            return false;
        },
    };

    function register_interaction_handlers() {
        // patch firefox mousewheel
        canvas.addEventListener('DOMMouseScroll', function (e) {
            e.wheelDelta = -120 * e.detail;
            return handlers.mousewheel(e);
        }, false);

        _.each(handlers, function (f, name) {
            canvas.addEventListener(name, f, false);
        });

        // check mouseup outside doc to prevent sticking the drag
        document.addEventListener('mouseup', function (e) {
            mouseButton = -1;
        }, false);
    }

    // todo - check on staging with allowInteraction param
    function register_touch_handlers() {
        var pinch_dist0 = 0;
        var gesture = 'none';

        var start_pos = vec2.create();
        var pos0 = vec2.create();
        var pos1 = vec2.create();

        function get_touch_pos(out, e) {
            var touch = e.touches[0] || e.changedTouches[0];
            var rect = canvas.getBoundingClientRect();
            var x = touch.clientX - rect.left;
            var y = touch.clientY - rect.top;
            out[0] = x;
            out[1] = y;
        }

        function get_pinch_dist(e) {
            if (e.touches.length !== 2)
                return 0;

            var rect = canvas.getBoundingClientRect();
            var t0 = e.touches[0];
            var t1 = e.touches[1];

            vec2.set(pos0, t0.clientX - rect.left, t0.clientY - rect.top);
            vec2.set(pos1, t1.clientX - rect.left, t1.clientY - rect.top);

            return vec2.dist(pos0, pos1);
        }

        canvas.addEventListener('touchstart', function (e) {
            //on_interaction();
            if (allowInteraction) {
                var num_touches = e.touches.length;
                if (num_touches == 2) {
                    // pinch start
                    pinch_dist0 = get_pinch_dist(e);
                    gesture = 'pinch';
                }
                else if (num_touches == 1) {
                    get_touch_pos(pos0, e);
                    vec2.copy(start_pos, pos0);

                    // request a pick for country (mousePos is required)
                    env.pick_required = true;
                    vec2.copy(mousePos, start_pos);

                    gesture = 'drag';
                }
            }
            e.preventDefault();
            e.stopPropagation();
        }, false);

        canvas.addEventListener('touchend', function (e) {
            if (allowInteraction) {
                if (gesture == 'drag') {
                    get_touch_pos(pos1, e);
                    var click_distance = vec2.dist(start_pos, pos1);
                    on_map_click(click_distance);
                }

                gesture = 'none';
            }
            return false;
        }, false);

        canvas.addEventListener('touchmove', function (e) {
            if (allowInteraction) {
                if (gesture == 'drag') {
                    get_touch_pos(pos1, e);
                    var dx = pos1[0] - pos0[0];
                    var dy = pos1[1] - pos0[1];
                    vec2.copy(pos0, pos1);

                    var delta = env.geocam.coord_delta;
                    delta[0] -= 0.030 * dx;
                    delta[1] += 0.030 * dy;
                }
                else if (gesture == 'pinch') {
                    var pinch_dist = get_pinch_dist(e);
                    var pinch_scale = pinch_dist / pinch_dist0;
                    var delta = env.geocam.coord_delta;
                    delta[2] = (pinch_scale < 1) ? 0.02 / pinch_scale : -0.02 * pinch_scale;
                }
            }
            return false;

        }, false);

    }

    function open_main_site() {
        // open main site in a new tab
        window.open('http://cybermap.kaspersky.com/', '_blank');
    }

    if (is_widget || is_screensaver) {
        /*
         document.addEventListener('mouseup', function(e) {
         open_main_site();
         }, false);
         */
    } else {
        var has_touch_events = ('ontouchstart' in document.documentElement);
        if (has_touch_events)
            register_touch_handlers();
        else
            register_interaction_handlers();
    }

    function toggles(obj, prop) {
        return function () {
            toggleProperty(obj, prop);
        };
    }

    function switch_projection() {
        env.projection.dir = -env.projection.dir;
        if (env.projection.dir > 0) {
            geocam_zoom_out();
        }
    }

    // keyboard shortcuts
    var key_handlers = {};

    _.each(key_handlers, function (f, name) {
        bindKey(name, f);
    });

    // start animation
    animation.start();

    $('.toggle').on('click', function (e) {
        $(this).toggleClass('disabled');
        if (this.id == 'projection') {
            switch_projection();
            return;
        }
    });

    // UI interface
    function toggle_system_prop(system_id, prop_name, value) {
        if (typeof value == 'undefined')
            return GTW.systems[system_id][prop_name] = !GTW.systems[system_id][prop_name];
        else
            return GTW.systems[system_id][prop_name] = value;
    }

    MAP.lang = 'en';

    MAP.getCountryKeyByIso2 = function(iso2) {
        var country = null;
        for (var key in world.countries)
            if (world.countries[key].iso2 == iso2) {
                country = world.countries[key];
                break;
            }

        return (!!country) ? country.key : null;
    }

    MAP.getCountryNameByIso2 = function(iso2) {
        var country = null;
        for (var key in world.countries)
            if (world.countries[key].iso2 == iso2) {
                country = world.countries[key];
                break;
            }

        return (!!country) ? GTW.get_country_name(country) : "";
    }

    var UI_ZOOM_STEP = 0.025;

    _.assign(MAP, {
        zoom_in: function () {
            env.geocam.coord_delta[2] -= UI_ZOOM_STEP;
        },

        zoom_out: function () {
            env.geocam.coord_delta[2] += UI_ZOOM_STEP;
        },

        set_view: function (mode) {
            if (mode == 'flat') {
                env.projection.dir = -1;
                labels.project_labels('mercator');
                geocam_zoom_out();
                set_popup_country(null);

                // cancel any demo mode
                this.set_demo(false);
                UI.set_view_state('flat');
            }
            else if (mode == 'globe') {
                env.projection.dir = 1;
                labels.project_labels('ecef');
                geocam_zoom_out();
                set_popup_country(null);
                UI.set_view_state('globe');
            }
        },

        set_language: function (lang) {
            if (MAP.lang !== lang) {
                MAP.lang = lang;
                labels.render_labels(lang);
                labels.project_labels(env.projection.blend < 0.5 ? 'mercator' : 'ecef');
                hedgehog.setup(env, world);
            }
        },

        set_palette: function (palette) {
            if (palette !== env.palette) {
                env.palette = palette;
            }
        },

        toggle_palette: function () {
            this.set_palette(env.palette === 'dark' ? 'light' : 'dark');
        },

        toggle_map: function (system, value) {
            return toggle_system_prop(system, 'enabled', value);
        },

        toggle_graph: function (system, value) {
            return toggle_system_prop(system, 'enabled_graph', value);
        },

        set_demo: function (enable) {
           // if (!high_quality) {
                // no demo on mobile
             //   return;
           // }

            UI.hide_country_popup();

            if (enable) {
                change_animation_state('spin_1');
            } else {
                change_animation_state('idle');

                env.draw_world = true;
                missiles.setMode('world');
                hedgehog.hide();
                set_popup_country(null);
            }
        },
        get_demo: function () {
            return (animation_state != 'idle');
        },
        pause: function () {
            map_visible = false;
            //animation.stop();
        },

        resume: function () {
            map_visible = true;
            //animation.start();
        },

        attach_graph_canvas: function (el) {
            attach_graph_canvas(el);
        },

        detach_graph_canvas: function () {
            this.attach_graph_canvas(null);
        },

        attachUpdateEventsCallback: function (f) {
            attachUpdateEventsCallback(f);
        },

        showSystemInfo: function(f) {
            showSystemInfo(f);
        },

        countrySelect: function(f) {
            countrySelect(f);
        },

        updateCountryStats: function(f) {
            updateCountryStats(f);
        }
    });









    var is_country_visible = (function () {
        var p = vec3.create();
        var n = vec3.create();
        var co = vec3.create();
        var zaxis = [0, 0, 1];

        return function (country, angle) {
            // always visible in mercator projection
            if (env.projection.blend < 0.50) return true;

            var dp = Math.cos(deg2rad(angle || 90));
            vec2.copy(co, country.center);
            env.project(p, co);
            vec3.normalize(n, p);   // XXX not true in flat mode
            return vec3.dot(n, env.camera.viewDir) < -dp;
        };
    }());

    function sample_visible_countries(visible) {
        var visible = _.filter(world.countries, function (c) {
            return is_country_visible(c, 30) == visible;
        });
        return _.sample(visible);
    }

    function sample_top10_countries() {
        var key = _.sample(GTW.top_infected);
        var country = world.key_to_country[key];
        return country;
    }

    function start_marker_animation(country, coord) {
        if (!country) return;
        if (is_widget) return;

        on_interaction();

        var co = country.center;
        env.geocam.lerp_speed = 0.015;
        vec3.set(env.geocam.coord_target, co[0], co[1], ZOOM_CLOSEUP);

        coord = coord || co;

        setTimeout(function () {
            marker.set_coord(coord);
        }, 3000);

        if (high_quality) {
            // only for desktop
            marker_animation_popup_timeout = setTimeout(function () {
                if (showCountryPopup)
                    set_popup_country(country);
            }, 5000);
        }
    }

    var start_marker_animation_to_top_infected_country_because_geoip_failed = false;

    function got_country_data() {
        if (!UI.got_country_data) return;

        var data = {};
        _.each(world.countries, function (country) {
            data[country.key] = {
                key: country.key,
                name: country.name
            };
        });

        UI.got_country_data(data);
    }

    // geolocation
    world.on('loaded', function () {
        // callback to interface with country names
        got_country_data();

        if (MAP.is_bad_mode) {
            // don't do marker animation
            return;
        }

        var country;
        var coord;

        if (!country && startCountry && startCountry!= "") {
            var iso2 = startCountry;
            for (var key in world.countries)
                if (world.countries[key].iso2 == iso2) {
                    country = world.countries[key];
                    break;
                }
        }

        if (!country && world.geoip) {
            country = world.geoip.country;
            coord = world.geoip.coord;
        }

        if(country) {
            setTimeout(start_marker_animation(country, coord), 1000);
            labels.geoip_iso2 = country.iso2;
            labels.project_labels('ecef');
            UI.got_geoip_data(country.key);
        }
        else {
            // geoip failed: use the most active country data when available
            start_marker_animation_to_top_infected_country_because_geoip_failed = true;
            UI.got_geoip_data(-1);
        }
    });

    // BAD mode
    if (MAP.is_bad_mode) {
        GTW.systems_foreach(function (system) {
            system.enabled = (system.name == 'BAD');
            change_animation_state('spin_1');
        });
    }

};

