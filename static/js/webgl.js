// a little WebGL sugar
var webgl = (function() {

    // keeps track of array flag of the vertex attributes
    var attribArrayManager = {
        enabledMask: 0,
        maxEnabledIndex: -1,

        disableAll: function() {
            for (var index = 0; index <= this.maxEnabledIndex; ++index) {
                var mask = 1 << index;
                if (mask & this.enabledMask)
                    gl.disableVertexAttribArray(index);
            }

            this.enabledMask = 0;
            this.maxEnabledIndex = -1;
        },

        enable: function(index) {
            var mask = 1 << index;
            if (!(mask & this.enabledMask)) {
                gl.enableVertexAttribArray(index);
                this.enabledMask |= mask;
                this.maxEnabledIndex = Math.max(this.maxEnabledIndex, index);
            }
        },

        disable: function(index) {
            var mask = 1 << index;
            if (mask & this.enabledMask) {
                gl.disableVertexAttribArray(index);
                this.enabledMask &= ~mask;
                // XXX don't bother changing maxEnabledIndex
            }
        },
    };

    // program class
    function Program(name) {
        this.name = name;
        this.program = null;

        this.attribs = {};
        this.uniforms = {};
    }

    Program.prototype.setProgram = function(program) {
        this.program = program;

        var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < numAttribs; ++i) {
            var attrib = gl.getActiveAttrib(program, i);
            this.attribs[attrib.name] = {
                index: gl.getAttribLocation(program, attrib.name),
                name: attrib.name,
                size: attrib.size,
                type: attrib.type,
            };
        }

        var nextTexUnit = 0;
        function assignTexUnit(uniform) {
            if (uniform.type == gl.SAMPLER_2D || uniform.type == gl.SAMPLER_CUBE) {
                var unit = nextTexUnit;
                nextTexUnit += uniform.size;
                return unit;
            }

            return -1;
        }

        var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < numUniforms; ++i) {
            var uniform = gl.getActiveUniform(program, i);
            this.uniforms[uniform.name] = {
                location: gl.getUniformLocation(program, uniform.name),
                name: uniform.name,
                size: uniform.size,
                type: uniform.type,
                texUnit: assignTexUnit(uniform),
            };
        }
    };

    Program.prototype.use = function() {
        gl.useProgram(this.program);
        attribArrayManager.disableAll();
        return this;
    };

    Program.prototype.getUniformLocation = function(name) {
        var uniform = this.uniforms[name];
        //console.assert(uniform, 'missing uniform: '+name);
        return uniform ? uniform.location : null;
    };

    Program.prototype.getAttribIndex = function(name) {
        var attrib = this.attribs[name];
        //console.assert(uniform, 'missing attrib: '+name);
        return attrib ? attrib.index : -1;
    };

    Program.prototype.uniform1i = function(name, x) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1i(location, x);
    };

    Program.prototype.uniform1f = function(name, x) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1f(location, x);
    };

    Program.prototype.uniform2f = function(name, x, y) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform2f(location, x, y);
    };

    Program.prototype.uniform3f = function(name, x, y, z) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform3f(location, x, y, z);
    };

    Program.prototype.uniform4f = function(name, x, y, z, w) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform4f(location, x, y, z, w);
    };

    Program.prototype.uniform1fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform1fv(location, v);
    };

    Program.prototype.uniform2fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform2fv(location, v);
    };

    Program.prototype.uniform3fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform3fv(location, v);
    };

    Program.prototype.uniform4fv = function(name, v) {
        var location = this.getUniformLocation(name);
        if (location)
            gl.uniform4fv(location, v);
    };

    Program.prototype.uniformMatrix3fv = function(name, data, transpose) {
        var location = this.getUniformLocation(name);
        if (location) {
            transpose = transpose || false;
            gl.uniformMatrix3fv(location, transpose, data);
        }
    };

    Program.prototype.uniformMatrix4fv = function(name, data, transpose) {
        var location = this.getUniformLocation(name);
        if (location) {
            transpose = transpose || false;
            gl.uniformMatrix4fv(location, transpose, data);
        }
    };

    Program.prototype.uniformSampler = function(name, target, texture) {
        var uniform = this.uniforms[name];
        if (uniform) {
            gl.activeTexture(gl.TEXTURE0 + uniform.texUnit);
            gl.bindTexture(target, texture);
            gl.uniform1i(uniform.location, uniform.texUnit);
        }
    };

    Program.prototype.uniformSampler2D = function(name, texture) {
        this.uniformSampler(name, gl.TEXTURE_2D, texture);
    };

    Program.prototype.uniformSamplerCube = function(name, texture) {
        this.uniformSampler(name, gl.TEXTURE_CUBE_MAP, texture);
    };

    Program.prototype.enableVertexAttribArray = function(name) {
        var attrib = this.attribs[name];
        if (attrib)
            attribArrayManager.enable(attrib.index);
    };

    Program.prototype.disableVertexAttribArray = function(name) {
        var attrib = this.attribs[name];
        if (attrib)
            attribArrayManager.disable(attrib.index);
    };

    Program.prototype.vertexAttribPointer = function(name, size, type, normalize, offset, stride) {
        var attrib = this.attribs[name];
        if (attrib) {
            attribArrayManager.enable(attrib.index);
            gl.vertexAttribPointer(attrib.index, size, type, normalize, offset, stride);
        }
    };

    // program creation
    function createShader(type, source, name) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            return shader;

        // compilation error
        var log = gl.getShaderInfoLog(shader);

        forEachLine(source, function(line, i) {
            var lineNumber = ('  '+(i + 1)).slice(-3);
        });

        throw {
            type: 'COMPILE',
            shaderType: (type == gl.VERTEX_SHADER ? 'vertex' : 'fragment'),
            name: name,
            shader: shader,
            source: gl.getShaderSource(shader),
            log: gl.getShaderInfoLog(shader),
        };
    }

    function createProgram(options) {
        //var FRAGMENT_HEADER = 'precision mediump float;\n';
        var FRAGMENT_HEADER = 'precision highp float;\n';
        var program = gl.createProgram();
        gl.attachShader(program, createShader(gl.VERTEX_SHADER, options.vertexSource, options.name));
        gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, FRAGMENT_HEADER + options.fragmentSource, options.name));
        gl.linkProgram(program);

        if (gl.getProgramParameter(program, gl.LINK_STATUS))
            return program;

        // link error
        throw {
            type: 'LINK',
            name: options.name,
            program: program,
            log: gl.getProgramInfoLog(program),
        };
    }

    // program loader
    var shaderSources = {};
    function fetchShaderSources(urls) {
        shaderSources = {};

        function processSourceText(text) {
            var regex = /^\/\/\s*(\w+(?:.(vertex|fragment))?)\s*\/\//;
            var source = [];
            forEachLine(text,  function(line) {
                var m = regex.exec(line);
                if (m) {
                    var key = m[1];
                    shaderSources[key] = source = [];
                } else {
                    source.push(line);
                }
            });
        }

        _.each(urls, function(url) {
            if (_.isObject(url)) {
                _.extend(shaderSources, url);
                return;
            }

            // fetch url synchronously
            $.ajax({
                url: url,
                async: false,
                cache: false,
                success: processSourceText,
            });
        });

        // concatenate lines
        _.each(shaderSources, function(source, key) {
            if (_.isArray(source))
                shaderSources[key] = source.join('\n');
        });

        //saveFileAs(JSON.stringify(shaderSources), 'shaders.js', 'application/js');
    }

    var getProgram = (function() {
        function checkSourceExists(name) {
            var exists = !!shaderSources[name];
            console.assert(exists, name+' not found.');
            return exists;
        }

        function makeProgram(name, options) {
            if (!(checkSourceExists(name) &&
                  checkSourceExists(name+'.vertex') &&
                  checkSourceExists(name+'.fragment')))
            {
                return;
            }

            options = options || {};

            var defines = '';
            if (options.defines) {
                _.each(options.defines, function(dv, dk) {
                    defines += '#define '+dk+' '+dv+'\n';
                });
            }

            // common functions, uniforms, varyings etc
            var common = defines + (shaderSources[name] || '');

            // remove attributes for fragment shader
            var commonFragment = _.reject(common.split('\n'), function(line) {
                    return line.match(/attribute/);
                }).join('\n');

            try {
                var program = new Program(name);
                program.setProgram(createProgram({
                    name: name,
                    vertexSource: common + shaderSources[name+'.vertex'],
                    fragmentSource: commonFragment + shaderSources[name+'.fragment'],
                }));

                return program;
            }
            catch (error) {
                onGLSLError(error);
                return null;
            }
        }

        function hashProgram(name, options) {
            var defs = [];
            if (options && options.defines) {
                _.each(options.defines, function(dv, dk) {
                    defs.push(dk+'='+dv);
                });
            }

            return name+' '+defs.join(' ');
        }

        return _.memoize(makeProgram, hashProgram);
    })();

    // render texture
    function RenderTexture(width, height, depth, floatColor) {
        this.width = width;
        this.height = height;

        this.framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        this.dataType = floatColor ? gl.FLOAT : gl.UNSIGNED_BYTE;
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, this.dataType, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
        this.depthTexture = null;
        this.depthRenderbuffer = null;

        depth = depth ? 'TEXTURE' : 'NONE';
        depth = 'RENDERBUFFER';
        switch (depth) {
            case 'TEXTURE':
                this.depthTexture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
                break;

            case 'RENDERBUFFER':
                this.depthRenderbuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRenderbuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthRenderbuffer);
                gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            break;
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    RenderTexture.prototype.render = function(callback) {
        var vp = gl.getParameter(gl.VIEWPORT);
        gl.viewport(0, 0, this.width, this.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        callback();

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(vp[0], vp[1], vp[2], vp[3]);
    };

    RenderTexture.prototype.resize = function(width, height) {
        this.width = width;
        this.height = height;

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, this.dataType, null);

        if (this.depthTexture) {
            gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);
        }

        if (this.depthRenderbuffer) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRenderbuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        }
    };

    // webgl object
    return {
        makeBuffer: function(target, data, usage) {
            usage = usage || gl.STATIC_DRAW;
            var buffer = gl.createBuffer();
            gl.bindBuffer(target, buffer);
            gl.bufferData(target, data, usage);
            return buffer;
        },

        makeVertexBuffer: function(arr, usage) {
            return this.makeBuffer(gl.ARRAY_BUFFER, arr, usage);
        },

        makeElementBuffer: function(arr, usage) {
            return this.makeBuffer(gl.ELEMENT_ARRAY_BUFFER, arr, usage);
        },

        bindVertexBuffer: function(buffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        },

        bindElementBuffer: function(buffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        },

        setupCanvas: function(canvas, options) {
            options = options || {};
            options = _.defaults(options, {
                antialias: false,
                preserveDrawingBuffer: true,
                extensions: [],
                shaderSources: [ 'shaders/all-shaders.glsl' ],
            });

            function tryContext(type) {
                try {
                    return canvas.getContext(type, options);
                }
                catch (e) {
                    // XXX return the exception?
                    return null;
                }
            }

            var gl = tryContext('webgl') || tryContext('experimental-webgl');
            if (gl) {
                var extensions = this.extensions = {};
                _.each(options.extensions, function(name) {
                    extensions[name] = gl.getExtension(name);
                });

                window.gl = gl;

                // load the shaders
                fetchShaderSources(options.shaderSources);
            }

            return gl;
        },

        getProgram: getProgram,

        createTexture2D: function(options) {
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);

            options = options || {};
            options.width = options.width || options.size || 4;
            options.height = options.height || options.width;
            options.format = options.format || gl.RGBA;
            options.type = options.type || gl.UNSIGNED_BYTE;
            options.mag = options.mag || options.filter || gl.NEAREST;
            options.min = options.min || options.mag;

            options.wrapS = options.wrapS || options.wrap || gl.CLAMP_TO_EDGE;
            options.wrapT = options.wrapT || options.wrapS;

            options.dataFormat = options.dataFormat || options.format;
            options.data = options.data || null;

            var level = 0;
            var border = 0;

            gl.texImage2D(gl.TEXTURE_2D, level, options.format,
                          options.width, options.height, border,
                          options.dataFormat, options.type, options.data);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, options.min);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, options.mag);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.wrapT);

            if (options.aniso) {
                var ext = webgl.extensions.WEBKIT_EXT_texture_filter_anisotropic;
                ext && gl.texParameteri(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, options.aniso);
            }

            return texture;
        },

        loadTexture2D: function(url, options) {
            options = options || {};
            options = _.defaults(options, {
                mipmap: false,
                flip: false,
                callback: null,
                filter: gl.LINEAR,
            });

            var texture = this.createTexture2D(options);

            var image = new Image();
            image.src = url;
            image.onload = function() {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flip ? 1 : 0);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

                if (options.mipmap) {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                    gl.generateMipmap(gl.TEXTURE_2D);
                }

                if (options.callback)
                    options.callback(texture);
            };

            return texture;
        },

        RenderTexture: RenderTexture,
    };

})();


// GLSL error reporting
window.onGLSLError = function(error) {
    var errors = {};
    forEachLine(error.log, function(e, i) {
        var match = e.match(/^ERROR: \d+:(\d+):(.*)$/);
        if (match) {
            var line = parseInt(match[1]);
            var desc = match[2];

            if (!errors[line])
                errors[line] = [];

            errors[line].push(desc);
        }
    });

    switch (error.type) {
        case 'COMPILE':
            html = "<div class=\"description\">GLSL compile error in " + (error.shaderType.toLowerCase()) + " shader \"" + error.name + "\":</div>";

            forEachLine(error.source, function(line, index) {
                var descs = errors[index+1];
                if (descs) {
                    descs = _.map(descs, function(desc) {
                        return "<div class='description'>" + desc + "</div>";
                    }).join('');

                    html += "<span class='highlight'>" + line + "</span> " + descs;
                }
                else
                {
                    html += line + '\n';
                }
            });

            break;

        case 'LINK':
            html = "<div class=\"description\">GLSL link error in program \"" + error.name + "\":<br/>\n" + error.log + "\n</div>";
            break;
    }

    $('.glsl-error').html('<code>' + html + '</code>').show();
};
