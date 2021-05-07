var GTW = window.GTW || {};
GTW.init_scape = function(env, missiles) {

    var Body = (function() {
        function Body() {
            this.pos = vec3.create();
            this.rot = quat.create();
            this.tan = vec3.create();

            this.forward = vec3.fromValues(0, 0, -1);   // forward vector
            this.up = vec3.fromValues(0, 1, 0);   // forward vector
        }

        var P = vec3.create();
        var P0 = vec3.create();

        var T = vec3.create();
        var T0 = vec3.create();

        var Q = quat.create();
        var Q0 = quat.create();

        var U0 = vec3.create();
        var U = vec3.create();

        Body.prototype.move_to = function(pos, dir, up) {
            vec3.copy(P, pos);          // next pos
            vec3.copy(P0, this.pos);    // curr pos
            vec3.copy(T0, this.tan);    // curr tan
            vec3.sub(T, P, P0);         // next tan
            vec3.normalize(T, T);

            quat.copy(Q0, this.rot);    // curr rot

            // rotate toward up
            if (up) {
                vec3.transformQuat(U0, this.up, this.rot);  // curr up
                vec3.copy(U, up);   // next up
                var dot = vec3.dot(U0, U);
                if (dot < 0.999999) {
                    vec3.cross(Q, U0, U);
                    Q[3] = 1 + dot;
                    quat.normalize(Q, Q);
                    quat.multiply(Q, Q, Q0);
                    if (quat.dot(Q0, Q) < 0)
                        quat.scale(Q, Q, -1);
                }
                //vec3.copy(this.tan, T);
                quat.copy(this.rot, Q);
                quat.copy(Q0, Q);
            }

            if (dir) {
                vec3.normalize(this.tan, dir);
                quat.rotationTo(this.rot, this.forward, this.tan);
            } else {
                var dot = vec3.dot(T0, T);
                if (dot < 0.999999) {
                    vec3.cross(Q, T0, T);
                    Q[3] = 1 + dot;
                    quat.normalize(Q, Q);
                    quat.multiply(Q, Q, Q0);
                    if (quat.dot(Q0, Q) < 0)
                        quat.scale(Q, Q, -1);
                }
                vec3.copy(this.tan, T);
                quat.copy(this.rot, Q);
            }

            vec3.copy(this.pos, P);
        };

        Body.prototype.follow = function(pos, rot, lp, lr) {
            vec3.lerp(this.pos, this.pos, pos, lp || 0.05);
            vec4.lerp(this.rot, this.rot, rot, lr || 0.02);
            quat.normalize(this.rot, this.rot);
        };

        Body.prototype.roll = function(theta) {
            var R = this.rot;
            quat.rotateZ(R, R, theta);
        };

        return Body;
    }());




    var body = new Body();
    var body2 = new Body();

    // source/target coords
    var c0 = [ -180, 0, 0 ];
    var c1 = [ 180, 0, 0 ];

    var rows = 128;
    var cols = 512;

    var verts = [];
    var texcoords = [];
    var quads = [];
    var lines = [];

    // source and target of the missile
    var source_coord = vec3.fromValues( c0[0], c0[1], 0 );
    var target_coord = vec3.fromValues( c1[0], c1[1], 0 );

    // directions along the map
    var u_vec = vec3.create();  // camera direction
    var v_vec = vec3.create();  // horizon direction

    vec3.sub(u_vec, target_coord, source_coord);
    vec2.normalize(u_vec, u_vec);
    vec2.perp(v_vec, u_vec);

    var u_dist = 360.0;
    var v_dist = 0.200 * u_dist;

    vec2.scale(u_vec, u_vec, u_dist);
    vec2.scale(v_vec, v_vec, v_dist);

    var P = vec4.create();
    var N = vec3.create();

    var freq = 3.0;

    function fbm(u, v) {
        u += noise_offset[0];
        v += noise_offset[1];

        var n = 16, h = 0, w = 0.5;
        while (n--) {
            h += w * noise.perlin2(u, v)
            w *= 0.5; u *= 2; v *= 2;
        }
        return h;
    }

    var pow = Math.pow;
    var abs = Math.abs;

    function get_terrain_center_v(u) {
        return 0.5 + 0.50*noise.perlin2(meander*u + noise_offset[0], noise_offset[1]);
    }

    var noise_offset = vec2.create();
    var gulley_width = 2.5;
    var mountain_power = 3.0;
    var meander = 2.0;

    // u,v to (lon,lat,alt)
    var get_terrain_coord = (function() {
        var P = vec3.create();

        return function(out, u, v, n) {
            if (typeof n == 'undefined') n = 1;

            vec3.set(P, 0, 0, 0);
            vec3.scaleAndAdd(P, target_coord, u_vec, u);
            vec3.scaleAndAdd(P, P, v_vec, 2*(v-0.5));

            var center = get_terrain_center_v(u);
            var d = abs(v - center);
            var alt = 0.05 + 0.95*smoothstep( clamp(gulley_width*d, 0, 1) ); //0.5-2.5

            var terrain = n * (fbm(8*freq*u, freq*v) + 1);
            alt *= pow(terrain, mountain_power); // 0.5-3
            alt -= 0.075;

            if (alt < 0) {
                alt = 0;
            } else {
                alt *= 2;   // higher mountains
            }

            // rolling ground
            var alt2 = (1 + noise.perlin2(8*u, 1*v))*0.25 + 0.05*fbm(8*u, v);
            alt += alt2;

            P[2] = 0.500 * alt;
            vec3.copy(out, P);
            //env.project(out, P);
        }
    }());

    // u,v to xyz
    function get_terrain_position(out, u, v, n) {
        get_terrain_coord(out, u, v, n);
        env.project(out, out);
    }

    for (var i = 0; i < rows; ++i) {
        for (var j = 0; j < cols; ++j) {
            var u = j/(cols-1);
            var v = i/(rows-1);

            // add the coord
            get_terrain_position(P, u, v);
            verts.push(P[0], P[1], P[2], 0.0);
            texcoords.push(j, i);

            // add the grid line elements
            var e0 = i*cols + j;
            var e1 = e0 + 1;
            var e2 = e0 + cols;

            if (j < cols - 1)
                lines.push(e0, e1);
            if (i < rows - 1)
                lines.push(e0, e2);

            if (i < rows - 1) {
                if (i && !j) quads.push(e0);
                quads.push(e0, e2);
                if (i < rows - 2 && j == cols - 1) quads.push(e2);
            }
        }
    }

    verts = new Float32Array(verts);
    var n_verts = verts.length/4;
    quads = new Uint16Array(quads);
    var n_quads = quads.length;
    lines = new Uint16Array(lines);
    var n_lines = lines.length;
    texcoords = new Float32Array(texcoords);

    var buffers = {
        verts: webgl.makeVertexBuffer(verts),
        quads: webgl.makeElementBuffer(quads),
        lines: webgl.makeElementBuffer(lines),
        texcoords: webgl.makeVertexBuffer(texcoords)
    };

    var textures = {
        pattern: webgl.loadTexture2D(GTW.resource_url('textures/pattern2.png'), { mipmap:true, wrap:gl.REPEAT, aniso:4 }),
    };

    var programs = {
        'scape': webgl.getProgram('scape'),
        'scape_lines': webgl.getProgram('scape_lines')
    };

    // update terrain with new offsets
    function reset_terrain() {
        noise_offset[0] = 100*Math.random();
        noise_offset[1] = 100*Math.random();
        gulley_width = lerp(1.5, 5.5, Math.random());
        mountain_power = lerp(2.0, 3.0, Math.random());
        meander = lerp(1.0, 7.0, Math.random());

        var dp = 0;
        for (var i = 0; i < rows; ++i) {
            for (var j = 0; j < cols; ++j) {
                var u = j/(cols-1);
                var v = i/(rows-1);
                get_terrain_position(P, u, v);
                verts[dp + 0] = P[0];
                verts[dp + 1] = P[1];
                verts[dp + 2] = P[2];
                dp += 4;
            }
        }

        webgl.bindVertexBuffer(buffers.verts);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, verts);
    }

    // camera path
    var P0 = vec3.create();
    vec3.copy(P0, target_coord);

    var P1 = vec3.clone(P0);
    vec3.scaleAndAdd(P1, P0, u_vec, 1.0);

    env.project(P0, P0);
    env.project(P1, P1);

    var H = 0.15;

    var pos = vec3.create();
    var dir = vec3.create();
    vec3.sub(dir, P1, P0)

    var up = vec3.create();
    vec3.add(up, P0, P1);
    vec3.normalize(up, up);

    var hh = 0.0;

    var land_color_base = (function() {
        var color0 = vec4.fromValues(0.10, 0.12, 0.11, 1);
        var color1 = vec4.fromValues(0.20, 0.23, 0.21, 1);
        var tone = 0.1;
        var land_color = vec4.create();
        vec4.lerp(land_color, color0, color1, tone);
        return land_color;
    }());
    var land_color = vec4.clone(land_color_base);
    var land_color1 = vec4.clone(land_color_base);

    var fog_color_base = vec3.fromValues(0.01, 0.05, 0.02);
    var fog_color = vec3.clone(fog_color_base);
    var fog_color1 = vec3.clone(fog_color_base);

    function draw() {
        vec3.lerp(fog_color, fog_color, fog_color1, 0.05);
        vec3.lerp(land_color, land_color, land_color1, 0.05);

        // 2nd order lerp to avoid flashing
        vec3.lerp(fog_color1, fog_color1, fog_color_base, 0.05);
        vec3.lerp(land_color1, land_color1, land_color_base, 0.05);

        // solid

        var pgm = programs.scape.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4fv('color', land_color);
        pgm.uniform3fv('fog_color', fog_color);
        pgm.uniformSampler2D('pattern', textures.pattern);

        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        webgl.bindVertexBuffer(buffers.texcoords);
        pgm.vertexAttribPointer('texcoord', 2, gl.FLOAT, false, 0, 0);

        webgl.bindElementBuffer(buffers.quads);

        gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(1, 1);

        gl.drawElements(gl.TRIANGLE_STRIP, n_quads, gl.UNSIGNED_SHORT, 0);

        gl.disable(gl.POLYGON_OFFSET_FILL);

        // lines

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        var pgm = programs.scape_lines.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 140/255, 160/255, 138/255, 0.5);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        webgl.bindElementBuffer(buffers.lines);
        gl.drawElements(gl.LINES, n_lines, gl.UNSIGNED_SHORT, 0);
    }

    var P0 = vec3.create();
    var P1 = vec3.create();
    var PC = vec3.create();
    var F = vec3.create();
    var N = vec3.create();

    var duration = 10;
    var time = duration + 1;

    function expovariate(mu) {
        return -mu * Math.log(1.0 - MersenneTwister.random());
    }

    var next_missile_time = 0;
    var mean_missile_interval = 0.30;

    var camera_shake = 0;
    var do_reset = true;

    function reset() {
        time = 0;
        reset_terrain();
        next_missile_time = expovariate(mean_missile_interval);
        do_reset = true;
    }

    function sample_active_system_ids() {
        var active_ids = [];
        GTW.systems_foreach(function(system) { system.enabled && active_ids.push(system.id) });
        return _.sample(active_ids);
    }

    function update() {
        var u = (time / duration);
        u *= 0.8;
        time += 1/60;

        var center = get_terrain_center_v(u);
        get_terrain_position(P0, u, center, 0);
        get_terrain_position(P1, u+0.01, center, 0);
        vec3.sub(F, P1, P0);
        vec3.normalize(F, F);
        vec3.normalize(N, P0);

        get_terrain_position(P0, u, center);
        vec3.scaleAndAdd(P0, P0, N, 0.5);

        if (do_reset) {
            vec3.copy(PC, P0);
            body2.move_to(PC, F, N);
            vec3.copy(body.pos, body2.pos);
            vec3.copy(body.rot, body2.rot);
            do_reset = false;
        } else {
            vec3.lerp(PC, PC, P0, 0.1);
            body2.move_to(PC, null, N);
            body.follow(body2.pos, body2.rot, 0.1, 0.05);
        }

        body.roll(0.010*noise.perlin2(env.time, 0.934));
        //body.look(P0, F, N);


        // fire off some missile impacts here
        if (time > next_missile_time) {
            next_missile_time = time + expovariate(mean_missile_interval);
            var system_id = sample_active_system_ids();

            if (Math.random() < 0.3) {
                // impact only
                var target_coord = P0;
                var source_coord = null;
                var dist = Math.random();
                var target_u = u + lerp(0.01, 0.2, dist);
                var target_v = get_terrain_center_v(target_u) + Random.gauss(0, 0.1);
                get_terrain_coord(target_coord, target_u, target_v);

                var missile = missiles.launch(env, system_id, target_coord, source_coord);
                vec3.scaleAndAdd(fog_color1, fog_color1, missile.color, 0.5*dist);
                vec3.scaleAndAdd(land_color1, land_color1, missile.color, 0.5*(1-dist));

                if (dist < 0.1) {
                    env.flash(missile.color);
                    camera_shake = 1;
                }

            } else {
                var source_coord = P0;
                var target_coord = P1;
                var target_u = Random.uniform(u + 0.2, 1.0);
                var target_v = get_terrain_center_v(target_u) + Random.gauss(0, 0.1);
                var source_u = Random.uniform(0, 1);
                var source_v = Random.uniform(0, 1);
                get_terrain_coord(target_coord, target_u, target_v);
                get_terrain_coord(source_coord, source_u, source_v);

                missiles.launch(env, system_id, target_coord, source_coord, 30);
            }
        }
    }

    function update_camera() {
        vec3.copy(P0, body.pos);
        env.camera.update_quat(P0, body.rot);

        if (camera_shake > 0.001) {
            var t = 5*env.time;
            var s = 3*Math.sin(Math.PI*camera_shake);
            env.camera.mvp[12] += s * 0.2*fbm(t, 0.3123123);
            env.camera.mvp[13] += s * 1.5*(fbm(t, 0.9123123) - 0.125);
            mat4.invert(env.camera.mvpInv, env.camera.mvp);
            camera_shake *= 0.85;
        }
    }

    return {
        reset: reset,
        draw: draw,
        update: update,
        update_camera: update_camera,
        shake: function() { camera_shake = 1 }
    };

}
