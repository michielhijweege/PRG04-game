import '../css/style.css'
import {Actor, Engine, randomIntInRange, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Wall} from "./wall.js";
import {Indistructeblewall} from "./indistructeblewall.js";

export class Game extends Engine {
    constructor() {
        super({ width: 800, height: 640 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const player = new Player()
        this.add(player)

        // spawn border
        for (let x = 0; x < 25; x++)
        {
            for (let y = 0; y < 20; y++)
            {
            let indistructeblewall = new Indistructeblewall(x * 32 + 16 , y * 32 + 16)
                if(x === 0 || x === 24 || y === 0 || y === 19)
                {
                    this.add(indistructeblewall)
                }
            }
        }

        // spawn random wall
        for (let x = 0; x < 25; x++)
        {
            for (let y = 0; y < 20; y++)
            {
                let wall = new Wall(x * 32 + 16 , y * 32 + 16)
                if(randomIntInRange(1,100) > 50)
                {
                        this.add(wall)
                }
            }
        }

    }
}

new Game()
