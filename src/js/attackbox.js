import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Wall} from "./wall.js";
import {Indistructeblewall} from "./indistructeblewall.js";
import {Enemy} from "./enemy.js";
import {Player} from "./player.js";

export class Attackbox extends Actor{

    isattackking
    attackstreng

    constructor(xpos,ypos, setattackstreng) {
        super({width:1, height:1});
        this.graphics.use(Resources.Empty.toSprite())
        this.pos = new Vector(xpos, ypos)
        this.attackstreng = setattackstreng
        this.on('precollision', (event) => this.hitSomething(event))
    }

    hitSomething(event){
        if(event.other instanceof Wall && this.isattackking || event.other instanceof Enemy && this.isattackking || event.other instanceof Player && this.isattackking) {
            event.other.damage(this.attackstreng)
            this.isattackking = false
        }
    }

    attack(){
        this.isattackking = true
    }
}