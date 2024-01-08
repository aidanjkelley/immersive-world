
import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class TowerDetails {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        

        this.initTowerDetails ();
        this.setMaterials();
    
       
    }

    async initTowerDetails() {
        try {
            this.tower_details = this.resources.items.whiterun.tower_details; // Updated object reference
           
        } catch (error) {
            
        }

        this.tower_details_texture = this.resources.items.whiterun.tower_details_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.tower_details_texture) {
        

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.tower_details.scene || this.tower_details;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.tower_details_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.tower_details_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}