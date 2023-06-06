import {Actor, randomIntInRange, Vector} from "excalibur"
import {Resources} from "./resources.js";
import {Wall} from "./wall.js";
import {Indistructeblewall} from "./indistructeblewall.js";
import {Enemy} from "./enemy.js";

export class Room extends Actor{

    roomsize
    start = false
    done = false
    oldpos
    world
    spawnenemy

    constructor(xpos, ypos, size, setworld, setspawnenemy) {
        super({width:Resources.Empty.width, height:Resources.Empty.height});
        this.graphics.use(Resources.Empty.toSprite())
        this.roomsize = size
        console.log(xpos, ypos, size)
        this.on("precollision", (event) => this.hitSomething(event))
        this.pos = new Vector(xpos, ypos)
        this.oldPos = new Vector(xpos, ypos)
        this.world = setworld
        this.spawnenemy = setspawnenemy
    }

    onPreUpdate(engine)
    {
        if(this.roomsize > 0 && this.start === true)
        {
            let face = randomIntInRange(0,100)

            if(face <= 49)
            {
                let x = randomIntInRange(0,100)
                if(this.pos.x === 32)
                {
                    x = 55
                }
                if(this.pos.x === 768){
                    x = 44
                }

                if(x <= 49)
                {
                    this.pos = new Vector(this.pos.x - 32, this.pos.y)
                }
                if(x >= 50)
                {
                    this.pos = new Vector(this.pos.x + 32, this.pos.y)
                }
            }
            if(face >= 50)
            {
                let y = randomIntInRange(0,100)
                if(this.pos.y === 32)
                {
                    y = 55
                }
                if(this.pos.y === 608){
                    y = 44
                }

                if(y <= 49)
                {
                    this.pos = new Vector(this.pos.x, this.pos.y - 32)
                }
                if(y >= 50)
                {
                    this.pos = new Vector(this.pos.x, this.pos.y + 32)
                }
            }
        }

        if(this.roomsize <= 0 && !this.done){
            this.done = true
            console.log('done')
            this.kill()
        }

        if(this.pos.x < 32 || this.pos.x > 768 || this.pos.y < 32 || this.pos.y > 608)
        {
            this.pos = this.oldPos
        }
    }

    hitSomething(event){
        if(event.other instanceof Wall)
        {
            this.oldPos = this.pos
            this.roomsize -= 1
            event.other.destroyroom()
            this.start = true
            if(randomIntInRange(1,100) >= 80 && this.spawnenemy)
            {
                this.world.spawnenemy(this.pos.x, this.pos.y)
            }
        }
    }
}