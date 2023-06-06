import {Actor, Font, FontUnit, Label, vec, Vector, Color, TextAlign, randomIntInRange} from "excalibur"
import {Resources} from "./resources.js";

export class Wall extends Actor{

    levens = 6
    labelleven
    first = true
    world

    constructor(xpos, ypos, world) {
        super({width:Resources.Go.width, height:Resources.Go.height});
        this.graphics.use(Resources.Wall.toSprite())
        this.pos = new Vector(xpos, ypos)
        this.world = world

        /*
        // debug destroy wall
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerdown", (event) => this.damage(100))
         */
    }

    //damage the wall
    damage(damageAmount) {
        this.levens -= damageAmount
        if(this.first){
            this.labelleven = new Label({
                text: this.levens.toString(),
                pos: vec(0, 0),
                font: new Font({
                    family: 'impact',
                    size: 16,
                    unit: FontUnit.Px
                })
            });
            this.addChild(this.labelleven);
            this.first = false;
        }

        this.labelleven.text = this.levens.toString();
        if(this.levens <= 0){
            this.destroy()
        }
    }

    //destroy the wall with points
    destroy(){
        this.world.addscore(10)
        this.kill()
    }

    //destroy the wall without points
    destroyroom(){
        this.kill()
    }
}