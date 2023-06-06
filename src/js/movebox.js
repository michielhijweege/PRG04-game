import {Actor, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Wall} from "./wall.js";
import {Indistructeblewall} from "./indistructeblewall.js";
import {Enemy} from "./enemy.js";

export class Movebox extends Actor{

    player

    constructor(xpos,ypos, setplayer, rotate) {
        super({width:1, height:1});
        let x = xpos
        let y = ypos
        this.graphics.use(Resources.Go.toSprite())
        this.pos = new Vector(x, y)
        this.rotation = rotate
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerdown", (event) => this.move(x, y))
        this.on('collisionend', (event) => this.hitnothing(event))
        this.on('precollision', (event) => this.hitSomething(event))
        this.player = setplayer
    }

    move(x, y) {
        this.player.move(this.player.pos.x + x, this.player.pos.y + y, this.player.pos.x, this.player.pos.y)
    }

    hitnothing(event){
        if(event.other instanceof Wall || event.other instanceof Indistructeblewall || event.other instanceof Enemy) {
            this.boxactive()
        }
    }

    hitSomething(event){
        if(event.other instanceof Wall || event.other instanceof Indistructeblewall || event.other instanceof Enemy) {
            this.boxanotctive()
        }
    }

    boxactive(){
        this.graphics.use(Resources.Go.toSprite())
        this.pointer.useGraphicsBounds = true
    }

    boxanotctive(){
        this.graphics.use(Resources.Empty.toSprite())
        this.pointer.useGraphicsBounds = false
    }
}