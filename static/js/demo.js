var GTW = window.GTW || {};
GTW.init_demo = function(env, missile_system) {

    var scape = GTW.init_scape(env, missile_system);

    var missile = null;
    var system_color = vec3.create();

    var Body = (function() {
        function Body() {
            this.pos = vec3.create();
            this.rot = quat.create();
        }

        var origin = vec3.create();
        var yup = vec3.fromValues(0, 1, 0);

        var F = vec3.create();
        var R = vec3.create();
        var U = vec3.create();

        var F0 = vec3.fromValues(0, 0, 1);

        var m4 = mat4.create();
        var m3 = mat3.create();

        var ref = vec3.create();

        // very confused by all this... cross-products, coord systems and pov
        // http://www.songho.ca/opengl/gl_lookattoaxes.html
        Body.prototype.look = function(eye, dir, up) {
            up = up || yup;
            vec3.copy(this.pos, eye);

            vec3.add(ref, eye, dir);
            mat4.lookAt(m4, eye, ref, up);
            mat3.fromMat4(m3, m4);
            mat3.invert(m3, m3);

            var R = this.rot;
            quat.fromMat3(R, m3);
            quat.normalize(R, R);
        };

        var tmp = vec3.create();
        Body.prototype.look_at = function(eye, ref, up) {
            ref = ref || origin;
            up = up || yup;
            vec3.sub(tmp, ref, eye);
            this.look(eye, tmp, up);
        };

        Body.prototype.move_forward = function() {
            vec3.set(tmp, 0, 0, 1);
            vec3.transformQuat(tmp, tmp, this.rot);
            var speed = 0.1;
            vec3.scaleAndAdd(this.pos, this.pos, tmp, speed);
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


    function make_gl_matrix_temps(gl_matrix_type) {
        var N_TEMPS = 16;
        return _.times(N_TEMPS, gl_matrix_type.create);
    }

    var temps = {
        vec3: make_gl_matrix_temps(vec3),
        vec4: make_gl_matrix_temps(vec4),
        quat: make_gl_matrix_temps(quat),
        mat4: make_gl_matrix_temps(mat4),
        mat3: make_gl_matrix_temps(mat3),
    };

    var bodies = {
        missile: new Body(),
        player: new Body(),
        orbit: new Body(),
    };

    function init_missile(source_coord, target_coord, color, n_sides) {
        var source_coord = vec3.clone(source_coord);
        var target_coord = vec3.clone(target_coord);

        var cdist = vec2.distance(source_coord, target_coord);
        var height = 0.005*cdist;

        var tmp1 = vec3.create();
        var tmp2 = vec3.create();

        var dp = 0;
        var v = tmp1;
        var c = tmp2;

        var N_STEPS = 103;
        var verts = new Float32Array(4 * N_STEPS * 8);
        for (var i = 0; i < N_STEPS; ++i) {
            var u = i/(N_STEPS-1);
            vec3.lerp(c, source_coord, target_coord, u);
            var alt = height * Math.sin(u * Math.PI) * 0.85;
            c[2] += alt;
            env.project(v, c);

            vec3.save(v, verts, dp + 0);
            verts[dp + 3] = -u;

            vec3.save(v, verts, dp + 4);
            verts[dp + 7] = u;

            dp += 8;
        }
        var vert_count = dp/4;

        // path, tangents etc
        var path = [];
        var sp = 0;
        var v0 = tmp1;
        var v1 = tmp2;
        var tan = vec3.create();
        for (var i = 0; i < N_STEPS; ++i) {
            vec3.load(v0, verts, sp);
            path.push( v0[0], v0[1], v0[2] );

            if (i < N_STEPS - 1) {
                vec3.load(v1, verts, sp + 8);
                vec3.sub(tan, v1, v0);
            }

            path.push( tan[0], tan[1], tan[2] );

            sp += 8;
        }

        var Frame = (function() {
            function Frame() {
                this.P = vec3.create();
                this.T = vec3.create();
                this.Q = quat.create();
            }
            Frame.prototype.update = function() {
                vec3.normalize(this.T, this.T);
                quat.rotationTo(this.Q, [0,0,1], this.T);
            };
            Frame.prototype.transform = function(out, v) {
                vec3.transformQuat(out, v, this.Q);
                vec3.add(out, out, this.P);
            };
            return Frame;
        }());

        var frames = [];
        for (var sp = 0; sp < path.length; sp += 6) {
            var frame = new Frame();
            vec3.load(frame.P, path, sp + 0);
            vec3.load(frame.T, path, sp + 3);
            frame.update();
            quat.rotateZ(frame.Q, frame.Q, TWO_PI * i/N_STEPS);
            frames.push(frame);
        }

        var tube_verts = [];
        var ring_verts = [];

        (function() {
            // this section creates the line strips detailing the rings
            var s = 0;

            var v0 = vec3.create(); // last vert
            var v1 = vec3.create();  // curr vert

            function push_vert(arr, frame, theta, radius, side) {
                v0[0] = Math.cos(theta) * radius;
                v0[1] = Math.sin(theta) * radius;
                v0[2] = 0.0;
                frame.transform(v0, v0);
                arr.push(v0[0], v0[1], v0[2], side);
            }

            function repeat_vert(arr) {
                var sp = arr.length - 4;
                arr.push(
                    arr[sp + 0],
                    arr[sp + 1],
                    arr[sp + 2],
                    arr[sp + 3]);
            }

            var semi = n_sides < 0;
            n_sides = Math.abs(n_sides);

            var sp = 0;
            for (var i = 0; i < frames.length; ++i) {
                var frame = frames[i];
                var frame2 = frames[i + 1];

                var u = i/(N_STEPS - 1);
                var radius = lerp(0.02, 0.07, u);

                var dtheta = (semi ? Math.PI : TWO_PI) / n_sides;
                var theta = 0;
                var width = 0.00015/radius;

                for (var j = 0; j <= n_sides; ++j) {
                    var degen = i && !j;

                    if (semi && (j == n_sides)) theta = 0;

                    degen && repeat_vert(ring_verts);
                    push_vert(ring_verts, frame, theta, radius - width, -u);

                    degen && repeat_vert(ring_verts);
                    push_vert(ring_verts, frame, theta, radius + width, u);

                    if (frame2) {
                        degen && repeat_vert(tube_verts);
                        push_vert(tube_verts, frame, theta, radius, u);
                        degen && repeat_vert(tube_verts);
                        push_vert(tube_verts, frame2, theta, radius, u);
                    }

                    theta += dtheta;
                }
            }

        }());

        ring_verts = new Float32Array(ring_verts);
        tube_verts = new Float32Array(tube_verts);

        var n_ring_verts = ring_verts.length/4;
        var n_tube_verts = tube_verts.length/4;

        var buffers = {
            verts: webgl.makeVertexBuffer(verts),
            ring_verts: webgl.makeVertexBuffer(ring_verts),
            tube_verts: webgl.makeVertexBuffer(tube_verts)
        };

        var programs = {
            missile: webgl.getProgram('missile_tube'),
            simple: webgl.getProgram('simple'),
            rings: webgl.getProgram('rings')
        };

        var body = new Body();
        bodies.missile = body;
        var pos = vec3.create();
        var dir = vec3.create();
        var up = vec3.create();

        function draw(env) {
            gl.enable(gl.DEPTH_TEST);
            gl.depthMask(false);

            if (1) {
                // draw rings
                gl.lineWidth(5);
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

                var pgm = programs.rings.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniform3fv('color', color);

                webgl.bindVertexBuffer(buffers.ring_verts);
                pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, n_ring_verts);
                gl.lineWidth(1);
            }

            if (1) {
                // draw tube
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

                var pgm = programs.missile.use();
                pgm.uniformMatrix4fv('mvp', env.camera.mvp);
                pgm.uniform3fv('color', color);

                var mt = clamp(env.demo_time/5.0, 0, 2);
                pgm.uniform1f('time', mt);

                webgl.bindVertexBuffer(buffers.tube_verts);
                pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, n_tube_verts);
            }

            gl.depthMask(true);
            gl.disable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);

            var t = Math.max(0, env.demo_time);
            t = t / 5;  // 5 secs duration
            t = t - ~~t;    // fmod 0..1

            var f = (t * (N_STEPS - 1));    // integer/fractional part
            var i = ~~f;
            f -= i;

            var sp = 6 * i;

            vec3.set(pos, 0, 0, 0);
            vec3.set(dir, 0, 0, 0);

            for (var j = 0; j < 2; ++j) {
                f = 1-f;    // lerp
                for (var k = 0; k < 3; ++k) {
                    pos[k] += f * path[sp + k];
                    dir[k] += f * path[sp + 3 + k];
                }
                sp += 6;
            }

            body.look(pos, dir, pos);
        }

        return {
            draw: draw
        };

    }

    var stage = 0;

    function update_player_body() {
        var b0;
        var body = bodies.player;
        var camera = env.camera;

        if (env.demo_time < 5.0) {
            stage = 0;

            // "ZOOM/DESCEND"
            camera.near = 0.01;
            camera.far = 1000;

            b0 = bodies.missile;
            var t = env.demo_time/5;
            body.follow(b0.pos, b0.rot, 0.01 + t*0.50, t*t);
            body.roll(0.10*noise.perlin2(1.0*env.demo_time, 0.0));
        } else if (env.demo_time < 15.0) {
            if (stage == 0) {
                stage = 1;
                env.flash(system_color);
                scape.reset();
                missile_system.setMode('scape');
                env.draw_world = false;
            }
        } else if (env.demo_time < 20.0) {
            if (stage == 1) {
                stage = 2;
                env.flash(system_color);
                missile_system.setMode('world');
                env.draw_world = true;
            }

            // "EJECT"
            camera.near = 0.01;
            camera.far = 500;

            b0 = bodies.orbit;
            var t = (env.demo_time - 15) / 5;
            body.follow(b0.pos, b0.rot, 0.00005 + Math.pow(t, 3)*0.50, 0.2);

            // blend the camera view matrix during the exit phase
            // to get a seamless transition
            camera.update_quat(body.pos, body.rot, t);
            return;
        } else {
            // reset
        }

        camera.update_quat(body.pos, body.rot);
    }

    function update(env) {
        update_player_body();
        if (!env.draw_world) {
            scape.update();
            scape.update_camera()
        }
    }

    function draw(env) {
        if (!env.draw_world) {
            scape.draw(env);
            missile_system.draw(env);
        } else {
            // only draw for descent
            if (missile && env.demo_time < 5)
                missile.draw(env);
        }
    }

    function setup(env, source_coord, target_coord) {
        var system = GTW.systems[env.solo_system_id];
        var color = system.getRGBColor();
        vec3.copy(system_color, color);

        missile = init_missile(source_coord, target_coord, color, system.n_sides);

        var b = bodies.player;
        vec3.copy(b.pos, env.camera.viewPos);
        quat.rotationTo(b.rot, [0,0,-1], env.camera.viewDir);

        // eject target
        var co = [ target_coord[0], target_coord[1], 1.6 ]
        env.project(bodies.orbit.pos, co);

        var dir = vec3.clone(bodies.orbit.pos);
        vec3.normalize(dir, dir);
        vec3.negate(dir, dir);
        quat.rotationTo(bodies.orbit.rot, [0,0,-1], dir);
    }

    function exit() {
        if (!env.draw_world) {
            missile_system.setMode('world');
            env.draw_world = true;
        }
    }

    return {
        draw: draw,
        setup: setup,
        update: update,
        exit: exit
    };

};
