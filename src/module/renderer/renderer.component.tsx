import React, { useEffect, useRef } from 'react';
import { useInstance } from 'react-ioc';
import * as THREE from 'three';

import { RendererService } from './core/renderer.service';

type Props = {};

export const RendererComponent = (props: Props) => {
    const render = useInstance(RendererService);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current) {
            render.render2Dom(divRef.current);
        }
    }, []);

    return (
        <div>
            <div ref={divRef}></div>
        </div>
    );
};
