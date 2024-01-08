import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Corridor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initCorridor ();
        this.setMaterials();
    
       
    }

    async initCorridor() {
        try {
            this.corridor = this.resources.items.whiterun.corridor; // Updated object reference
           
        } catch (error) {
           
        }

        this.corridor_texture = this.resources.items.whiterun.corridor_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.corridor_texture) {
        console.log("Texture is loaded:", this.corridor_texture);

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.corridor.scene || this.corridor;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.corridor_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.corridor_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}