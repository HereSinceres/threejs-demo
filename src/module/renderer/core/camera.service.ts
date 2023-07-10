import { inject } from 'react-ioc';
import * as THREE from 'three';

import { SceneService } from '../scene.service';

export class CameraService {
    private sceneService = inject(this, SceneService);
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    constructor() {
        this.initCamera();
        this.onResize();
    }
    private initCamera() {
        this.camera.position.set(10, 10, 10); // 相機位置
        this.camera.lookAt(this.sceneService.scene.position); // 相機焦點
    }
    private onResize() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        });
    }
}
