import { Actor, Vector, Input } from "excalibur"
import {Resources} from "./resources.js";
import {Wall} from "./wall.js";
import {Box} from "./box.js";

export class Player extends Actor{
    zetover = 5
    leven = 5
    oldpos
    boxmanager
    world

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Player.toSprite())
        this.pos = new Vector(400, 304)
        this.on('precollision', (event) => this.hitSomething(event))
        this.boxmanager = new Box(this)
        this.addChild(this.boxmanager)
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);
        if(this.world.playersbeurt){
            if (_engine.input.keyboard.wasPressed(Input.Keys.R))
            {
                this.boxmanager.spawnSwordbox()
            }
            if (_engine.input.keyboard.wasPressed(Input.Keys.F))
            {
                this.boxmanager.spawnspearbox()
            }
            if (_engine.input.keyboard.wasPressed(Input.Keys.T))
            {
                this.boxmanager.spawnmovebox()
            }
        }

        //debug leven
        if (_engine.input.keyboard.wasPressed(Input.Keys.ArrowDown))
        {
            this.damage(1)
        }
        if (_engine.input.keyboard.wasPressed(Input.Keys.ArrowUp))
        {
            this.heal(1)
        }
    }

    constructor(setworld) {
        super({width:1, height:1});
        this.world = setworld
    }

    //move player to position and save te old position
    move(x, y, oldx, oldy){
        if(this.world.playersbeurt){
            this.oldpos = new Vector(oldx, oldy)
            this.pos = new Vector(x, y)
            this.zetover -= 1
        }
        if(this.zetover === 0){
            this.world.playersbeurt = false
            this.boxmanager.removebox()
        }
    }

    //check if player is inside wall and reset zet
    hitSomething(event){
        if(event.other instanceof Wall) {
            if(this.oldpos){
                this.pos = this.oldpos
            }
            this.zetover += 1
        }
    }

    //take leven
    damage(damage){
        this.leven -= damage
        this.world.updatelevenui()
    }

    //give leven
    heal(healing){
        this.leven += healing
        this.world.updatelevenui()
    }
}