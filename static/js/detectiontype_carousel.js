DetectionTypeCarousel = function(container, eventTypes, country, clickCallbacks) {
    // jQuery-element as a container for drawing carousel
    this.$container = container;
    // eventTypes for carousel with all settings
    this.eventTypes = eventTypes;
    // country. If coutry is null - world counters are shown
    this.country = country;
    // callbacks for on click events (click on event type)
    this.callbacks = clickCallbacks;

    initSubsystemCarousel = function($container, eventTypes, callbacks) {
        $container.css("display", "block");
        var html = "";
        html +="<div id='systempop'></div>";
        html +="<div class='detection_types'>";
        html +="<ul class='type-icons' id='detection-type-panel'>";
        html +="<li id='detection_types_prev'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='113.7 35.8 367.9 770.4' enable-background='new 113.7 35.8 367.9 770.4' xml:space='preserve'><path d='M434.7,35.8l46.9,39L193.1,420.9l288.4,346.2l-46.8,39l-321-385.2'/></svg></li>";
        for (i = 0; i< eventTypes.length; i++)
        {
            html +="<li data-detectiontype='" + eventTypes[i].id + "' class='symbol' title='" + eventTypes[i].name + "'>";
            if( eventTypes[i].icon != "" &&  eventTypes[i].icon != null)
            {
                html +="<img class='icon' src='" + eventTypes[i].icon + "'/>";
            }
            html +="<span class='name' style='color: #" + eventTypes[i].color + "'>" + eventTypes[i].shortname + "</span>";
            html +="<div class='count'>0</div>";
            html +="<div class='count_line'></div>";
            html +="</li>";
        }
        html +="<li id='detection_types_next'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='162.2 35.8 367.9 770.4' enable-background='new 162.2 35.8 367.9 770.4' xml:space='preserve'><path d='M530.1,420.9l-321,385.2l-46.8-39l288.4-346.2L162.2,74.8l46.9-39'/></svg></li>";
        html +="</ul>";
        html +="</div>";
        $container.append(html);

        rearrangeDetectionTypePanel($container);

        $( window ).resize(function(){ rearrangeDetectionTypePanel($container); });
        $("#detection_types_next").on("click", function() { slideNext(); });
        $("#detection_types_prev").on("click", function() { slidePrev(); });
        $('#detection-type-panel li[data-detectiontype]').on('click', function(event) { detectionTypeClick(event, callbacks); });
    };

    initSubsystemCarousel(this.$container, this.eventTypes, this.callbacks);

    function rearrangeDetectionTypePanel($container){
        var containerWidth = $container.outerWidth();
        var width = 0;
        $("#detection-type-panel > *").each(
            function() {
                if ($(this).css("display") != "none") {
                    width += $(this).outerWidth();
                }
            });
        $("#detection_types_prev").css("visibility", "hidden");
        $("#detection_types_next").css("visibility", "hidden");
        if(containerWidth < width)
        {
            $($("#detection-type-panel > *").get().reverse()).each(function()
            {
                if ($(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next")
                {
                    $(this).css("display", "none");
                }

                var width = 0;
                $("#detection-type-panel > *").each(
                    function() {
                        if($(this).css("display") != "none")
                            width += $(this).outerWidth();
                    });

                if(width < containerWidth)
                    return false;
            });
        }
        else
        {
            $("#detection-type-panel > *").each(function()
            {
                if ($(this).css("display") == "none")
                {
                    if (containerWidth >= width + $(this).outerWidth())
                    {
                        $(this).css("display", "block");
                        width += $(this).outerWidth();
                    }
                }
            });
        }

        $("#detection-type-panel > *").each(function()
        {
            if ($(this).css("display") == "none")
            {
                $("#detection_types_prev").css("visibility", "visible");
                $("#detection_types_next").css("visibility", "visible");
                return false;
            }
        });

        $("#systempop").css("left", $container.position.left);
        $("#systempop").css("right", $container.position.right);
    }

    function slideNext() {
        $lastItem = $("#detection-type-panel > li")[$("#detection-type-panel > li").length - 2];

        if ($($lastItem).css("display") == "none") {
            $($lastItem).css("display", "block");
            $('#detection_types_prev').after($lastItem);
            $($("#detection-type-panel > *").get().reverse()).each(function () {
                if ($(this).css("display") != "none" && $(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next") {
                    $(this).css("display", "none");
                    return false;
                }
            });
        }
    }

    function slidePrev(){
        $firstItem = $("#detection-type-panel > li")[1];
        $lastItem = $("#detection-type-panel > li")[$("#detection-type-panel > li").length - 2];

        if ($($lastItem).css("display") == "none")
        {
            $($firstItem).css("display", "none");
            $('#detection_types_next').before($firstItem);

            $("#detection-type-panel > *").each(function()
            {
                if ($(this).css("display") == "none" && $(this).attr("id") != "detection_types_prev" && $(this).attr("id") != "detection_types_next")
                {
                    $(this).css("display", "block");
                    return false;
                }
            });
        }
    }

    function detectionTypeClick(event, callbacks) {
        var detectionType = $(event.target).closest("li").attr('data-detectiontype');
        var gaEventLabel = detectionType.toUpperCase();
        $("ul.type-icons li[data-detectiontype='"+detectionType+"']").toggleClass("disabled");
        if(!!callbacks && typeof Array.isArray(callbacks))
        {
            for(i=0; i<callbacks.length; i++) {
                callbacks[i](detectionType);
            }
        }
    }
};

DetectionTypeCarousel.prototype.UpdateCounters = function(carousel, events) {
    var keys = Object.keys(GTW.systems);
    for (var i=0; i < keys.length; i++) {
        var system = GTW.systems[keys[i]];
        selector = '.type-icons .symbol[data-detectiontype="' + system.id + '"] .count';
        if(!!carousel.country)
            $(selector).text(system.target_count[carousel.country]);
        else
            $(selector).text(system.count);
    }
};

DetectionTypeCarousel.prototype.ShowEventTypeInfo = function(system) {
    console.log("show event type info in carousel js: ", system);
    if(!!system) {
        $('#systempop').empty().html('');
        $('#systempop').append("<h4 style='color: #" + system.color + "'>" + system.shortname + " - " + system.name + "</h4>");
        $('#systempop').append(system.description);
        $('#systempop').fadeIn();
    }
    else {
        $('#systempop').fadeOut(400, function () {
            $('#systempop').empty().html('');
        });
    }
};

