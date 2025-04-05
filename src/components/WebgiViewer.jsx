import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect
} from 'react';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    GroundPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    CanvasSnipperPlugin,
    // FileTransferPlugin,
    mobileAndTabletCheck,
    AssetManagerBasicPopupPlugin,

} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function WebgiViewer() {
    const canvasRef = useRef(null)
    const setupViewer = useCallback(async () => {
        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        // Add plugins individually.
        // await viewer.addPlugin(GBufferPlugin)
        // await viewer.addPlugin(new ProgressivePlugin(32))
        // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
        // await viewer.addPlugin(GammaCorrectionPlugin)
        // await viewer.addPlugin(SSRPlugin)
        // await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        // await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
        // await viewer.addPlugin(AssetManagerPlugin)
        // and many more...

        // or use this to add all main ones at once.
        await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

        // Add a popup(in HTML) with download progress when any asset is downloading.
        await viewer.addPlugin(AssetManagerBasicPopupPlugin)

        // Required for downloading files from the UI
        // await viewer.addPlugin(FileTransferPlugin)

        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin)

        // Import and add a GLB file.
        // await viewer.load("scene-black.glb")   
        await manager.addFromPath("scene.glb");

        // viewer.getPlugin(TonemapPlugin).config.clipBackground = true;


        // Load an environment map if not set in the glb file
        // await viewer.setEnvironmentMap("./assets/environment.hdr");

    }, []);

    useEffect(() => {
        setupViewer()
    }, []);

    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
}

export default WebgiViewer;