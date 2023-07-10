import { inject } from 'react-ioc';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { SceneService } from '../scene.service';
import { CameraService } from './camera.service';
import { RaycasterService } from './raycaster.service';

export class RendererService extends THREE.WebGLRenderer {
    private sceneService = inject(this, SceneService);
    private cameraService = inject(this, CameraService);
    private raycasterService = inject(this, RaycasterService);
    cameraControl = new OrbitControls(
        this.cameraService.camera,
        this.domElement
    );
    frametime: string | undefined;
    constructor() {
        super();
        this.init();
        this.onResize();
    }
    private init() {
        this.setSize(window.innerWidth, window.innerHeight); // 場景大小
        this.setClearColor(0xeeeeee, 1.0); // 預設背景顏色
        this.shadowMap.enabled = true; // 陰影效果
    }
    private onResize() {
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
    }
    render2Dom(dom: HTMLDivElement) {
        dom?.appendChild(this.domElement);
        this.update();
    }
    update() {
        let startTime = performance.now();
        requestAnimationFrame(this.update.bind(this));
        this.raycasterService.detection();
        this.cameraControl.update(); // 需設定 update
        this.render(this.sceneService.scene, this.cameraService.camera);
        let endTime = performance.now();
        this.frametime = Number(endTime - startTime).toFixed(2);
    }
}

// CJS模块中，加载，实例化，执行是一次完成的，中间没有停顿。

// 对于Es modules模块来说，会有三个步骤。

// 构建 ： 查找，下载，并且解析所有文件到模块记录
// 实例化 ： 找到内存中能够放置所有导出值的盒子（暂时先不要填充值）。然后将导出和导入指向内存中的这些盒子。这步叫做连接。
// 执行 ： 执行代码然后将变量的真实值填入盒子。

// Es module 规范规定了如何解析文件为模块记录Module Records，以及如何实例化和执行模块。但是，最开始的如何拿到文件并没有涉及。
