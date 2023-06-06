import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Attackbox} from "./attackbox.js";

export class Attacksword extends Actor{

    nattackbox
    neattackbox
    wnattackbox

    constructor(xpos,ypos, rotate) {
        super({width:Resources.Empty.width, height:Resources.Empty.height});
        let x = xpos
        let y = ypos
        this.graphics.use(Resources.AttackSword.toSprite())
        this.collider.useBoxCollider(Resources.Empty.width, Resources.Empty.height)
        this.pos = new Vector(x, y)
        this.rotation = rotate
        this.enableCapturePointer = true
        this.pointer.useColliderShape = true
        this.on("pointerdown", (event) => this.attack())

        this.nattackbox = new Attackbox(0, 0, 2)
        this.addChild(this.nattackbox)
        this.neattackbox = new Attackbox(32, 0, 1)
        this.addChild(this.neattackbox)
        this.wnattackbox = new Attackbox(-32, 0, 1)
        this.addChild(this.wnattackbox)
    }

    attack(){
        this.nattackbox.attack()
        this.neattackbox.attack()
        this.wnattackbox.attack()
    }
}