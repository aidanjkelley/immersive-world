import * as THREE from "three";
import Experience from "../../../Experience.js";

import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper.js";

export default class Landscape {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.octree = this.experience.world.octree;

        this.initLandscape();
        this.setMaterials();
        this.setLandscapeCollider();
       
    }

    initLandscape(){
        this.landscape= this.resources.items.whiterun.landscape_w_collider.scene;
        this.landscape_texture = this.resources.items.whiterun.bottom_building_texture;

}

    setMaterials(){
        this.landscape_texture.flipY = false;
        this.landscape_texture.encoding = THREE.SRGBColorSpace;
    
        this.landscape.children.find((child)=>{
            child.material = new THREE.MeshBasicMaterial({
                map: this.landscape_texture,
            });

            
        });
    
            this.scene.add(this.landscape);
    }
    setLandscapeCollider() {
        const collider = this.landscape.getObjectByName("COLIDER_");
        
        if (collider) {
            if(this.octree) {
            this.octree.fromGraphNode(collider);
            collider.removeFromParent();
            collider.geometry.dispose();
        

        const helper = new OctreeHelper(this.octree);
        helper.visible = false;
        this.scene.add(helper);

    
        }
    }
    }

}