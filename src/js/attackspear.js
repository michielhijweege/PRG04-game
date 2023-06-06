import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Attackbox} from "./attackbox.js";

export class Attackspear extends Actor{

    attackbox1
    attackbox2
    attackbox3

    constructor(xpos,ypos, rotate) {
        super({width:Resources.Empty.width, height:Resources.Empty.height});
        let x = xpos
        let y = ypos
        this.graphics.use(Resources.AttackSpear.toSprite())
        this.graphics.anchor.y = 0.839
        this.collider.useBoxCollider(Resources.Empty.width, Resources.Empty.height)
        this.pos = new Vector(x, y)
        this.rotation = rotate
        this.enableCapturePointer = true
        this.pointer.useColliderShape = true
        this.on("pointerdown", (event) => this.attack())

        this.attackbox1 = new Attackbox(0, 0, 3)
        this.addChild(this.attackbox1)
        this.attackbox2 = new Attackbox(0, -32, 2)
        this.addChild(this.attackbox2)
        this.attackbox3 = new Attackbox(0, -64, 1)
        this.addChild(this.attackbox3)
    }

    attack(){
        this.attackbox1.attack()
        this.attackbox2.attack()
        this.attackbox3.attack()
    }
}