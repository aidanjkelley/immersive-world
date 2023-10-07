import Experience from "./Experience.js";

export default class LocalStorage {
    constructor() {
        this.experience = new Experience();
        this.camera = this.experience.camera;

        this.initPlayerState();
        this.setStateObject();
    }

    initPlayerState() {
        this.stringState = {
            playerPositon: "whiterun|0|0|0",
            playerRotation: "0|0|0",
        };

        if(localStorage.getItem("playerPosition") &&localStorage.getItem("playerRotation")
        ) {
            this.stringState.playerPosition = 
            localStorage.getItem("playerPosition");
            this.stringState.playerRotation = 
            localStorage.getItem("playerRotation");
        } else { 
            localStorage.setItem("playerPosition", this.stringState.playerPositon
            );
            localStorage.setItem(
                "playerRotation",
                this.stringState.playerRotation
            );
        }
    }

        updateLocalStorage() {
            localStorage.setItem(
                "playerPosition",
                 `${this.state.location}|${this.camera.perspectiveCamera.position.x}|${this.camera.perspectiveCamera.position.y}|${this.camera.perspectiveCamera.position.z}`
            );

            

        localStorage.setItem(
                "playerRotation", 
                `${this.state.location}|${this.camera.perspectiveCamera.rotation.x}|${this.camera.perspectiveCamera.rotation.y}|${this.camera.perspectiveCamera.rotation.z}`
            );

        }
        

        setLocation(location) {
            this.state.location = location;
        }

        setStateObject() {
            this.state = {
                location: this.stringState.playerPositon.split("|")[0],

                posX:0,
                posY:0,
                posZ:0,
                rotX:0,
                rotY:0,
                rotZ:0,
            };

                if (localStorage.getItem("playerPosition") && localStorage.getItem("playerRotation")) {
                    const playerPosition = localStorage.getItem("playerPosition").split("|");
                    const playerRotation = localStorage.getItem("playerRotation").split("|");
                    
                    if (playerPosition.length === 4 && playerRotation.length === 4) {

                    
            
                this.state.posX = Number(playerPosition.split("|")[1]);
                this.state.posY = Number(playerPosition.split("|")[2]);
                this.state.posZ = Number(playerPosition.split("|")[3]);
                this.state.rotX = Number(playerRotation.split("|")[1]);
                this.state.rotY = Number(playerRotation.split("|")[2]);
                this.state.rotZ = Number(playerRotation.split("|")[3]);
                 }
            }
        }
     
        update(){
            this.updateLocalStorage();
            this.setStateObject();
        }
    }


