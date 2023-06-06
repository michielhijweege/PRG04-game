import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";

export class Background extends Actor{

    constructor(xpos, ypos) {
        super();
        this.xpos = xpos
        this.ypos = ypos
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(xpos, ypos)
    }
}