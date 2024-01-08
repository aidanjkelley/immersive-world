import Landscape from "./Component/landscape.js";
import Tower2 from "./Component/tower_two.js";
import Tower3 from "./Component/tower_three.js";
import Tower4 from "./Component/tower_four.js";
import Tower5 from "./Component/tower_five.js";
import Trees from "./Component/trees.js";
import Bus from "./Component/bus.js";
import BottomBuilding from "./Component/bottom_building.js";
import Corridor from "./Component/corridor.js";
import Lamps from "./Component/lamps.js";
import Tv from "./Component/tv.js";
import TowerDetails from "./Component/tower_details.js";




export default class Whiterun {
    constructor(){
        this.tower2 = new Tower2();
        this.tower3 = new Tower3();
        this.tower4 = new Tower4();
        this.tower5 = new Tower5();
        this.trees = new Trees();
        this.bottom_building = new BottomBuilding();
        this.bus = new Bus();
        this.landscape = new Landscape();
        this.corridor = new Corridor();
        this.lamps = new Lamps ();
        this.tv = new Tv ();
        this.tower_details = new TowerDetails ();
        
    }

    resize() {}
    
    update(){}


}