import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Tower3 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initTower3();
        this.setMaterials();
    
       
    }

    async initTower3() {
        try {
            this.tower3 = this.resources.items.whiterun.tower3; // Updated object reference
           
        } catch (error) {
        
        }

        this.tower3_texture = this.resources.items.whiterun.tower3_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.tower3_texture) {

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.tower3.scene || this.tower3;


        this.tower3_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.tower3_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}