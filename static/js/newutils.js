// some extra utility functions
var GTW = GTW || {};

(function() {

    GTW.create_gradient_texture = function(stops) {
        var canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1;

        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

        _.each(stops, function(color, offset) {
            gradient.addColorStop(parseFloat(offset), color);
        });

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        var texture = webgl.createTexture2D({ filter:gl.LINEAR });
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

        return texture;
    };

    GTW.load_resources = function(urls, callback) {
        var results = {};
        var todo = _.keys(urls).length;

        function set_result(key, result) {
            results[key] = result;
            if (--todo === 0)
                callback(results);
        }

        _.each(urls, function(url, key) {
            if ((/\.(jpg|png)$/i).test(url)) {
                var img = new Image();
                img.src = url;
                img.onload = function() {
                    set_result(key, img);
                };
            }
            else
            {
                $.getJSON(url, function(result) {
                    set_result(key, result);
                });
            }
        });
    };

})();
