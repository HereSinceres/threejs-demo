import { inject } from 'react-ioc';
import * as THREE from 'three';

import { RenderEntry } from './render-entry';

export class RenderLight extends RenderEntry {
    light = new THREE.PointLight(0xffffff);
    constructor() {
        super();
        this.light.position.set(10, 10, -10);
        this.scene.add(this.light);
    }
}
