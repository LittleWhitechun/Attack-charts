var GTW = GTW || {};

(function() {

    GTW.Labels = (function() {

        var TEXTURE_SIZE = 2048;

        function Labels() {
            this.buffers = {
                vert: null,
            };

            this.programs = {
                label: webgl.getProgram('label'),
            };

            this.texture = webgl.createTexture2D({
                size: TEXTURE_SIZE,
                mipmap: true,
                min: gl.LINEAR_MIPMAP_LINEAR,
                aniso: 4,
                format: gl.LUMINANCE,
            });
            // stop webgl complaining while loading
            gl.generateMipmap(gl.TEXTURE_2D);

            this.country_count = 0;
            this.labels = [];
            this.geoip_iso2 = null;

            var self = this;
            this.load_label_data(function() {
                self.render_labels('en');
                self.project_labels('ecef');
            });
        }

        Labels.prototype.load_label_data = function(callback) {
            var self = this;

            $.getJSON(GTW.resource_url('data/labels.json'), function(labels_data) {
                // 1. grab label names from text.json, put into labels_data
                function translate_labels_data() {
                    var lang = window.lang;

                    _.each(labels_data.countries, function(c) {
                        var id = 'MAP_COUNTRY_' + c.iso3.toUpperCase();
                        c.name = lang.getText(id);
                    });

                    _.each(labels_data.cities, function(c) {
                        var id = 'MAP_CITY_' + c.code.toUpperCase();
                        c.name = lang.getText(id);
                    });
                }
                translate_labels_data();


                function Label() {
                    // lon/lat/alt
                    this.coord = vec3.create();
                    this.coord[2] = 0.0001;    // altitude

                    // current projection
                    this.pos = vec3.create();
                    this.mat = mat4.create();

                    this.box = vec4.create();

                    this.name = '';
                    this.font_size = 0;
                }

                function add_labels(labels_data, uppercase, reject) {
                    _.each(labels_data, function(label_data) {
                        // XXX bit ugly... fix this eventually
                        if (uppercase) {
                            if (reject && label_data.font_size < 5)
                                return;
                            //if (!reject && label_data.font_size > 5)
                            //    return;
                        }


                        var label = new Label();
                        vec2.copy(label.coord, label_data.coord);
                        label.coord[2] *= 2;    // bump the height a little
                        label.name = label_data.name;
                        label.font_size = label_data.font_size;

                        if (uppercase) {
                            label.name = label.name.toUpperCase();
                        } else {
                            label.font_size = 3;
                        }

                        if (label_data.iso2)
                            label.iso2 = label_data.iso2;

                        self.labels.push(label);
                    });
                }

                // bigger countries
                add_labels(labels_data.countries, true, true);
                self.country_count = self.labels.length;

                // smaller countries & cities
                add_labels(labels_data.cities, false, false);
                add_labels(labels_data.countries, true, false);
                self.city_count = self.labels.length - self.country_count;

                // set up vertex buffers
                var n_verts = 6 * 5 * self.labels.length;
                self.buffers.vert = webgl.makeVertexBuffer(new Float32Array(n_verts));

                // done
                callback();
            });
        };

        Labels.prototype.render_labels = function(lang) {
            // set up a 2K canvas and rendering context
            var canv = document.createElement('canvas');
            canv.width = canv.height = TEXTURE_SIZE;
            var ctx = canv.getContext('2d');
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canv.width, canv.height);

            ctx.font = '30px Ubuntu Mono';
            ctx.fillStyle = 'white';
            ctx.textBaseline = 'top';

            // render all labels to canvas
            var tpos = [0, 0];
            var th = 35;

            _.each(this.labels, function(label) {
                var text = label.name;
                var tw = ctx.measureText(text).width;

                if (tpos[0] + tw >= canv.width) {
                    tpos[0] = 0;
                    tpos[1] += th;
                }

                ctx.fillText(text, tpos[0], tpos[1] - 0);

                vec4.set(label.box, tpos[0], tpos[1], tpos[0] + tw, tpos[1] + th);
                vec4.scale(label.box, label.box, 1/TEXTURE_SIZE);

                tpos[0] += tw;
            });

            // update texture
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, canv);
            gl.generateMipmap(gl.TEXTURE_2D);
        };

        Labels.prototype.project_labels = function(projection_type) {
            if (!this.labels.length) return;

            var project = (projection_type == 'ecef') ? GTW.project_ecef : GTW.project_mercator;
            var dir = vec3.create();
            var v0 = vec3.create();
            var v1 = vec3.create();

            function get_matrix(out, v, scale_x, scale_y) {
                mat4.identity(out);
                //mat4.rotateX(l.mat, l.mat, HALF_PI);

                //var scale_y = 0.01 * font_size;
                //var scale_x = scale_y * width;

                if (projection_type == 'ecef') {
                    vec3.normalize(dir, v);
                    vec3.set(v0, 0, 1, 0);
                    vec3.cross(v0, dir, v0);
                    vec3.normalize(v0, v0);
                    vec3.cross(v1, v0, dir);

                    out[0] = v0[0];
                    out[1] = v0[1];
                    out[2] = v0[2];

                    out[4] = dir[0];
                    out[5] = dir[1];
                    out[6] = dir[2];

                    out[8] = v1[0];
                    out[9] = v1[1];
                    out[10] = v1[2];

                    mat4.rotateX(out, out, HALF_PI);
                }

                mat4.scale(out, out, [scale_x, scale_y, 1]);
                out[12] = v[0];
                out[13] = v[1];
                out[14] = v[2];
            }

            var verts = [];
            var v = vec3.create();
            var quad = [ -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, -1, ];
            var self = this;

            _.each(this.labels, function(label) {
                // deal with extruded country
                if (label.iso2 == self.geoip_iso2) {
                    label.coord[2] = 0.015;
                } else {
                    label.coord[2] = 0.001;
                }

                project(label.pos, label.coord);

                var scale = 1.00*label.font_size;
                get_matrix(label.mat, label.pos,
                    scale*(label.box[2] - label.box[0]),
                    scale*(label.box[3] - label.box[1]));

                for (var i = 0; i < quad.length; i += 2) {
                    // position
                    v[0] = quad[i + 0];
                    v[1] = quad[i + 1];
                    v[2] = 0;
                    vec3.transformMat4(v, v, label.mat);
                    verts.push(v[0], v[1], v[2]);

                    // texcoord
                    v[0] = 0.5*(1 + quad[i + 0]);
                    v[1] = 0.5*(1 + quad[i + 1]);
                    v[0] = lerp(label.box[2], label.box[0], v[0]);
                    v[1] = lerp(label.box[3], label.box[1], v[1]);
                    verts.push(v[0], v[1]);
                }
            });

            // update vertex buffer
            webgl.bindVertexBuffer(this.buffers.vert);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(verts));
        };

        var v = vec3.create();

        Labels.prototype.draw = function(env) {
            if (this.labels.length == 0)
                return;

            gl.enable(gl.DEPTH_TEST);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            gl.depthMask(false);

            // center of circle of interest
            env.project(v, env.geocam.coord);
            var MERCATOR_RADIUS = 3;
            var ECEF_RADIUS = 10;
            var radius = lerp(MERCATOR_RADIUS, ECEF_RADIUS, env.projection.blend);

            var pgm = this.programs.label.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform4f('circle_of_interest', v[0], v[1], v[2], radius);
            pgm.uniformSampler2D('t_color', this.texture);

            webgl.bindVertexBuffer(this.buffers.vert);
            pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 20, 0);
            pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, 20, 12);

            // country labels
            pgm.uniform1i('inside', 0);
            gl.drawArrays(gl.TRIANGLES, 0, 6 * this.country_count);

            // city labels
            pgm.uniform1i('inside', 1);
            gl.drawArrays(gl.TRIANGLES, 6 * this.country_count, 6 * this.city_count);

            gl.depthMask(true);
            gl.disable(gl.BLEND);
        };

        return Labels;

    })();

})();
