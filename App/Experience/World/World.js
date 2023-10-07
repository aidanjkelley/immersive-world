import * as THREE from "three";
import Experience from "../Experience.js";


import {EventEmitter} from "events";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.localStorage = this.experience.localStorage;
        this.state = this.localStorage.state;
      

        this.resources.determineLoad(this.state.location);
       

        this.resources.on("ready", () => {
            
        
            if (this.scene.children.includes(cube)) {
                console.log("Cube exists in the scene.");
            } else {
                console.log("Cube does not exist in the scene.");
            }


        });
    }

    update(){
        
    }
}