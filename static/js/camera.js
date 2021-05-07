var GTW = GTW || {};

// simplified camera. just takes care of matrices etc
(function() {

    function Camera() {
        // projection parameters
        this.fov = 60;
        this.near = 0.01;
        this.far = 150;

        // matrices
        this.viewport = vec4.create();
        this.proj = mat4.create();
        this.view = mat4.create();
        this.bill = mat3.create();
        this.mvp = mat4.create();
        this.mvpInv = mat4.create();
        this.viewInv = mat4.create();
        this.viewPos = vec3.create();
        this.viewDir = vec3.create();
    }

    var up = vec3.fromValues(0, 1, 0);
    var ref = vec3.create();

    Camera.prototype._update_projection = function() {
        //var H = this.viewport[3];
        //var h = 60;
        //var aspect = this.viewport[2] / (H - h);
        //mat4.perspective(this.proj, deg2rad(this.fov), aspect, this.near, this.far);
        //mat4.translate(this.proj, this.proj, [0, 20*h/(2*H), 0]);
        //mat4.scale(this.proj, this.proj, [1, (H - h)/H, 1]);

        var aspect = this.viewport[2] / this.viewport[3];
        mat4.perspective(this.proj, deg2rad(this.fov), aspect, this.near, this.far);
    };

    Camera.prototype._update_mvp = function() {
        // billboard
        var b = this.bill;
        var v = this.view;
        b[0] = v[0]; b[1] = v[4]; b[2] = v[8];
        b[3] = v[1]; b[4] = v[5]; b[5] = v[9];
        b[6] = v[2]; b[7] = v[6]; b[8] = v[10];

        // combined
        mat4.multiply(this.mvp, this.proj, this.view);
        mat4.invert(this.mvpInv, this.mvp);
        mat4.invert(this.viewInv, this.view);

        // XXX could be just pos/dir?
        vec3.transformMat4(this.viewPos, [0, 0, 0], this.viewInv);
        vec3.set(this.viewDir, -this.viewInv[8], -this.viewInv[9], -this.viewInv[10]);
    };

    Camera.prototype.update = function(pos, dir) {
        this._update_projection();

        // view
        vec3.add(ref, pos, dir);
        mat4.lookAt(this.view, pos, ref, up);

        this._update_mvp();
    };

    var view_tmp = mat4.create();
    Camera.prototype.update_quat = function(pos, rot, view_lerp) {
        this._update_projection();

        // view
        mat4.fromRotationTranslation(view_tmp, rot, pos);
        mat4.invert(view_tmp, view_tmp);

        if (!view_lerp)
            mat4.copy(this.view, view_tmp);
        else {
            // blend between 0=(pos,rot) to 1=(current view matrix)
            var v1 = view_tmp;
            var v0 = this.view;

            var a0 = view_lerp;
            var a1 = 1 - view_lerp;

            for (var i = 0; i < 16; ++i) {
                v0[i] = a0 * v0[i] + a1 * v1[i];
            }
        }
        // lerp

        this._update_mvp();
    };

    Camera.prototype.unproject = function(out, win) {
        var v = vec4.create();
        v[0] = 2 * (win[0] / this.viewport[2]) - 1;
        v[1] = 2 * (win[1] / this.viewport[3]) - 1;
        v[1] = 1 - v[1];
        v[2] = 0;
        v[3] = 1;

        vec4.transformMat4(v, v, this.mvpInv);
        out[0] = v[0] / v[3];
        out[1] = v[1] / v[3];
    };

    Camera.prototype.project = function(objX, objY, objZ, winX, winY, winZ) {
        var input = new vec4()
        var output = new vec4()

        input[0] = objX
        input[1] = objY
        input[2] = objZ
        input[3] = 1.0

        // vec4.transformMat4(output, input, modelviewMatrix);//模型视图变换
        // vec4.transformMat4(input, output, this.proj);//投影变换
        vec4.transformMat4(output, input, this.mvp)

        //透视除法，进入标准化设备坐标
        if (input[3] == 0.0) return;
        input[0] /= input[3];
        input[1] /= input[3];
        input[2] /= input[3];

        //将坐标由-1到1，转换到0-1
        input[0] = input[0] * 0.5 + 0.5;
        input[1] = input[1] * 0.5 + 0.5;
        input[2] = input[2] * 0.5 + 0.5;

        //将x,y转换到屏幕坐标
        input[0] = input[0] * this.viewport[2] + this.viewport[0];
        input[1] = input[1] * this.viewport[3] + this.viewport[1];

        winX = input[0];
        winY = input[1];
        winZ = input[2];

        return {
            "x" : winX,
            "y" : winY,
            "z" : winZ
        }
    }

    GTW.Camera = Camera;

})();
