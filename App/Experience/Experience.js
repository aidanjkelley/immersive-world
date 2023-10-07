import * as THREE from "three";
import LocalStorage from "./LocalStorage.js";

import Sizes from "./utils/Sizes.js";
import Time from "./utils/Time.js";
import Resources from "./utils/Resources.js";
import assets from "./utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";




import World from "./World/World.js";


export default class Experience {
    static instance;
    constructor(canvas) {
        if(Experience.instance){
            return Experience.instance;
        }

        Experience.instance = this

        this.canvas = canvas;
        this.time = new Time();
        this.sizes = new Sizes();
        this.resources = new Resources(assets);
 

        this.setScene();
        this.setCamera();
        this.setRenderer();
        this.setLocalStorage();
        this.setResources(assets);
        this.setWorld();
        

        this.sizes.on("resize", () => {
            this.onResize();

        });
       
    
    this.update();
 
}

    setScene(){
        this.scene = new THREE.Scene();

    }

    setScene() {
        this.scene = new THREE.Scene();
    }
    
    
    setCamera() {
        this.camera = new Camera();
    }
    
    
    setRenderer() {
        this.renderer = new Renderer();
    }
    
    
    setLocalStorage() {
        this.localStorage = new LocalStorage();
    }
    
    
    setResources() {
        this.resources = new Resources(assets);
    }
    
    
    setWorld() {
        this.world = new World();
    }
    
    onResize(){
        this.camera.onResize();

    }


    update(){
       if (this.camera) this.camera.update();
       if (this.renderer) this.renderer.update ();
       if (this.world) this.world.update();
       if (this.time) this.time.update();

       window.requestAnimationFrame(() => {
        this.update();
       });
        
}

   
    

}