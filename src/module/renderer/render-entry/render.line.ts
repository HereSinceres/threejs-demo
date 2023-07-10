import bezier from 'adaptive-bezier-curve';
import curve from 'adaptive-bezier-curve';
import normalize from 'normalize-path-scale';
import * as THREE from 'three';
import BasicShaderFun from 'three-line-2d/shaders/basic';

import { ThreeLine2d } from '../lib/three-line-2d';
import { RenderEntry } from './render-entry';

var BasicShader = BasicShaderFun(THREE);

export class RenderLine extends RenderEntry {
    mat = new THREE.ShaderMaterial(
        BasicShader({
            side: THREE.DoubleSide,
            diffuse: 0x5cd7ff,
            thickness: 0.2,
        })
    );
    constructor() {
        super();
        var curvePath = curve([40, 40], [70, 100], [120, 20], [200, 40], 5);
        curvePath.push([200, 100]);
        curvePath.push([250, 50]);

        //create our geometry
        var curveGeometry = new ThreeLine2d(normalize(curvePath));

        var mesh = new THREE.Mesh(curveGeometry, this.mat);
        this.scene.add(mesh);
        this.testUpdate();
    }
    testUpdate() {
        this.update();
        requestAnimationFrame(this.testUpdate.bind(this));
    }
    update() {
        // this.mat.uniforms.thickness.value = Math.sin(time * 0.5) * 0.2;
    }
}
