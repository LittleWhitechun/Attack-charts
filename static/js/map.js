// Webgl related
var mapModus = 0; // 0 = globe | 1 = plane
var demoModeActive = 0; // 0 = false | 1 = true
var mapColor = 0; // 0 = map color 1 | 1 = map color 2

var MAP_functions = {
    show_country_popup: function(name, country) {
        $("#countrypop_title").html(name);
        if ($("#countrypop").hasClass('hidden')) {
            $("#countrypop").show();
            $("#countrypop").removeClass('hidden');

        } else {
            $("#countrypop").addClass('pulse');
            setTimeout(function() {
                $("#countrypop").removeClass('pulse');
            }, 1000);
        }
        setTimeout(updateCountryPopLinks(name, country.iso2), 100);

        if (window.nesaShowData){
            fillNesapop(name, false);
        }
    },
    show_country_name: function(iso3) {
        if(iso3 != null)
        {
            $("#selected-country-name").text(window.lang.getText("MAP_COUNTRY_"+iso3));
            $("canvas").focus();
        }
        else
        {
            $("#selected-country-name").text("");
            $("canvas").focus();
        }
    },
    hide_country_popup: function() {
        $("#countrypop").addClass('hidden');
        setTimeout(function() {
            if($("#countrypop").hasClass('hidden')) {
                $("#countrypop").hide();
            }
        }, 1000);

        if (window.nesaShowData) {
            fillNesapop('', false);
        }
    },
    set_demo_state: function(state) {
        if(state == true)
        {
            $('#map_control_type_plane').hide();
            $('#map_control_type_globe').show();
            $('#map_control_demo_on').hide();
            $('#map_control_demo_off').show();
        }
        else {
            $('#map_control_demo_on').show();
            $('#map_control_demo_off').hide();
        }
    },
    set_view_state: function(state) { },
    got_country_data: function(countries_data) {
        webgl_countries_data = countries_data;
        MAP.set_language(window.lang.lang());
    },
    stats_top5: function(top5) { // called whenever top5 changes

        if($("#most_infected").length) { // do we have a top5 block
            lastTop5Data = top5;

            $.each(top5, function( top_index, top_value ) {
                top5[top_index].name = countriesDict[top_value.key];
            });


            for(var i = 0; i < 5; i++) {
                $($('#most_infected_links a')[i]).attr('data-country-id', top5[i].key);
                $($('#most_infected_links li a span.name')[i]).html(top5[i].name);
            }
        } else {
            lastTop5Data = top5;
        }
    },
    got_geoip_data: function(country_key) {
        // if (key < 0) then geoip failed
        // otherwise key is user's detected country
        if($("div[data-subpage='2']").length) { // do we have a statistics page?
            if(isSet(countries[currCountryStatisticsCountry])) {
                // closeDropdowns(0);
                currCountryStatisticsCountry = country_key;
                $('.stats_overview.two .stats_overview_controls .location .label.english').html(countries[currCountryStatisticsCountry]);
                loadStatisticsCountryData(true, false);
            }
            detectedCountryId = country_key;
        } else {
            detectedCountryId = country_key;
        }
    }
};

var switchMapViewToPlane = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    $('#map_control_type_globe').hide();
    $('#map_control_type_plane').show();
    MAP.set_view('flat');
    localStorage.setItem("view", "plane");
    mapModus = 1;
    return false;
});
var switchMapViewToGlobe = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    $('#map_control_type_globe').show();
    $('#map_control_type_plane').hide();
    MAP.set_view('globe');
    localStorage.setItem("view", "globe");
    mapModus = 0;
    return false;
});

var switchMapColorToDark = (function(event) {
    $('#map_control_color_light').show();
    $('#map_control_color_dark').hide();
    MAP.set_palette('dark');
    localStorage.setItem("color", "dark");
    mapColor = 0;
    return false;
});
var switchMapColorToLight = (function(event) {
    $('#map_control_color_light').hide();
    $('#map_control_color_dark').show();
    MAP.set_palette('light');
    localStorage.setItem("color", "light");
    mapColor = 1;
    return false;
});


var switchMapToDemoOn = (function(event) {
    MAP.set_demo(true);
    $('#map_control_demo_on').hide();
    $('#map_control_demo_off').show();
    demoModeActive = 1;
    return false;
});
var switchMapToDemoOff = (function(event) {
    MAP.set_demo(false);
    $('#map_control_demo_on').show();
    $('#map_control_demo_off').hide();
    demoModeActive = 0;
    return false;
});

var zoomIn = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    MAP.zoom_in();
    return false;
});
var zoomOut = (function(event) {
    if(MAP.get_demo()) { MAP.set_demo(false); }
    MAP.zoom_out();
    return false;
});

$( document ).ready(function() {
    // toggle view events
    $('#map_control_type_globe').on('click', switchMapViewToPlane);
    $('#map_control_type_plane').on('click', switchMapViewToGlobe);

    // toggle color events
    $('#map_control_color_light').on('click', switchMapColorToLight);
    $('#map_control_color_dark').on('click', switchMapColorToDark);

    // zoom in/out events
    $('#map_control_zoom_in').on('click', zoomIn);
    $('#map_control_zoom_out').on('click', zoomOut);

    // toggle demo mode events
    $('#map_control_demo_on').on('click', switchMapToDemoOn);
    $('#map_control_demo_off').on('click', switchMapToDemoOff);
});
