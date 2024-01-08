import * as THREE from "three";
import Experience from "./Experience.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";


export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.params = {
            fov: 75,
            aspect: this.sizes.aspect, 
            near: 0.01, 
            far: 1000,
        };

        this.setPerspectiveCamera();
        this.setOrbitControls();

    }

        setPerspectiveCamera(){
            this.perspectiveCamera = new THREE.PerspectiveCamera(
                this.params.fov,
                this.params.aspect,
                this.params.near,
                this.params.far
            );
            this.perspectiveCamera.position.set(0.322358216775106, 0.7013836579667079, 3.4052930303136884);
            this.scene.add(this.perspectiveCamera);
        }

        setOrbitControls(){
            this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
            this.controls.enableDamping = true;

        }

    resize() {
        // Updating Perspective Camera
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

    }

    onResize(){
        //Call the resize method, which handles camera aspect updates

        this.resize();
    }

    update() {
        this.controls.update();
        console.log(this.perspectiveCamera.p);
    }
}