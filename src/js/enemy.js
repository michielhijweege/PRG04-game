import {Actor, Font, FontUnit, Label, vec, Vector, Color, TextAlign, randomIntInRange} from "excalibur"
import {Resources} from "./resources.js";
import {Wall} from "./wall.js";
import {Player} from "./player.js";
import {Attackenemy} from "./attackenemy.js";

export class Enemy extends Actor{
    zetover = 0
    levens = 6
    xpos
    ypos
    first = true
    labelleven
    world

    once

    readytoattack = false

    moveN1
    moveE1
    moveS1
    moveW1

    constructor(xpos, ypos, world) {
        super({width:Resources.Player.width, height:Resources.Player.height});
        this.xpos = xpos
        this.ypos = ypos
        this.graphics.use(Resources.Player.toSprite())
        this.pos = new Vector(xpos, ypos)
        this.world = world

        const aihitbox = new Actor({
            width: Resources.Empty.width * 5,
            height: Resources.Empty.height * 5,
        });
        aihitbox.graphics.use(Resources.Empty.toSprite())
        this.addChild(aihitbox);
        aihitbox.on("precollision", (event) => this.hitSomething(event))
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta)
        if(!this.world.playersbeurt && this.once){
            this.zetover = 1
            this.once = false
        }
        if(this.world.playersbeurt){
            this.once = true
        }
        if(this.zetover <= 0){
            this.world.enemyzeds -= 1
        }
    }

    hitSomething(event){
        if(this.zetover > 0 && this.readytoattack && !this.world.playersbeurt){
            console.log('do damage')
            if(this.moveN1 != null){
                this.moveN1.attack()
                this.removeChild(this.moveN1)
            }if(this.moveE1 != null){
                this.moveE1.attack()
                this.removeChild(this.moveE1)
            }if(this.moveS1 != null){
                this.moveS1.attack()
                this.removeChild(this.moveS1)
            }if(this.moveW1 != null){
                this.moveW1.attack()
                this.removeChild(this.moveW1)
            }
            this.zetover -= 1
            this.readytoattack = false
        }

        if(event.other instanceof Player)
        {
            if(!this.world.playersbeurt && this.zetover > 0 && !this.readytoattack) {
                if (event.other.pos.x > this.pos.x && event.other.pos.y === this.pos.y) {
                    console.log('player is right')
                    this.moveE1 = new Attackenemy(32, 0, 1.5707963268)
                    this.addChild(this.moveE1)
                    this.zetover -= 1
                    this.readytoattack = true
                }
                if (event.other.pos.x < this.pos.x && event.other.pos.y === this.pos.y) {
                    console.log('player is left')
                    this.moveW1 = new Attackenemy(-32, 0, 4.7123889804)
                    this.addChild(this.moveW1)
                    this.zetover -= 1
                    this.readytoattack = true
                }
                if (event.other.pos.y < this.pos.y && event.other.pos.x === this.pos.x) {
                    console.log('player is up')
                    this.moveN1 = new Attackenemy(0, -32, 0)
                    this.addChild(this.moveN1)
                    this.zetover -= 1
                    this.readytoattack = true
                }
                if (event.other.pos.y > this.pos.y && event.other.pos.x === this.pos.x) {
                    console.log('player is down')
                    this.moveS1 = new Attackenemy(0, 32, 3.1415926536)
                    this.addChild(this.moveS1)
                    this.zetover -= 1
                    this.readytoattack = true
                }

                if (event.other.pos.y < this.pos.y && event.other.pos.x > this.pos.x) {
                    console.log('player is right up')
                    this.zetover -= 1
                }
                if (event.other.pos.y < this.pos.y && event.other.pos.x < this.pos.x) {
                    console.log('player is left up')
                    this.zetover -= 1
                }
                if (event.other.pos.y > this.pos.y && event.other.pos.x > this.pos.x) {
                    console.log('player is right down')
                    this.zetover -= 1
                }
                if (event.other.pos.y > this.pos.y && event.other.pos.x < this.pos.x) {
                    console.log('player is left down')
                    this.zetover -= 1
                }
            }
        }
    }

    damage(damageamount){
        this.levens -= damageamount
        console.log("damage")
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
        if(this.levens === 0){
            this.destroy()
        }
    }

    destroy(){
        this.world.enemy -= 1
        this.world.labelenemy.text = "Enemy: " + this.world.enemy.toString()
        this.world.addscore(100)
        if(this.world.enemy <= 0){
            this.world.exit.changestatus()
        }
        this.kill()
    }
}