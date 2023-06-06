import { Actor, Vector } from "excalibur"
import {Resources} from "./resources.js";

export class Indistructeblewall extends Actor{

    constructor(xpos, ypos) {
        super({width:1, height:1});
        //set on location
        this.pos = new Vector(xpos, ypos)
        //set correct sprite
        //left
        if(this.pos.x === 16 && this.pos.y >= 48 && this.pos.y <= 608){
            this.graphics.use(Resources.Border4.toSprite())
        }
        //right
        else if(this.pos.x === 784 && this.pos.y >= 48 && this.pos.y <= 608){
            this.graphics.use(Resources.Border2.toSprite())
        }
        //top
        else if(this.pos.x >= 48 && this.pos.x <= 768 && this.pos.y === 16){
            this.graphics.use(Resources.Border1.toSprite())
        }
        //bottom
        else if(this.pos.x >= 48 && this.pos.x <= 768 && this.pos.y === 624){
            this.graphics.use(Resources.Border3.toSprite())
        }
        //left top corner
        else if(this.pos.x === 16 && this.pos.y === 16){
            this.graphics.use(Resources.Border5.toSprite())
        }
        //right top corner
        else if(this.pos.x === 784 && this.pos.y === 16){
            this.graphics.use(Resources.Border6.toSprite())
        }
        //left bottom corner
        else if(this.pos.x === 16 && this.pos.y === 624){
            this.graphics.use(Resources.Border8.toSprite())
        }
        //right bottom corner
        else if(this.pos.x === 784 && this.pos.y === 624){
            this.graphics.use(Resources.Border7.toSprite())
        }
    }
}