import bezier from 'adaptive-bezier-curve';
import curve from 'adaptive-bezier-curve';
import arc from 'arc-to';
import normalize from 'normalize-path-scale';
import * as THREE from 'three';
import BasicShaderFun from 'three-line-2d/shaders/basic';

import { ThreeLine2d } from '../lib/three-line-2d';
import DashShader from '../shader/shader.dash';
import { RenderEntry } from './render-entry';

var BasicShader = BasicShaderFun(THREE);
var circlePath = normalize(arc(0, 0, 25, 0, Math.PI * 2, false, 64));

export class RenderCircle extends RenderEntry {
    dashMat = new THREE.ShaderMaterial(
        new  DashShader({
            side: THREE.DoubleSide,
        })
    );
    constructor() {
        super();
        circlePath.pop();
        var circleGeometry = new  ThreeLine2d(circlePath, {
            distances: true,
            closed: true,
        });

        var mesh2 = new THREE.Mesh(circleGeometry, this.dashMat);
        mesh2.position.x = -2;
        mesh2.scale.multiplyScalar(0.5);

        // // Our glowing box
        this.scene.add(mesh2);
        // circlePath.pop();
        this.testUpdate();
    }
    testUpdate() {
        this.update();
        requestAnimationFrame(this.testUpdate.bind(this));
    }
    update() { 
        let time = Math.random();
        this.dashMat.uniforms.dashDistance.value =
            (Math.sin(time) / 2 + 0.5) * 0.5;
        this.dashMat.uniforms.dashSteps.value =
            (Math.sin(Math.cos(time)) / 2 + 0.5) * 24;
    }
}
