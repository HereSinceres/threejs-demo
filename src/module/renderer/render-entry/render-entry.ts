import { inject } from 'react-ioc';

import { SceneService } from '../scene.service';

export abstract class RenderEntry {
    private sceneService = inject(this, SceneService);
    get scene() {
        return this.sceneService.scene;
    }
    dispose() {}
}
