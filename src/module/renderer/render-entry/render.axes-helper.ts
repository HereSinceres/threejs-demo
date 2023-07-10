import { inject } from 'react-ioc';
import * as THREE from 'three';

import MeshCreeper from '../mesh/mesh.creeper';
import { RenderEntry } from './render-entry';

export class RenderAxesHelper extends RenderEntry {
    constructor() {
        super();
        let axes = new THREE.AxesHelper(20); // 參數為座標軸長度
        this.scene.add(axes);
    }
}
