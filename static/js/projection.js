var GTW = GTW || {};

// coordinate projection maths
(function() {

    //var ALT_SCALE = 0.000010;       // ecer
    //var ALT_SCALE = 0.000005;       // mercator
    var ALT_SCALE = 1.0;
    var SCALE = 10;

    GTW.project_mercator = function(out, p) {
        var lon = p[0];
        var lat = p[1];

        var phi = Math.PI * lat/180;
        var ly = 90/Math.PI * Math.log(Math.tan(0.25*Math.PI + 0.5*phi));

        out[0] = -lon/180;
        out[1] = clamp(ly/90, -1, 1);
        out[2] = -ALT_SCALE * p[2];
        vec3.scale(out, out, SCALE);
    }

    GTW.project_ecef = function(out, p) {
        // LLA to ECEF
        // http://stackoverflow.com/questions/10473852/convert-latitude-and-longitude-to-point-in-3d-space

        var lon = deg2rad(p[0]);
        var lat = deg2rad(p[1]);
        var alt = ALT_SCALE * p[2];

        var f = 1/298.257223563;    // flattening
        var ff = (1 - f) * (1 - f);
        //var R = 1;                  // equitorial radius

        var lc = Math.cos(lat);
        var ls = Math.sin(lat);

        //var C = 1 / Math.sqrt(lc*lc + ff*ls*ls);
        //var S = C * ff;
        var C = 1;
        var S = 1;
        
        out[0] = -(C + alt)*lc * Math.cos(lon);
        out[2] =  (C + alt)*lc * Math.sin(lon);
        out[1] =  (S + alt)*ls;
        vec3.scale(out, out, SCALE);
    }

})();
