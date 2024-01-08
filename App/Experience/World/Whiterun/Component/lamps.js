import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Lamps {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initLamps ();
        this.setMaterials();
    
       
    }

    async initLamps() {
        try {
            this.lamps = this.resources.items.whiterun.lamps; // Updated object reference
            
        } catch (error) {
         
        }

        this.lamps_texture = this.resources.items.whiterun.lamps_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.lamps_texture) {
        console.log("Texture is loaded:", this.lamps_texture);

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.lamps.scene || this.lamps;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.lamps_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.lamps_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}