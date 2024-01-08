import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class BottomBuilding {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initBottomBuilding ();
        this.setMaterials();
    
       
    }

    async initBottomBuilding() {
        try {
            this.bottom_building = this.resources.items.whiterun.bottom_building; // Updated object reference
           
        } catch (error) {
            
        }

        this.bottom_building_texture = this.resources.items.whiterun.bottom_building_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.bottom_building_texture) {
        

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.bottom_building.scene || this.bottom_building;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.bottom_building_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.bottom_building_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}