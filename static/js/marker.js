var GTW = window.GTW || {};
GTW.init_marker = function(env) {
    // geometry
    // textures
    // programs

    var coords = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
    var buffers = {
        verts: webgl.makeVertexBuffer(new Float32Array(coords))
    };
    var textures = {
        pin_sharp: webgl.loadTexture2D(GTW.resource_url('textures/pin-sharp.png'), { mipmap: true }),
        pin_fuzzy: webgl.loadTexture2D(GTW.resource_url('textures/pin-fuzzy.png'), { mipmap: true }),
    };
    var programs = {
        marker: webgl.getProgram('marker'),
    };

    var mat = mat4.create();
    var pos = vec3.create();
    var pos_target = vec3.create();
    var pos_source = vec3.create();

    var time = 0;
    var done = true;
    var flash_cancelled = false;

    function set_coord(coord) {
        var o = vec3.create();
        env.project(o, coord);

        mat4.identity(mat);
        mat4.translate(mat, mat, o);

        vec3.copy(pos_target, o);
        vec3.copy(pos_source, o);

        // determine "up" vector from coord to drop pin from a height
        var v0 = vec3.create();
        var v1 = vec3.create();
        var v2 = vec3.create();

        vec3.normalize(v0, pos_target);
        vec3.set(v1, 0, 1, 0);
        vec3.cross(v2, v0, v1);
        vec3.normalize(v2, v2);
        vec3.cross(v1, v2, v0);

        vec3.scaleAndAdd(pos_source, pos_source, v1, 10.0);

        time = 0;
        done = false;
    }

    function draw(env) {
        if (!done) {
            time = time + 0.01;
            if (time > 1.0) {
                time = 1.0;
                done = true;
                var w = 0.70;

                if (!flash_cancelled)
                    env.flash([ w, w, w ]);
            }
            vec3.lerp(pos, pos_source, pos_target, Math.pow(time, 0.75));
        }

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        var pgm = programs.marker.use();
        pgm.uniformMatrix3fv('bill', env.camera.bill);
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        //pgm.uniformMatrix4fv('mat', mat);
        pgm.uniform3fv('pos', pos);
        pgm.uniformSampler2D('t_sharp', textures.pin_sharp);
        pgm.uniformSampler2D('t_fuzzy', textures.pin_fuzzy);
        var g = 0.70;
        pgm.uniform4f('color', g, g, g, 1.0);
        pgm.uniform1f('scale', 0.10);
        pgm.uniform1f('fuzz', 0);

        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('coord', 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    return {
        draw: draw,
        set_coord: set_coord,
        cancel_flash: function() {
            flash_cancelled = true;
        }
    };
};
