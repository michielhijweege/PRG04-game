import { Actor, Vector } from "excalibur"
import {Resources} from "./resources.js";
import {Movebox} from "./movebox.js";

export class Player extends Actor{
    beurt = true
    zetover = 2
    levens = 6

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(400, 304)

        // North move
        let moveN1 = new Movebox(0, -32)
        this.addChild(moveN1)
        let moveN2 = new Movebox(0, -64)
        this.addChild(moveN2)

        // East move
        let moveE1 = new Movebox(32, 0)
        this.addChild(moveE1)
        let moveE2 = new Movebox(64, 0)
        this.addChild(moveE2)

        // South move
        let moveS1 = new Movebox(0, 32)
        this.addChild(moveS1)
        let moveS2 = new Movebox(0, 64)
        this.addChild(moveS2)

        // West move
        let moveW1 = new Movebox(-32, 0)
        this.addChild(moveW1)
        let moveW2 = new Movebox(-64, 0)
        this.addChild(moveW2)
    }

    constructor() {
        super();
    }

    move(x,y){
        if(this.beurt){
            console.log(x + ' ' + y)
            console.log('er is nog ' + this.zetover + ' zets over')
            this.pos = new Vector(x, y)
            this.zetover -= 1
        }
        if(this.zetover === 0){
            this.beurt = false
        }
    }
}