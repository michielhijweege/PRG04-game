import { Actor, Vector, Input } from "excalibur"
import {Resources} from "./resources.js";
import {Player} from "./player.js";

export class Exit extends Actor{
    exitstatus = false
    world

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Exitclose.toSprite())
        this.pos = new Vector(400, 304)
        this.on('precollision', (event) => this.hitSomething(event))
    }

    constructor(world) {
        super({width:1, height:1});
        this.world = world
    }

    //change status of door
    changestatus(){
        this.exitstatus = !this.exitstatus;
        if(this.exitstatus === true){
            this.graphics.use(Resources.Exitopen.toSprite())
        }
        if(this.exitstatus === false){
            this.graphics.use(Resources.Exitclose.toSprite())
        }
    }

    // hit delate other wall
    hitSomething(event){
        if(event.other instanceof Player) {
            if(this.exitstatus === true){
                this.world.delateworld()
            }
        }
    }
}