import { Actor, Vector } from "excalibur"
import {Resources} from "./resources.js";

export class Movebox extends Actor{

    constructor(xpos,ypos) {
        super();
        let x = xpos
        let y = ypos
        this.graphics.use(Resources.Go.toSprite())
        this.pos = new Vector(x, y)
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerdown", (event) => this.move(x, y))
    }

    move(x, y) {
        this.parent.move(this.parent.pos.x + x, this.parent.pos.y + y)
    }

}