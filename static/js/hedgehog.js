var GTW = window.GTW || {};
GTW.init_hedgehog = function(env) {

    var verts = new Float32Array([ 0, 0, 1, 0, 0, 1, 1, 1 ]);
    var buffers = {
        verts: webgl.makeVertexBuffer(verts),
        lines: null,
    };
    var programs = {
        simple: webgl.getProgram('simple'),
        hedgehog: webgl.getProgram('hedgehog')
    };

    var canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    var ctx = canvas.getContext('2d');

    function Card() {
        this.position = vec3.create();

        var scale = 2.0;
        this.scale = vec2.fromValues(scale*1.0, scale*0.25);
        this.texture = null;
    }

    Card.prototype.destroy = function() {
        gl.deleteTexture(this.texture);
        this.texture = null;
    };

    var cards = [];

    function setup(env, world) {
        _.each(cards, function(c) { c.destroy() });
        cards = [];
        var lines = [];

        for (var i = 0; i < 10; ++i) {
            var key = GTW.top_infected[i];
            var country = world.key_to_country[key];
            if (!country) continue;

            var rank = i + 1;

            var co = country.center;

            var card = new Card();
            var P = card.position;
            var alt = 0.5;
            vec3.set(P, co[0], co[1], alt);
            env.project(P, P);

            // line to ground
            var P0 = vec3.create();
            vec3.set(P0, co[0], co[1], 0.0);
            env.project(P0, P0);
            lines.push(P[0], P[1], P[2]);
            lines.push(P0[0], P0[1], P0[2]);

            var lang = MAP.lang;

            // text
            ctx.fillStyle = '#b1bfb1';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "#475147";
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#000';
            ctx.font = 'bold 32px "Ubuntu Mono"';
            ctx.fillText(GTW.get_country_name(country).toUpperCase(), 30, 60);


            ctx.font = 'bold 20px "Ubuntu Mono"';
            if (window.lang) {
                ctx.fillText( window.lang.getText('NUMBER_SYMBOL') + rank + " " + window.lang.getText('MOST_ATTACKED_COUNTRY'), 30, 90);
            }
            else {
                if (lang == 'ru')
                    ctx.fillText('№' + rank + " в мире по числу атак", 30, 90);                                  
                else
                    ctx.fillText('#' + rank + " MOST-ATTACKED COUNTRY", 30, 90);                
            }

            var tex = card.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            gl.generateMipmap(gl.TEXTURE_2D);

            cards.push(card);
        }

        if (buffers.lines) {
            gl.deleteBuffer(buffers.lines);
            buffers.lines = null;
        }

        buffers.lines = webgl.makeVertexBuffer(new Float32Array(lines));
    }

    var fade = 0;
    var fade_rate = 0.02;
    var visible = false;

    function draw_lines(env) {
        var pgm = programs.simple.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniform4f('color', 1, 1, 1, fade*0.5);
        webgl.bindVertexBuffer(buffers.lines);
        pgm.vertexAttribPointer('position', 3, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.LINES, 0, cards.length * 2);
    }

    function draw_cards(env) {
        var pgm = programs.hedgehog.use();
        pgm.uniformMatrix4fv('mvp', env.camera.mvp);
        pgm.uniformMatrix3fv('bill', env.camera.bill);
        pgm.uniform4f('color', 1, 1, 1, 1);
        webgl.bindVertexBuffer(buffers.verts);
        pgm.vertexAttribPointer('coord', 2, gl.FLOAT, false, 0, 0);

        _.each(cards, function(card) {
            pgm.uniform3fv('position', card.position);
            pgm.uniform2fv('scale', card.scale);
            pgm.uniformSampler2D('t_color', card.texture);
            pgm.uniform1f('fade', fade);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        });
    }

    function draw(env) {
        if (visible) {
            fade = Math.min(1, fade + fade_rate);
        } else {
            fade = Math.max(0, fade - fade_rate);
        }

        if (fade == 0) return;

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        draw_cards(env);
        draw_lines(env);

        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
    }

    function show() {
        visible = true;
    }

    function hide() {
        visible = false;
    }

    return {
        show: show,
        hide: hide,
        draw: draw,
        setup: setup,
    };

};
