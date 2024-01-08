import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Trees {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initTrees();
        this.setMaterials();
    
       
    }

    async initTrees() {
        try {
            this.trees = this.resources.items.whiterun.trees; // Updated object reference
           
        } catch (error) {
        
        }

        this.trees_texture = this.resources.items.whiterun.trees_texture; // Updated texture reference
    }

// ...
setMaterials() {
    if (this.trees_texture) {

        // Find the actual THREE.Object3D within the loaded model
        // It may be in the 'scene' property or another part of the loaded object
        const object3D = this.trees.scene || this.trees;


        this.trees_texture.encoding = THREE.sRGBEncoding; // Updated encoding

        object3D.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.trees_texture,
                });
            }
        });

        this.scene.add(object3D);
    } else {
        console.error("Texture not loaded or undefined.");
    }
}
}