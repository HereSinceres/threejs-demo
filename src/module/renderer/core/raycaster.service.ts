import { inject } from 'react-ioc';
import * as THREE from 'three';

import { SceneService } from '../scene.service';
import { CameraService } from './camera.service';

export class RaycasterService {
    pointer = new THREE.Vector2();
    cameraService = inject(this, CameraService);
    senceService = inject(this, SceneService);
    raycaster = new THREE.Raycaster();
    constructor() {
        // TODO：这里应该不用用THREE.Raycaster，而是用
        document.addEventListener('mousemove', this.onPointerMove.bind(this));
    }

    onPointerMove(event: { clientX: number; clientY: number }) {
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    INTERSECTED: null | any = null;
    detection() {
        this.raycaster.setFromCamera(this.pointer, this.cameraService.camera);

        const intersects = this.raycaster.intersectObjects(
            this.senceService.scene.children,
            false
        );
        console.log(JSON.stringify(intersects?.[0]));
        if (intersects.length > 0) {
            if (this.INTERSECTED != intersects[0].object) {
                if (this.INTERSECTED) {
                    // this.INTERSECTED.material.emissive.setHex(
                    //     this.INTERSECTED.currentHex
                    // );
                }

                this.INTERSECTED = intersects[0].object;
                // this.INTERSECTED.currentHex =
                // this.INTERSECTED.material.emissive.getHex();
                // this.INTERSECTED.material.emissive.setHex(0xff0000);
            }
        } else {
            if (this.INTERSECTED) {
                // this.INTERSECTED.material.emissive.setHex(
                //     this.INTERSECTED.currentHex
                // );
            }

            this.INTERSECTED = null;
        }
    }
}
