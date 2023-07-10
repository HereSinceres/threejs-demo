import { inject } from 'react-ioc';
import * as THREE from 'three';

import MeshCreeper from '../mesh/mesh.creeper';
import { RenderEntry } from './render-entry';

export class RenderPlane extends RenderEntry {
    constructor() {
        super();
        const planeGeometry = new THREE.PlaneGeometry(60, 60)
        const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
        let plane = new THREE.Mesh(planeGeometry, planeMaterial)
        plane.rotation.x = -0.5 * Math.PI // 使平面與 y 軸垂直，並讓正面朝上
        plane.position.set(0, -7, 0) 
        this.scene.add(plane);
    }
}
