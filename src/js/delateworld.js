import { Actor, Vector, Input } from "excalibur"
import {Resources} from "./resources.js";
import {Movebox} from "./movebox.js";
import {Wall} from "./wall.js";
import {Box} from "./box.js";

export class Delateworld extends Actor{

    delate = false

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Empty.toSprite())
        this.pos = new Vector(400, 304)
        this.on('precollision', (event) => this.hitSomething(event))
    }

    constructor(world) {
        super({width:800, height:640});
    }

    hitSomething(event){
        if(event.other instanceof Wall, this.delate === true) {
            console.log("delate walls")
            event.other.destroyroom()
            this.delate = false
        }
    }
}