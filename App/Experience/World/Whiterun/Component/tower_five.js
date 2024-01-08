import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Tower5 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initTower5();
        this.setMaterials();
    
       
    }

    async initTower5() {
        try {
            this.tower5 = this.resources.items.whiterun.tower5; // Updated object reference
           
        } catch (error) {
        
        }

        this.tower5_texture = this.resources.items.whiterun.tower5_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.tower5_texture) {

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.tower5.scene || this.tower5;


        this.tower5_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.tower5_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}