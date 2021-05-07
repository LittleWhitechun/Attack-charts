var GTW = window.GTW || {};
GTW.init_connectors = function() {
    var max_lines = 20;
    var verts = new Float32Array(8 * max_lines);
    var n_lines = 0;
    var buffers = {
        verts: webgl.makeVertexBuffer(verts)
    };
    var programs = {
        connector: webgl.getProgram('connector')
    };

    function draw(env) {
        gl.disable(gl.DEPTH_TEST);
        var pgm = programs.connector.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 0.27, 0.43, 0.35, 1.0);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('position', 4, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINES, 0, 2*n_lines);
    }

    function add_line(v0, v1) {
        var dp = 8 * n_lines;
        vec3.save(v0, verts, dp + 0);
        verts[dp + 3] = 0.0;
        vec3.save(v1, verts, dp + 4);
        verts[dp + 7] = 1.0;
        ++n_lines;
        webgl.bindVertexBuffer(buffers.verts);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, verts);
    }
    
    function clear() {
        n_lines = 0;
    }

    return {
        draw: draw,
        add_line: add_line,
        clear: clear
    };
};
