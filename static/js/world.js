var GTW = GTW || {};

// get localized country name
GTW.get_country_name = function(country) {
    if (window.lang) {
        return lang.getText('MAP_COUNTRY_' + country.iso3);
    } else {
        return country.name.en;
    }
};

(function() {

    var PATTERN_SCALE = [ 4 * 360, 4 * 180 ];
    var SEA_DEPTH = 0.014;
    var EXTRUDE_HEIGHT = SEA_DEPTH * 10;

    // push vecs onto a flat array
    function push_vec(arr) {
        for (var i = 1; i < arguments.length; ++i)
            arr.push.apply(arr, arguments[i]);
    }

    GTW.Stars = (function() {
        function Stars() {
            var N_STARS = 10000;
            this.count = N_STARS;

            function make_verts() {
                var v = vec3.create();
                var stars = new Float32Array(N_STARS << 2);
                for (var i = 0; i < stars.length; i += 4) {
                    Random.unitVec3(v);
                    vec3.scale(v, v, 50);
                    stars[i + 0] = v[0];
                    stars[i + 1] = v[1];
                    stars[i + 2] = v[2];
                    stars[i + 3] = lerp(0.1, 2.5, Math.pow(Math.random(), 10.0));
                }

                return webgl.makeVertexBuffer(stars);
            }

            this.buffers = {
                vert: make_verts(),
            };

            this.programs = {
                main: webgl.getProgram('stars'),
            };

            this.mvp = mat4.create();
        };

        Stars.prototype.draw = function(env) {
            gl.disable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

            var pgm = this.programs.main.use();

            var mvp_stars = this.mvp;
            mat4.copy(mvp_stars, env.camera.view);
            mvp_stars[12] = 0;
            mvp_stars[13] = 0;
            mvp_stars[14] = 0;
            mat4.multiply(mvp_stars, env.camera.proj, mvp_stars);
            pgm.uniformMatrix4fv('mvp', mvp_stars);
            pgm.uniform4f('color', 1.0, 1.0, 1.0, 0.5);

            webgl.bindVertexBuffer(this.buffers.vert);
            pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
            gl.drawArrays(gl.POINTS, 0, this.count);
        };

        return Stars;
    })();



    GTW.Corona = (function() {

        function Corona() {

            var n_verts = 0;
            function make_verts() {
                var vertex = [];
                var n_segments = 128;
                for (var i = 0; i < n_segments+1; ++i) {
                    var theta = TWO_PI * i/n_segments;
                    var u = i/(n_segments + 1);
                    var x = Math.cos(theta);
                    var y = Math.sin(theta);
                    vertex.push(x, y, u, 0, x, y, u, 1);
                }
                n_verts = vertex.length / 4;
                return webgl.makeVertexBuffer(new Float32Array(vertex));
            }

            this.buffers = {
                vert: make_verts(),
            };
            this.vertex_count = n_verts;

            this.programs = {
                main: webgl.getProgram('corona'),
            };

            this.textures = {
                smoke: webgl.loadTexture2D(GTW.resource_url('textures/smoke.jpg'), { mipmap:true,
                    wrapS:gl.REPEAT, wrapT:gl.CLAMP_TO_EDGE  }),
            };
        }

        Corona.prototype.draw = function(env, zoff) {
            var pgm = this.programs.main.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniformMatrix3fv('bill', env.camera.bill);
            pgm.uniformSampler2D('t_smoke', this.textures.smoke);
            pgm.uniform1f('time', env.time);
            pgm.uniform1f('zoff', zoff || 0);

            gl.disable(gl.CULL_FACE);
            gl.enable(gl.BLEND);

            if (env.palette === 'dark') {
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
                pgm.uniform3f('color0', 0.07, 0.25, 0.16);
                pgm.uniform3f('color1', 0.00, 0.00, 0.00);
            } else {
                gl.blendFunc(gl.DST_COLOR, gl.ZERO);
                pgm.uniform3f('color0', 0.07, 0.25, 0.16);
                pgm.uniform3f('color1', 1.00, 1.00, 1.00);
            }

            webgl.bindVertexBuffer(this.buffers.vert);
            pgm.vertexAttribPointer('vertex', 4, gl.FLOAT, false, 0, 0);


            gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.vertex_count);

            gl.disable(gl.BLEND);
        };

        return Corona;

    })();



    GTW.World = (function() {

        function World() {
            this.buffers = {
                map: {
                    vert: null,
                    face: null,
                    line: null,
                },

                grid: {
                    vert: null,
                    elem: null,
                },
            };

            this.border = {
                buffer: gl.createBuffer(),
                count: 0
            };

            this.build_grid();

            this.programs = {
                main: webgl.getProgram('map_main'),
                grid: webgl.getProgram('map_grid'),
                line: webgl.getProgram('map_line'),
                pick: webgl.getProgram('map_pick'),
            };

            this.textures = {
                blur: webgl.loadTexture2D(GTW.resource_url('textures/map_blur.jpg')),
                pattern: webgl.loadTexture2D(GTW.resource_url('textures/pattern.png'), { mipmap:true, wrap:gl.REPEAT, aniso:4 }),
            };

            this.countries = [];
            this.countriesAll = [];

            function decode_hex(out, hex) {
                for (var i = 0; i < 3; ++i) {
                    var h = parseInt(hex.substr(2*i, 2), 16);
                    out[i] = h/255;
                }
                return out;
            }

            var self = this;
            this.key_to_country = {};

            var map_url = GTW.resource_url('earth_3d/map/map.json');

            this.extruded_country_index = -1;
            this.bordered_country_index = -1;

            GTW.load_resources({
                map: map_url
            }, function(resources) {
                self.countriesAll = resources.map.countries;
                self.countries = _.filter(resources.map.countries, function(cntr){
                    return !_.contains(disabledCountries, cntr.key);
                });
                // resources.map.countries = self.countries;

                self.geoip = (function() {

                    var iso2 = window.geoIP.country;
                    var coord = window.geoIP.coord;
                    var country = _.find(self.countries, function(c) { return c.iso2 == iso2 });

                    if (!country)
                        return null;

                    return {
                        country: country,
                        country_index: self.countries.indexOf(country),
                        coord: vec3.fromValues(coord[1], coord[0], SEA_DEPTH)
                    };
                }());

                if (self.geoip)
                    self.extruded_country_index = self.geoip.country_index;

                _.each(self.countries, function(c) {
                    c.tone = Math.random();

                    // decode cities
                    var c2 = Base64.decode(c.cities, Int16Array);
                    var cities = c.cities = new Float32Array(c2.length);
                    for (var i = 0; i < cities.length; i += 3) {
                        cities[i + 0] = c2[i + 0] / 32768.0;
                        cities[i + 1] = 180.0 * c2[i + 1] / 32768.0;
                        cities[i + 2] = 90.0 * c2[i + 2] / 32768.0;
                    }

                    //console.log(c.name.en, cities.length/3);
                    self.key_to_country[c.key] = c;

                    var geoip_country = self.geoip ? self.geoip.country : null;

                    c.borders = Base64.decode(c.borders, Uint16Array);
                    c.center = vec3.fromValues(
                        c.center[0],
                        c.center[1],
                        (c == geoip_country) ? SEA_DEPTH : 0);

                });

                self.build_geometry(resources.map);
                self.emit('loaded');
            });
        }

        make_event_emitter(World.prototype);

        World.prototype.build_grid = function() {
            var verts = [];
            var elems = [];

            var coord = vec3.create();
            coord[2] = -SEA_DEPTH;

            var v = vec3.create();
            var n = vec3.create();
            var uv = vec2.create();

            for (var lat = -180; lat <= 180; lat += 1) {
                for (var lon = -90; lon <= 90; lon += 1) {
                    vec2.set(coord, lat, lon);
                    vec2.set(uv, (lat + 180)/360, 1 - (lon + 90)/180);

                    GTW.project_mercator(v, coord);
                    vec3.set(n, 0, 0, -1);
                    push_vec(verts, v, n);

                    GTW.project_ecef(v, coord);
                    vec3.normalize(n, v);
                    push_vec(verts, v, n);

                    push_vec(verts, uv);
                }
            }

            function vertex_at(i, j) { return 181*i + j; }

            for (var i = 0; i < 360; ++i) {
                for (var j = 0; j < 180; ++j) {
                    elems.push(
                        // triangle 1
                        vertex_at(i, j),
                        vertex_at(i+1, j),
                        vertex_at(i+1, j+1),

                        // triangle 2
                        vertex_at(i+1, j+1),
                        vertex_at(i, j+1),
                        vertex_at(i, j)
                    );
                }
            }

            this.buffers.grid.vert = webgl.makeVertexBuffer(new Float32Array(verts));
            this.buffers.grid.elem = webgl.makeElementBuffer(new Uint16Array(elems));

            this.grid_vert_count = verts.length / 5;
            this.grid_elem_count = elems.length;
            this.grid_vert_stride_bytes = (3 + 3 + 3 + 3 + 2) << 2;
        };

        World.prototype.build_geometry = function(map_data) {
            var verts = [];
            var geom_data = map_data.geom;
            var coord = vec3.create();
            var v = vec3.create();
            var c = vec2.create();

            // convert indices
            geom_data.faces = Base64.decode(geom_data.faces, Uint16Array);
            geom_data.lines = Base64.decode(geom_data.lines, Uint16Array);
            geom_data.coast = Base64.decode(geom_data.coast, Uint16Array);

            // convert source verts
            geom_data.verts = Base64.decode(geom_data.verts, Int16Array);

            function push_vert(src_index, alt) {
                coord[0] = 180.0 * geom_data.verts[2*src_index + 0]/32768.0;
                coord[1] = 90.0 * geom_data.verts[2*src_index + 1]/32768.0;
                coord[2] = alt;

                // texcoord
                c[0] = 0.5 + coord[0]/360;
                c[1] = 0.5 - coord[1]/180;

                var vert_index = verts.length / (6 + 6 + 2);

                GTW.project_mercator(v, coord);
                verts.push(v[0], v[1], v[2]);
                verts.push(0, 0, 0);

                GTW.project_ecef(v, coord);
                verts.push(v[0], v[1], v[2]);
                verts.push(0, 0, 0);

                verts.push(c[0], c[1]);
                return vert_index;
            }

            var n_verts = geom_data.verts.length;
            for (var i = 0; i < n_verts; ++i)
                push_vert(i, 0);

            // new verts/faces for coast extrusion
            var faces = Array.apply([], geom_data.faces);   // convert to extendible array
            faces.length = geom_data.faces.length;
            faces.constructor = Array;

            this.coast_start = faces.length;
            for (var i = 0; i < geom_data.coast.length; i += 2) {
                var e0 = geom_data.coast[i + 0];
                var e1 = geom_data.coast[i + 1];

                var f0 = push_vert(e0, -SEA_DEPTH);
                var f1 = push_vert(e1, -SEA_DEPTH);

                var e0 = push_vert(e0, 0);
                var e1 = push_vert(e1, 0);

                faces.push(e0, e1, f0);
                faces.push(e1, f1, f0);
            }
        
            // XXX at this point... need to add border faces
            if (this.geoip) {
                var borders = this.geoip.country.borders;
                var b0 = 0xffff;
                for (var i = 0; i < borders.length; ++i) {
                    var b1 = borders[i];
                    if (b1 == 0xffff) {
                        b0 = 0xffff;
                        continue;
                    }
                    if (b0 != 0xffff) {
                        var f0 = push_vert(b0, 0);
                        var f1 = push_vert(b1, 0);

                        var e0 = push_vert(b0, 1.02*SEA_DEPTH);
                        var e1 = push_vert(b1, 1.02*SEA_DEPTH);

                        faces.push(e0, e1, f0);
                        faces.push(e1, f1, f0);
                    }
                    b0 = b1;
                }
            }

            this.coast_count = faces.length - this.coast_start;

            // calculate normals
            var v01 = vec3.create();
            var v02 = vec3.create();
            var stride = 6 + 6 + 2;
            for (var i = 0; i < faces.length; i += 3) {
                var e0 = faces[i + 0];
                var e1 = faces[i + 1];
                var e2 = faces[i + 2];

                for (var k = 0; k < 2; ++k) {
                    var offset = k * 6;

                    for (var j = 0; j < 3; ++j) {
                        v01[j] = verts[stride*e1 + offset + j] - verts[stride*e0 + offset + j];
                        v02[j] = verts[stride*e2 + offset + j] - verts[stride*e0 + offset + j];
                    }

                    vec3.cross(v, v01, v02);
                    vec3.normalize(v, v);

                    for (var j = 0; j < 3; ++j) {
                        verts[stride*e0 + offset + 3 + j] += v[j];
                        verts[stride*e1 + offset + 3 + j] += v[j];
                        verts[stride*e2 + offset + 3 + j] += v[j];
                    }
                }
            }

            vec3.forEach(verts, stride, 3, 0, function(v) {
                vec3.normalize(v, v);
            });

            vec3.forEach(verts, stride, 9, 0, function(v) {
                vec3.normalize(v, v);
            });

            // create webgl buffers
            this.buffers.map.vert = webgl.makeVertexBuffer(new Float32Array(verts));
            this.buffers.map.face = webgl.makeElementBuffer(new Uint16Array(faces));
            this.buffers.map.line = webgl.makeElementBuffer(new Uint16Array(geom_data.lines));

            this.face_count = geom_data.faces.length;
            this.line_count = geom_data.lines.length;
            this.map_vert_stride_bytes = (6 + 6 + 2) << 2;
        };

        World.prototype.draw = function(env) {
            if (!this.buffers.map.vert)
                return;

            gl.disable(gl.BLEND);
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.BACK);
            gl.enable(gl.DEPTH_TEST);

            var USE_GRID = true;
            var USE_MAP = true;
            var USE_LINES = true;
            var USE_COAST = true;
            var USE_BORDER = true;

            var projection_blend = smoothstep(env.projection.blend);
            var is_flat = projection_blend < 0.25;
            var self = this;

            if (USE_GRID) {
                var pgm = this.programs.grid.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniformSampler2D('t_blur', this.textures.blur);
                pgm.uniformSampler2D('t_pattern', this.textures.pattern);
                pgm.uniform2fv('pattern_scale', PATTERN_SCALE);
                pgm.uniform1f('blend', projection_blend);

                if (env.palette === 'dark') {
                    pgm.uniform3f('color0', 0.07, 0.09, 0.07);
                    pgm.uniform3f('color1', 0.36, 0.41, 0.36);
                } else {
                    pgm.uniform3f('color0', 0.93, 0.95, 0.93);
                    pgm.uniform3f('color1', 0.42, 0.48, 0.42);
                }

                var stride = this.grid_vert_stride_bytes;
                webgl.bindVertexBuffer(this.buffers.grid.vert);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, stride, 48);

                pgm.uniform4f('color', 1, 1, 1, 1);
                webgl.bindElementBuffer(this.buffers.grid.elem);

                pgm.uniform1f('offset_x', 0);
                gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);

                if (is_flat) {
                    pgm.uniform1f('offset_x', -20);
                    gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);
                    pgm.uniform1f('offset_x', 20);
                    gl.drawElements(gl.TRIANGLES, this.grid_elem_count, gl.UNSIGNED_SHORT, 0);
                }
            }

            if (USE_MAP) {
                var pgm = this.programs.main.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniformSampler2D('t_blur', this.textures.blur);
                pgm.uniform1f('blend', projection_blend);

                pgm.uniform3fv('view_pos', env.camera.viewPos);
                pgm.uniform3fv('light_pos', env.light.position);

                var stride = this.map_vert_stride_bytes;
                webgl.bindVertexBuffer(this.buffers.map.vert);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, stride, 48);

                pgm.uniform1f('alpha', 1.0);

                if (env.palette === 'dark') {
                    pgm.uniform3f('color0', 0.10, 0.12, 0.11);
                    pgm.uniform3f('color1', 0.20, 0.23, 0.21);
                } else {
                    pgm.uniform3f('color0', 0.41, 0.61, 0.48);
                    pgm.uniform3f('color1', 0.51, 0.69, 0.53);
                }

                gl.disable(gl.BLEND);
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                gl.enable(gl.DEPTH_TEST);

                //gl.depthFunc(gl.ALWAYS);
                webgl.bindElementBuffer(this.buffers.map.face);
                _.each(this.countriesAll, function(c, index) {
                    pgm.uniform1f('height', (index == self.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);

                    pgm.uniform1f('tone', c.tone);
                    pgm.uniform1f('offset_x', 0);
                    gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);

                    if (is_flat) {
                        pgm.uniform1f('offset_x', -20);
                        gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                        pgm.uniform1f('offset_x', 20);
                        gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                    }
                });
                gl.depthFunc(gl.LESS);

                if (USE_COAST) {
                    gl.disable(gl.CULL_FACE);
                    pgm.uniform1f('tone', 0.50);
                    pgm.uniform1f('offset_x', 0);
                    gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);

                    if (is_flat) {
                        pgm.uniform1f('offset_x', -20);
                        gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);
                        pgm.uniform1f('offset_x', 20);
                        gl.drawElements(gl.TRIANGLES, this.coast_count, gl.UNSIGNED_SHORT, this.coast_start << 1);
                    }
                }

                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
                gl.disable(gl.DEPTH_TEST);
                gl.enable(gl.CULL_FACE);

                // highlight
                if (env.pick_index >= 0) {
                    var c = this.countries[env.pick_index];
                    pgm.uniform1f('tone', 1.0);
                    pgm.uniform1f('alpha', 0.5);
                    pgm.uniform1f('offset_x', 0);
                    pgm.uniform1f('height', (env.pick_index == self.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);

                    gl.drawElements(gl.TRIANGLES, c.face_count, gl.UNSIGNED_SHORT, c.face_offset << 1);
                }
                gl.disable(gl.CULL_FACE);
            }

            if (USE_LINES) {
                gl.enable(gl.DEPTH_TEST);
                gl.depthMask(false);

                var pgm = this.programs.line.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                pgm.uniform1f('blend', projection_blend);
                pgm.uniform4f('color', 1,1,1, 0.125);
                pgm.uniform1f('height', 0);
                webgl.bindElementBuffer(this.buffers.map.line);
                gl.drawElements(gl.LINES, this.line_count, gl.UNSIGNED_SHORT, 0);

                gl.depthMask(true);
            }

            if (USE_BORDER) {
                if (env.pick_index !== this.bordered_country_index) {
                    // border should match pick index
                    this.set_border(env.pick_index);
                }

                if (this.border.count) {
                    var pgm = this.programs.line.use();
                    pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                    pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, 0);
                    pgm.vertexAttribPointer('normal', 3, gl.FLOAT, false, stride, 12);
                    pgm.vertexAttribPointer('position2', 3, gl.FLOAT, false, stride, 24);
                    pgm.vertexAttribPointer('normal2', 3, gl.FLOAT, false, stride, 36);
                    pgm.uniform1f('blend', projection_blend);
                    pgm.uniform1f('height', (this.bordered_country_index == this.extruded_country_index) ? EXTRUDE_HEIGHT : 0.0);
                    pgm.uniform4f('color', 1,1,1, 0.5);
                    webgl.bindElementBuffer(this.border.buffer);
                    gl.lineWidth(2);
                    gl.drawElements(gl.LINES, this.border.count, gl.UNSIGNED_SHORT, 0);
                    gl.lineWidth(1);
                }
            }

            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
        };

        World.prototype.pick = (function() {

            var mvp_pick = mat4.create();
            var pick_size = 4;
            var pick_pixels = new Uint8Array((pick_size*pick_size) << 2);

            var get_pick_framebuffer = (function() {

                var fb = null;
                var tex_color = null;
                var rb_depth = null;

                function create_pick_framebuffer() {
                    fb = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

                    var tex_color = webgl.createTexture2D({ size:pick_size });
                    gl.bindTexture(gl.TEXTURE_2D, tex_color);
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex_color, 0);

                    var rb_depth = gl.createRenderbuffer();
                    gl.bindRenderbuffer(gl.RENDERBUFFER, rb_depth);
                    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, pick_size, pick_size);
                    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, rb_depth);
                    gl.bindRenderbuffer(gl.RENDERBUFFER, null);

                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                }

                return function() {
                    if (!fb) {
                        create_pick_framebuffer();
                    }
                    return fb;
                };

            })();

            function pick(env, mx, my) {
                // setup viewport & projection matrix
                var vp = env.camera.viewport;
                var mvp = mvp_pick;
                var dx = pick_size;
                var dy = pick_size;
                mat4.identity(mvp);
                mat4.translate(mvp, mvp, [
                         (vp[2] - 2*(mx - vp[0])) / dx,
                        -(vp[3] - 2*(my - vp[1])) / dy,
                         0]);
                mat4.scale(mvp, mvp, [vp[2]/dx, vp[3]/dy, 1]);
                mat4.multiply(mvp, mvp, env.camera.mvp);

                var fb = get_pick_framebuffer();
                gl.viewport(0, 0, pick_size, pick_size);
                gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

                gl.clearColor(0, 0, 1, 0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

                // DRAW ALL THE STUFF
                gl.disable(gl.BLEND);
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                gl.enable(gl.DEPTH_TEST);

                var pgm = this.programs.pick.use();
                pgm.uniformMatrix4fv('mvp', mvp);
                webgl.bindVertexBuffer(this.buffers.map.vert);

                var stride = this.map_vert_stride_bytes;
                var offset = (env.projection.blend < 0.5) ? 0 : 24;
                pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, stride, offset);
                webgl.bindElementBuffer(this.buffers.map.face);

                _.each(this.countries, function(country, index) {
                    pgm.uniform1f('color', index/255);
                    gl.drawElements(gl.TRIANGLES, country.face_count, gl.UNSIGNED_SHORT, country.face_offset << 1);
                });

                // then draw the coast

                gl.disable(gl.CULL_FACE);
                gl.disable(gl.DEPTH_TEST);

                // END DRAW ALL THE STUFF
                gl.readPixels(0, 0, pick_size, pick_size, gl.RGBA, gl.UNSIGNED_BYTE, pick_pixels);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.viewport(vp[0], vp[1], vp[2], vp[3]);

                // find the most frequent index
                var best_index = -1;
                var best_count = 0;
                var counts = {};
                for (var i = 0; i < pick_pixels.length; i += 4) {
                    if (pick_pixels[i + 3]) {
                        var bubble_index = (pick_pixels[i + 1] << 8) | pick_pixels[i + 0];
                        var count = counts[bubble_index] || 0;
                        counts[bubble_index] = ++count;
                        if (count > best_count) {
                            best_index = bubble_index;
                            best_count = count;
                        }
                    }
                }

                return best_index;
            }

            return pick;
        })();
        // end pick

        World.prototype.set_border = function(country_index) {
            if (country_index < 0 ) {
                this.border.count = 0;
                this.bordered_country_index = -1;
                return;
            }

            var country = this.countries[country_index];

            var lines = [];
            var borders = country.borders;
            var last = -1;
            for (var i = 0; i < borders.length; ++i) {
                var e = borders[i];
                if (e == 0xffff) {
                    last = -1;
                    continue;
                }
                if (last >= 0) lines.push(last, e);
                last = e;
            }

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.border.buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(lines), gl.STATIC_DRAW);
            this.border.count = lines.length;
            this.bordered_country_index = country_index;
        };

        return World;

    })();

})();
