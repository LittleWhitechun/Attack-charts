var GTW = window.GTW || {};
GTW.init_flash = function(env) {
    var quad = new Float32Array([ 0,0, 1,0, 0,1, 1,1 ]);
    var buffers = { verts: webgl.makeVertexBuffer(quad) };
    var programs = { simple: webgl.getProgram('simple') };
    var mvp = mat4.create();
    mat4.translate(mvp, mvp, [-1, -1, 0, 0]);
    mat4.scale(mvp, mvp, [2, 2, 2]);

    var color = vec4.create();

    function draw(env) {
        if (color[3] < 0.001) return;
        color[3] *= 0.97;

        var pgm = programs.simple.use();
        pgm.uniformMatrix4fv('mvp', mvp);
        pgm.uniform4fv('color', color);

        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 2, gl.FLOAT, false, 0, 0);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.disable(gl.BLEND);
    }

    return {
        draw: draw,
        flash: function(c) {
            vec3.copy(color, c);
            color[3] = 2.0;
        },
    };
};
