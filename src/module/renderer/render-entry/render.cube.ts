import { inject } from 'react-ioc';
import * as THREE from 'three';

import { RenderEntry } from './render-entry';

export class RenderCube extends RenderEntry {
    cube: THREE.Mesh;
    constructor() {
        super();
        const geometry = new THREE.BoxGeometry(1, 1, 1); // 幾何體
        const material = new THREE.MeshPhongMaterial({
            color: 0x0000ff,
        }); // 材質
        this.cube = new THREE.Mesh(geometry, material); // 建立網格物件
        this.cube.position.set(0, 0, 0);
        this.scene.add(this.cube);
        this.testUpdate();
    }
    testUpdate() {
        this.update();
        requestAnimationFrame(this.testUpdate.bind(this));
    }
    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
    dispose() {
        this.cube.clear();
    }
}
