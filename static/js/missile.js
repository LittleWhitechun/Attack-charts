var GTW = GTW || {};

// The MissileSystem keeps track of active missile trajectories and explosions and
// renders them.
(function () {
    // for overall infection count/rank
    GTW.total_target_count = new Int32Array(256);
    GTW.total_target_rank = new Int32Array(256);
    GTW.top_infected = new Int32Array(10);

    // for rank calculations
    var country_keys = [];
    for (var i = 0; i < 256; ++i) {
        if (_.contains(disabledCountries, i)) {
            continue
        }
        country_keys.push(i);
    }

    function compute_ranks(count, rank) {
        country_keys.sort(function (a, b) {
            return count[b] - count[a];
        });

        _.each(country_keys, function (country_key, index) {
            rank[country_key] = 1 + index;
        });
    }

    // overall rank
    GTW.compute_total_target_rank = function () {
        compute_ranks(GTW.total_target_count, GTW.total_target_rank);

        for (var i = 0; i < GTW.top_infected.length; ++i) {
            GTW.top_infected[i] = country_keys[i];
        }
    }

    // iOS 8 is returning element [0] as undefined when using lodash's each iterator
    // https://bugs.webkit.org/show_bug.cgi?id=142792
    GTW.systems_foreach = function (callback) {
        var keys = Object.keys(GTW.systems);
        for (var i=0; i < keys.length; i++) {
            var system = GTW.systems[keys[i]];
            callback(system);
        }
    };

    // counter reset at midnight
    function reset_counters() {
        // first reset everything to zero
        GTW.systems_foreach(function (system) {
            system.count = 0;
            for (var i = 0; i < 256; ++i)
                system.target_count[i] = 0;
        });

        for (var i = 0; i < 256; ++i)
            GTW.total_target_count[i] = 0;
    }

    function update_counters(data) {
        if (!data)
            return;

        // now evaluate the totals data
        for (var i = 0; i < data.length; i += 2) {
            var k = data[i + 0];
            var count = data[i + 1];

            var system_id = (k >> 16) & 0xff;
            var target_id = (k >> 8) & 0xff;

            if (!(!!GTW.systems[system_id]))
                continue;

            var system = GTW.systems[system_id];

            if (!! system) {
                if (target_id === 0) {
                    // global count
                    system.count = count;
                } else {
                    // per-country count
                    system.target_count[target_id] = count;

                    // per-country all-system count
                    GTW.total_target_count[target_id] += count;
                }
            }
        }
    }

    // from array of objects with a "start_time" property
    function find_oldest(now, arr) {
        var oldest = null, oldest_time = 0;
        for (var i = 0; i < arr.length; ++i) {
            var obj = arr[i];
            if (!obj.alive)
                return obj;

            var elapsed = now - obj.start_time;
            if (elapsed > oldest_time) {
                oldest_time = elapsed;
                oldest = obj;
            }
        }

        return oldest ? oldest : _.sample(arr);
    }

    var N_MISSILES = 1000;
    var N_STEPS = 100;

    var N_VERTS_PER_MISSILE = N_STEPS * 8;
    var N_ICONS = N_MISSILES;












    function MissileSystem(env) {
        var self = this;

        this.mode_params;
        this.setMode("world");

        this.programs = {
            missile: webgl.getProgram('missile'),
            impact: webgl.getProgram('impact'),
            icon: webgl.getProgram('icon'),
            cone: webgl.getProgram('cone'),
        };

        this.buffers = {
            missile: null,
            icon: null,
            cone: null,
            quad: webgl.makeVertexBuffer(new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        };

        this.textures = {
            impact: webgl.loadTexture2D(GTW.resource_url('textures/impact-512.jpg'), {mipmap: false}),
        };

        // cone geometry
        (function () {

            var verts = [];
            var n_cols = 32;
            for (var i = 0; i < n_cols; ++i) {
                var theta = TWO_PI * i / (n_cols - 1);
                var x = Math.cos(theta);
                var y = Math.sin(theta);
                verts.push(x, 0, y, x, 1, y);
            }

            verts = new Float32Array(verts);
            self.buffers.cone = webgl.makeVertexBuffer(verts);
            self.n_cone_verts = verts.length / 3;

        })();

        this.init_missiles(env);
        this.init_icons();
    }

    MissileSystem.prototype.init_missiles = function (env) {
        var self = this;

        var verts = new Float32Array(N_MISSILES * N_VERTS_PER_MISSILE);
        var vert_buffer = null;

        function Missile(index) {
            this.index = index;
            this.verts = verts.subarray(this.index * N_VERTS_PER_MISSILE, (this.index + 1) * N_VERTS_PER_MISSILE);

            this.source_coord = vec3.create();
            this.target_coord = vec3.create();

            this.source_mat = mat4.create();
            this.target_mat = mat4.create();

            this.start_time = 0;
            this.alive = false;

            //this.style = 1;
            //this.color = GTW.systems[this.style].getRGBColor();

            this.has_source = true;
            this.has_target = true;
            this.draw_source_impact = true;
        }

        var tmp1 = vec3.create();
        var tmp2 = vec3.create();
        var tmp3 = vec3.create();
        var tmp4 = vec3.create();

        function get_matrix(mat, coord, scale, env) {
            var v0 = tmp1;
            var v1 = tmp2;
            var dir = tmp3;
            var pos = tmp4;

            env.project(pos, coord);

            // rotation
            if (env.projection.blend > 0.5) {
                vec3.normalize(dir, pos);
                vec3.set(v0, 0, 1, 0);
                vec3.cross(v0, dir, v0);
                vec3.normalize(v0, v0);
                vec3.cross(v1, v0, dir);

                mat[0] = v0[0];
                mat[1] = v0[1];
                mat[2] = v0[2];

                mat[4] = dir[0];
                mat[5] = dir[1];
                mat[6] = dir[2];

                mat[8] = v1[0];
                mat[9] = v1[1];
                mat[10] = v1[2];
            } else {
                mat4.identity(mat);
                mat4.rotateX(mat, mat, -0.5 * Math.PI);
            }

            if (scale)
                mat4.scale(mat, mat, [scale, scale, scale]);

            // translation
            mat[12] = pos[0];
            mat[13] = pos[1];
            mat[14] = pos[2];
        }

        // source_coord may be null
        Missile.prototype.launch = function (env, style, target_coord, source_coord, scale, angle, mode_params) {
            this.style = style;
            this.shape = self.shapes[this.style];
            // todo change to variable
            this.color = GTW.systems[this.style].getRGBColor();
            this.has_source = !!source_coord;
            this.start_time = env.time;
            this.alive = true;

            // source and target coords
            if (this.has_source)
                vec3.copy(this.source_coord, source_coord);
            vec3.copy(this.target_coord, target_coord);

            // missile arc
            if (this.has_source) {
                var cdist = vec2.distance(source_coord, target_coord);
                var height = mode_params.height * cdist;

                // direction of line
                var dx = (target_coord[0] - source_coord[0]) / cdist;
                var dy = (target_coord[1] - source_coord[1]) / cdist;

                // perp vector for "angled" shots
                var nscale = 200;
                var nx = nscale * -dy;
                var ny = nscale * dx;

                angle = angle || 0;
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);

                var dp = this.index * N_VERTS_PER_MISSILE;
                var v = tmp1;
                var c = tmp2;
                for (var i = 0; i < N_STEPS; ++i) {
                    var u = i / (N_STEPS - 1);
                    vec3.lerp(c, source_coord, target_coord, u);
                    var alt = height * Math.sin(u * Math.PI) * 0.15;

                    c[0] += sin * alt * nx;
                    c[1] += sin * alt * ny;
                    c[2] += cos * alt;

                    env.project(v, c);

                    verts[dp + 0] = v[0];
                    verts[dp + 1] = v[1];
                    verts[dp + 2] = v[2];
                    verts[dp + 3] = -u;

                    verts[dp + 4] = v[0];
                    verts[dp + 5] = v[1];
                    verts[dp + 6] = v[2];
                    verts[dp + 7] = u;

                    dp += 8;
                }

                // update the array buffer
                var offset_bytes = 4 * this.index * N_VERTS_PER_MISSILE;
                webgl.bindVertexBuffer(vert_buffer);
                gl.bufferSubData(gl.ARRAY_BUFFER, offset_bytes, this.verts);
            }

            // source and target matrices
            if (this.has_source) {
                if (this.source_coord[2] < 0.015) {
                    get_matrix(this.source_mat, this.source_coord, scale, env);
                    this.draw_source_impact = true;
                } else {
                    // ddos fire from the sky
                    this.draw_source_impact = false;
                }
            } else {
                if (mode_params.ff_impacts)
                    this.start_time -= 1;
            }

            get_matrix(this.target_mat, this.target_coord, scale, env);
        };

        this.missiles = [];
        for (var i = 0; i < N_MISSILES; ++i) {
            this.missiles.push(new Missile(i));
        }

        this.buffers.missile = vert_buffer = webgl.makeVertexBuffer(verts);
    };

    MissileSystem.prototype.init_icons = function () {
        var shape_verts = [];
        var shapes = [];

        function push_shape_vert(theta, i) {
            shape_verts.push(Math.cos(theta), Math.sin(theta), i);
        }

        // shape object, points to a segment of the shape vertex buffer
        function Shape() {
            this.offset = 0;
            this.count = 0;
        }

        Shape.prototype.draw = function () {
            gl.drawArrays(gl.LINES, this.offset, this.count);
        };

        // create shape and vertices for n_sides
        function create_shape(n_sides) {
            var shape = new Shape();
            shape.offset = shape_verts.length / 3;

            var semi = n_sides < 0;
            n_sides = Math.abs(n_sides);

            var theta_step;
            if (semi) {
                // semicircle shape
                theta_step = Math.PI / n_sides;
            } else {
                theta_step = TWO_PI / n_sides;
            }

            var n_rings = 5;
            for (var i = 0; i < n_rings; ++i) {
                var theta = 0;
                for (var j = 0; j < n_sides; ++j) {
                    push_shape_vert(theta, i);
                    push_shape_vert(theta + theta_step, i);
                    theta += theta_step;
                }
                if (semi) {
                    push_shape_vert(theta, i);
                    push_shape_vert(0, i);
                }

                if (n_sides == 31) {
                    // DDOS
                    theta = 0.80;
                    push_shape_vert(theta, i);
                    push_shape_vert(theta + Math.PI, i);
                }
            }

            shape.count = shape_verts.length / 3 - shape.offset;
            return shape;
        }

        // create a shape for each system
        GTW.systems_foreach(function (system) {
            var shape = create_shape(system.n_sides);
            shapes[system.id] = shape;
        });

        this.shapes = shapes;

        // make a vertex buffer from shape vertex data
        shape_verts = new Float32Array(shape_verts);
        this.buffers.icon = webgl.makeVertexBuffer(shape_verts);
    };

    MissileSystem.prototype.draw = function (env) {
        var self = this;

        var debug_counts = {
            active: 0,
            curves: 0
        };

        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(false);

        // missiles
        if (this.mode_params.use_missiles) {
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

            var pgm = this.programs.missile.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform3fv('view_position', env.camera.viewPos);
            pgm.uniform1f('width', this.mode_params.width);

            webgl.bindVertexBuffer(this.buffers.missile);
            pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);

            _.each(this.missiles, function (missile) {
                // if (!missile.alive || !missile.has_source)
                //     return;

                // ++debug_counts.curves;

                // var t = env.time - missile.start_time;
                // if (t < 2) {
                    pgm.uniform1f('time', 0.5 * t);
                    pgm.uniform3fv('color', missile.color);

                    var vert_count = 2 * N_STEPS;
                    var vert_start = vert_count * missile.index;
                    gl.drawArrays(gl.TRIANGLE_STRIP, vert_start, vert_count);
                // }
            });
        }

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        // impacts
        if (this.mode_params.use_impacts && env.high_quality) {
            var pgm = this.programs.impact.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniformSampler2D('t_color', this.textures.impact);
            webgl.bindVertexBuffer(this.buffers.quad);

            pgm.vertexAttribPointer('position', 2, gl.FLOAT, false, 0, 0);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;

                ++debug_counts.active;

                var t = env.time - missile.start_time;
                if (t > 4) {
                    missile.alive = false;
                    return;
                }

                pgm.uniform3fv('color', missile.color);

                if (missile.has_source && missile.draw_source_impact && t < 1) {
                    pgm.uniformMatrix4fv('mat', missile.source_mat);
                    pgm.uniform1f('time', t);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                }

                if (missile.has_target && t >= 1) {
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    pgm.uniform1f('time', (t - 1) / 3);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                }
            });
        }

        // cones
        if (this.mode_params.use_cones && env.high_quality) {
            var pgm = this.programs.cone.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);

            webgl.bindVertexBuffer(this.buffers.cone);
            pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 0, 0);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;

                var t = env.time - missile.start_time;
                if (missile.has_target && t >= 1 && t < 2) {
                    pgm.uniform3fv('color', missile.color);
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    pgm.uniform1f('time', t - 1);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, self.n_cone_verts);
                }
            });
        }

        // icons
        if (this.mode_params.use_icons) {
            var pgm = this.programs.icon.use();
            pgm.uniformMatrix4fv('mvp', env.camera.mvp);
            pgm.uniform1f('scale', 0.050);
            webgl.bindVertexBuffer(this.buffers.icon);
            pgm.vertexAttribPointer('vertex', 3, gl.FLOAT, false, 0, 0);

            gl.lineWidth(2);

            _.each(this.missiles, function (missile) {
                if (!missile.alive)
                    return;

                var t = env.time - missile.start_time;

                if (t >= 1 && t < 2) {
                    pgm.uniformMatrix4fv('mat', missile.target_mat);
                    pgm.uniform3fv('color', missile.color);
                    pgm.uniform1f('time', t - 1);
                    missile.shape.draw();
                }
            });

            gl.lineWidth(1);
        }

        gl.depthMask(true);

        //missile_debug('active: '+debug_counts.active + '  curves:'+debug_counts.curves);
    };

    MissileSystem.prototype.launch = function (env, style, target, source, angle) {
        // style is 1..5
        // target is [lon, lat]
        // source is [lon, lat] or null/undefined

        var missile = find_oldest(env.time, this.missiles);
        missile.launch(env, style, target, source, this.mode_params.scale, angle, this.mode_params);
        return missile;
    };

    /// Set parameters for missile system using mode as input
    MissileSystem.prototype.setMode = function (mode) {
        switch (mode) {
            case 'world':
                this.mode_params = {
                    use_missiles: true,
                    use_impacts: true,
                    use_cones: true,
                    use_icons: true,
                    scale: 1.0,
                    width: 0.1,
                    height: 0.005,
                    ff_impacts: false
                };
                break;
            case 'scape':
                this.mode_params = {
                    use_missiles: true,
                    use_impacts: false,
                    use_cones: true,
                    use_icons: true,
                    scale: 30.0,
                    width: 10.0,
                    height: 0.100,
                    ff_impacts: true
                };
                break;
        }
        this.clear();
    };

    MissileSystem.prototype.clear = function () {
        _.each(this.missiles, function (m) {
            m.alive = false;
        });
    };

    // env contains the projection function (maps [lon,lat,alt] to [x,y,z])
    GTW.MissileSystem = MissileSystem;
    GTW.reset_counters = reset_counters;
    GTW.update_counters = update_counters;
})();
