import * as THREE from "three";
import Experience from "../Experience.js";
import Whiterun from "./Whiterun/Whiterun.js";

import { Octree } from "three/examples/jsm/math/Octree.js";


import {EventEmitter} from "events";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.resources = this.experience.resources;

        this.octree = new Octree();
        
        


        this.localStorage = this.experience.localStorage;
        this.state = this.localStorage.state;
      

        this.resources.determineLoad(this.state.location);
       

        this.resources.on("ready", () => {
        this.setWorld();
        });
    }

    
    setWorld(){
        this.whiterun = new Whiterun();
    }



    update(){
        
    }
}