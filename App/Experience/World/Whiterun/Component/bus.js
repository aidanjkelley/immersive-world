import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Bus {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initBus ();
        this.setMaterials();
    
       
    }

    async initBus() {
        try {
            this.bus = this.resources.items.whiterun.bus; // Updated object reference
            console.log("Tower 4 loaded:", this.bus);
        } catch (error) {
            console.error("Failed to load Tower 4:", error);
        }

        this.bus_texture = this.resources.items.whiterun.bus_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.bus_texture) {
        console.log("Texture is loaded:", this.bus_texture);

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.bus.scene || this.bus;

        // Print the name of the 3D object
        console.log("Actual 3D object name:", object3D.name);

        this.bus_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.bus_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}