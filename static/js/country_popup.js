CountryPopup = function(container) {
    // jQuery-element as a container for drawing carousel
    this.$container = container;
};

CountryPopup.prototype.setCountry = function(countryPopup, country){
    var shareCurrCountryPopup = (function(shareToPlatform, name, code) {
        var url = window.location.protocol + "//" + window.location.host + "/";
        if(window.versionId != "default")
            url += "special/" + window.versionId + "/";
        if(window.lang.lang() != "en")
            url += window.lang.lang() + "/";

        url += "#startcountry=" + code;

        var url_short = "https://kas.pr/map";
        var redirect_url = window.location.hostname + "/fb_share_finish.html";

        var image = window.location.hostname + "/images/social_share.jpg";
        var return_url = "";

        var country_name = $('#countrypop_title').html();
        var country_rank = $('#countrypop_ranking').text();
        country_rank = "#"+country_rank+" " + window.lang.getText("MOST_ATTACKED_COUNTRY");

        var hastags = window.lang.getText("SOCIAL_HASH_TAGS");


        url = encodeURIComponent(url);
        url_short = encodeURIComponent(url_short);
        redirect_url = encodeURIComponent(redirect_url);
        title = encodeURIComponent(title);
        image = encodeURIComponent(image);
        country_name = encodeURIComponent(country_name);
        country_rank = encodeURIComponent(country_rank);
        hastags = encodeURIComponent(hastags);


        var title = window.lang.getText("HEADER_CYBERTHREAT") + " " + window.lang.getText("HEADER_REAL_TIME_MAP");

        var devider = encodeURIComponent(" | ");
        var text = country_name+devider+hastags;

        switch(shareToPlatform) {
            case "facebook":
                return_url = 'https://www.facebook.com/dialog/feed?app_id=634328833377154&display=popup&link='+url;
                break;
            case "twitter":
                return_url = 'https://twitter.com/intent/tweet?text='+text+'&url='+url;
                break;
            case "gplus":
                return_url = text;
                break;
            case "vk":
                return_url = 'https://vk.com/share.php?url='+url+'&noparse=true';
                break;
            default:
                if (logToConsole) console.log("Cant share countrypop, dont know "+shareToPlatform);
        }
        return return_url;
    });

    if (country == null) {
        $(countryPopup.$container).hide();
    }
    else {
        $(countryPopup.$container).show();
        $("#countrypop_title", countryPopup.$container).html(lang.getText("MAP_COUNTRY_" + country.iso3.toUpperCase()));

        $("#more_detail", countryPopup.$container).attr("href", $("#more_detail", countryPopup.$container).data("base-url") + "#country=" + country.key + "&type=oas&period=w");

        $('#countrypop_sharing_icons .facebook a', countryPopup.$container).attr('href', shareCurrCountryPopup("facebook", country.name, country.iso2));
        $('#countrypop_sharing_icons .twitter a', countryPopup.$container).attr('href', shareCurrCountryPopup("twitter", country.name, country.iso2));
        $('#countrypop_sharing_icons .gplus a', countryPopup.$container).attr('href', "https://plus.google.com/share?url=" + encodeURIComponent(window.location.href));
        $('#countrypop_sharing_icons .vk a', countryPopup.$container).attr('href', shareCurrCountryPopup("vk", country.name, country.iso2));
    }
};

CountryPopup.prototype.updateCountryStats = function(countryPopup, country, rank, systems) {
    $("#countrypop_ranking", countryPopup.$container).html(rank);
    var keys = Object.keys(systems);
    for (var i=0; i < keys.length; i++) {
        var system = GTW.systems[keys[i]];
        $(".countrypop_subsystem[data-detectiontype='" + system.id + "'] .countrypop_subsystem_stats", countryPopup.$container).html(system.target_count[country]);
    }
};