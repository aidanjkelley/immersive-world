import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Tower2 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initTower2();
        this.setMaterials();
    
       
    }

    async initTower2() {
        try {
            this.tower2 = this.resources.items.whiterun.tower2; // Updated object reference
            
        } catch (error) {
            
        }

        this.tower2_texture = this.resources.items.whiterun.tower2_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.tower2_texture) {

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.tower2.scene || this.tower2;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.tower2_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.tower2_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}