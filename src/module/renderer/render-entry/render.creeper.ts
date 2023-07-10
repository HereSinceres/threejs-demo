import { inject } from 'react-ioc';
import * as THREE from 'three';

import MeshCreeper from '../mesh/mesh.creeper';
import { RenderEntry } from './render-entry';

export class RenderCreeper extends RenderEntry {
    constructor() {
        super();
        const creeperObj = new MeshCreeper();
        this.scene.add(creeperObj.creeper);
    }
}
