(function() {

    // constants
    var PI = Math.PI;
    var HALF_PI = PI / 2;
    var TWO_PI = 2 * PI;

    // math functions
    function deg2rad(deg) {
        return Math.PI * deg / 180;
    }

    function rad2deg(rad) {
        return 180 * rad / Math.PI;
    }

    function lerp(a, b, x) {
        return (1 - x) * a + x * b;
    }

    function clamp(x, a, b) {
        if (x < a)
            return a;
        else if (x > b)
            return b;
        else
            return x;
    }

    function smoothstep(x) {
        return 3 * x * x - 2 * x * x * x;
    }

    function modulo(x, y) {
        return ((x % y) + y) % y;
    }

    function sign(x) {
        if (x < 0)
            return -1;
        else if (x > 0)
            return 1;
        else
            return 0;
    }

    // utility functions
    function toggleProperty(obj, name) {
        return obj[name] = !obj[name];
    }

    function hashDJB2(str) {
        var h = 5381;
        for (var i = str.length-1; i >=0; --i)
            h = ((h << 5) + h) + str.charCodeAt(i);
        return h;
    }

    function makeUuid(delim) {
        function S4(count) {
            count = count || 1;
            var result = '';
            while (count--)
                result += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            return result;
        }

        if (_.isUndefined(delim))
            delim = '-';

        return _.map([ 2, 1, 1, 1, 3 ], function(n) { return S4(n) }).join(delim);
    }


    // random numbers
    var _gaussNext = 0;
    var random = Math.random;

    var Random = {
        // < n
        cardinal: function(n) {
            return Math.floor(n * random());
        },

        // [lb, ub)
        integer: function(lb, ub) {
            return lb + Math.floor((ub - lb) * random());
        },

        // [lb, ub]
        uniform: function(lb, ub) {
            return lerp(lb, ub, Math.random());
        },


        gauss: function(mu, sigma) {
            var z = _gaussNext;
            _gaussNext = 0;
            if (z === 0) {
                var x2pi = TWO_PI * random();
                var g2rad = Math.sqrt(-2 * Math.log(1 - random()));
                z = Math.cos(x2pi) * g2rad;
                _gaussNext = Math.sin(x2pi) * g2rad;
            }
            
            return mu + z*sigma
        },

        choose: function(arr) {
            var i = Random.cardinal(arr.length);
            return arr[i];
        },

        uniformVec3: function(vec, scale) {
            vec[0] = scale * 2*(random() - 0.5);
            vec[1] = scale * 2*(random() - 0.5);
            vec[2] = scale * 2*(random() - 0.5);
            return vec;
        },

        unitVec3: function(vec) {
            Random.uniformVec3(vec, 1);
            vec3.normalize(vec, vec);
            return vec;
        },

        shuffle: function(arr) {
            for (var i = arr.length-1; i >= 0; --i) {
                var j = Random.cardinal(i + 1);
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        },

        distribute: function(a, b, exp) {
            return lerp(a, b, Math.pow(random(), exp));
        },
    };

    function miniball(points, numIters) {
        var numIters = numIters || 1;

        var indices = [];
        for (var i = 0; i < points.length; ++i)
            indices.push(i);

        var ballCenter = vec3.create();
        var bestCenter = vec3.create();
        var ballRadius = 0;
        var bestRadius = Infinity;

        var q = vec3.create();
        for (var iter = 0; iter < numIters; ++iter) {
            if (iter > 0)
                Random.shuffle(indices);

            for (var i = 0; i < indices.length; ++i) {
                var index = indices[i];
                var p = points[index];

                if (i === 0) {
                    vec3.copy(ballCenter, p);
                    ballRadius = 0;
                    continue;
                }

                if (vec3.dist(ballCenter, p) < ballRadius)
                    continue;

                vec3.sub(q, ballCenter, p);
                vec3.normalize(q, q);
                vec3.scale(q, q, ballRadius);
                vec3.add(q, q, ballCenter);
                vec3.lerp(ballCenter, p, q, 0.5);
                ballRadius = 0.5 * vec3.dist(p, q);
                if (ballRadius > bestRadius)
                    break;
          }

          if (ballRadius && ballRadius < bestRadius) {
            vec3.copy(bestCenter, ballCenter);
            bestRadius = ballRadius;
          }
        }

        return {
          center: bestCenter,
          radius: bestRadius
        };
    }

    // base64 functions
    var Base64 = {
        decode: function(src, type) {
            var raw = atob(src);
            var len = raw.length;
            var buf = new ArrayBuffer(len);
            var dst = new Uint8Array(buf);
            for (var i = 0; i < len; ++i) 
                dst[i] = raw.charCodeAt(i);

            return type ? new type(buf) : buf;
        },

        encode: function(src) {
            var src = new Uint8Array(src.buffer, src.byteOffset, src.byteLength);
            var len = src.length;
            var dst = '';
            for (var i = 0; i < len; ++i)
                dst += String.fromCharCode(src[i]);

            return btoa(dst);
        },
    };

    // precision timing
    var timeNow;
    if (this.performance && performance.now) {
        timeNow = function() {
            return 0.001*performance.now();
        };
    }
    else 
    {
        timeNow = function() {
            return 0.001*Date.now();
        };
    }

    function forEachLine(text, callback) {
        var sp = 0;
        var lineno = 0;
        while (sp < text.length) {
            var ep = text.indexOf('\n', sp);
            if (ep == -1)
                ep = text.length;

            var line = text.substr(sp, ep - sp);
            sp = ep + 1;

            callback(line, lineno++);
        }
    }

    // Firefox layerX / WebKit offsetX
    function getMouseEventOffset(e) {
        if (_.isUndefined(e.offsetX))
            return [e.layerX, e.layerY];
        else
            return [e.offsetX, e.offsetY];
    }

    // let's pollute some global namespace
    _.extend(this, {
        PI: PI,
        HALF_PI: HALF_PI,
        TWO_PI: TWO_PI,
        deg2rad: deg2rad,
        rad2deg: rad2deg,
        lerp: lerp,
        clamp: clamp,
        smoothstep: smoothstep,
        modulo: modulo,
        sign: sign,
        toggleProperty: toggleProperty,
        hashDJB2: hashDJB2,
        makeUuid: makeUuid,
        Random: Random,
        miniball: miniball,
        Base64: Base64,
        timeNow: timeNow,
        forEachLine: forEachLine,
        getMouseEventOffset: getMouseEventOffset,
    });

    // requestAnimationFrame shim
    if (!this.requestAnimationFrame) {
        this.requestAnimationFrame = (
            this.webkitRequestAnimationFrame ||
            this.mozRequestAnimationFrame ||
            this.msRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, 1000/60);
            });
    }

    // saveFileAs (might be webkit only...)
    this.saveFileAs = function(data, filename, type) {
        type = type || 'application/octet-binary';
        var blob = new Blob([ data ], { type: type });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.click();
        URL.revokeObjectURL(blob);
    };

}).call(window);


// some extra functions for gl-matrix
vec2.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
};

vec2.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
};

vec3.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
    out[2] = source[offset + 2];
};

vec3.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
    source[offset + 2] = vec[2];
};

vec4.load = function(out, source, offset) {
    out[0] = source[offset + 0];
    out[1] = source[offset + 1];
    out[2] = source[offset + 2];
    out[3] = source[offset + 3];
};

vec4.save = function(vec, source, offset) {
    source[offset + 0] = vec[0];
    source[offset + 1] = vec[1];
    source[offset + 2] = vec[2];
    source[offset + 3] = vec[3];
};

vec2.perp = function(out, vec) {
    var tmp = vec[0];
    out[0] = -vec[1];
    out[1] = tmp;
};

mat4.lerp = function(out, a, b, f) {
    for (var i = 0; i < 16; ++i) {
        out[i] = (1-f)*a[i] + f*b[i];
    }
    return out;
};

function make_event_emitter(obj) {
    function get_listeners(obj) {
        return obj._listeners || (obj._listeners = {});
    }

    _.assign(obj, {
        on: function(event_name, callback) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (!l) l = ll[event_name] = [];
            l.push(callback);
        },

        off: function(event_name, callback) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (l) ll[event_name] = _.without(l, callback);
        },

        emit: function(event_name) {
            var ll = get_listeners(this);
            var l = ll[event_name];
            if (l) {
                var args = Array.prototype.slice.call(arguments, 1);
                l.forEach(function(callback) { callback.apply(null, args) });
            }
        }
    });
}
