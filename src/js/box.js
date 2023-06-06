import {Actor, Vector} from "excalibur"
import {Movebox} from "./movebox.js";
import {Attacksword} from "./attacksword.js";
import {Attackspear} from "./attackspear.js";

export class Box extends Actor{

    player

    moveN1
    moveN2
    moveE1
    moveE2
    moveS1
    moveS2
    moveW1
    moveW2

    constructor(setPlayer) {
        super({width:1, height:1});
        this.player = setPlayer
        this.spawnmovebox()
    }

    spawnmovebox(){
        this.removebox()
        // North move
        this.moveN1 = new Movebox(0, -32, this.player, 0)
        this.addChild(this.moveN1)
        this.moveN2 = new Movebox(0, -64, this.player, 0)
        this.addChild(this.moveN2)

        // East move
        this.moveE1 = new Movebox(32, 0, this.player, 1.5707963268)
        this.addChild(this.moveE1)
        this.moveE2 = new Movebox(64, 0, this.player, 1.5707963268)
        this.addChild(this.moveE2)

        // South move
        this.moveS1 = new Movebox(0, 32, this.player, 3.1415926536)
        this.addChild(this.moveS1)
        this.moveS2 = new Movebox(0, 64, this.player, 3.1415926536)
        this.addChild(this.moveS2)

        // West move
        this.moveW1 = new Movebox(-32, 0, this.player, 4.7123889804)
        this.addChild(this.moveW1)
        this.moveW2 = new Movebox(-64, 0, this.player, 4.7123889804)
        this.addChild(this.moveW2)
    }

    spawnSwordbox(){
        this.removebox()
        // North move
        this.moveN1 = new Attacksword(0, -32, 0)
        this.addChild(this.moveN1)

        // East move
        this.moveE1 = new Attacksword(32, 0, 1.5707963268)
        this.addChild(this.moveE1)

        // South move
        this.moveS1 = new Attacksword(0, 32, 3.1415926536)
        this.addChild(this.moveS1)

        // West move
        this.moveW1 = new Attacksword(-32, 0, 4.7123889804)
        this.addChild(this.moveW1)
    }

    spawnspearbox(){
        this.removebox()
        // North move
        this.moveN1 = new Attackspear(0, -32, 0)
        this.addChild(this.moveN1)

        // East move
        this.moveE1 = new Attackspear(32, 0, 1.5707963268)
        this.addChild(this.moveE1)

        // South move
        this.moveS1 = new Attackspear(0, 32, 3.1415926536)
        this.addChild(this.moveS1)

        // West move
        this.moveW1 = new Attackspear(-32, 0, 4.7123889804)
        this.addChild(this.moveW1)
    }

    //remove all boxen
    removebox(){
        if(this.moveN1){this.removeChild(this.moveN1)}
        if(this.moveN2){this.removeChild(this.moveN2)}
        if(this.moveE1){this.removeChild(this.moveE1)}
        if(this.moveE2){this.removeChild(this.moveE2)}
        if(this.moveS1){this.removeChild(this.moveS1)}
        if(this.moveS2){this.removeChild(this.moveS2)}
        if(this.moveW1){this.removeChild(this.moveW1)}
        if(this.moveW2){this.removeChild(this.moveW2)}
    }
}