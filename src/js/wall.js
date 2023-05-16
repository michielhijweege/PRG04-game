import {Actor, Label, Vector} from "excalibur"
import {Resources} from "./resources.js";

export class Wall extends Actor{
    levens = 6
    xpos
    ypos

    constructor(xpos, ypos) {
        super();
        this.xpos = xpos
        this.ypos = ypos
        this.graphics.use(Resources.Wall.toSprite())
        this.pos = new Vector(xpos, ypos)
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerdown", (event) => this.damage())
        const label = new Label({
            text: 'Some text',
            pos: Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.addChild(label)
    }

    damage() {
        this.levens -= 1
        console.log("damage")
        if(this.levens === 0){
            this.kill()
            console.log("kapot " + this.xpos + " " + this.ypos)
        }
    }
}