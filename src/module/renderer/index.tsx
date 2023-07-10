import React from 'react';
import { provider, useInstance, useInstances } from 'react-ioc';

import { CameraService } from './core/camera.service';
import { RaycasterService } from './core/raycaster.service';
import { RendererService } from './core/renderer.service';
import { RenderAxesHelper } from './render-entry/render.axes-helper';
import { RenderCar } from './render-entry/render.car';
import { RenderCircle } from './render-entry/render.circle';
import { RenderCreeper } from './render-entry/render.creeper';
import { RenderCube } from './render-entry/render.cube';
import { RenderLight } from './render-entry/render.light';
import { RenderLine } from './render-entry/render.line';
import { RenderPlane } from './render-entry/render.plane';
import { RendererComponent } from './renderer.component';
import { SceneService } from './scene.service';

const App = () => {
    useInstances(
        RenderLight,
        // RenderCircle,
        // RenderCube,
        RenderCar,
        RenderCreeper,
        RenderPlane,
        // RenderAxesHelper
        //  RenderLine
    );
    return <RendererComponent />;
};
export const Renderer = provider(
    SceneService,
    CameraService,
    RaycasterService,
    RenderLight,
    RenderCircle,
    RenderCube,
    RenderCreeper,
    RenderAxesHelper,
    RenderPlane,
    RenderLine,
    RenderCar,
    RendererService
)(App);
