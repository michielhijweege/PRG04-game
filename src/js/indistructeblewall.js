import { Actor, Vector } from "excalibur"
import {Resources} from "./resources.js";

export class Indistructeblewall extends Actor{
    xpos
    ypos

    constructor(xpos, ypos) {
        super();
        this.xpos = xpos
        this.ypos = ypos
        this.graphics.use(Resources.Wall.toSprite())
        this.pos = new Vector(xpos, ypos)
    }
}