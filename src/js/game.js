import '../css/style.css'
import {Actor, Engine, Scene} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Mainmenu} from "./mainmenu.js";

export class Game extends Engine {
    constructor() {
        super({ width: 800, height: 640 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(engine) {
        console.log("start de game!")

        this.add("mainmenu", new Mainmenu());
        this.goToScene("mainmenu");

        //this.showDebug(true)
    }
}

new Game()
