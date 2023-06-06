import {
    Actor,
    Engine,
    randomIntInRange,
    Label,
    Color,
    TextAlign,
    Vector,
    vec,
    Font,
    FontUnit,
    Timer,
    Input
} from "excalibur"
import {Wall} from "./wall.js";
import {Indistructeblewall} from "./indistructeblewall.js";
import {Room} from "./room.js";
import {Player} from "./player.js";
import {Game} from "./game.js";
import {Background} from "./background.js";
import {Enemy} from "./enemy.js";
import {Exit} from "./exit.js";
import {Delateworld} from "./delateworld.js";
import {Gamescene} from "./gamescene.js";
import {Gameoverscene} from "./gameoverscene.js";

export class World extends Actor{
    // hoeveel kamers er worden gespawnd op deze verdieping
    roomamount = 1
    game
    exit
    player
    enemy = 0
    labelenemy
    score = 0
    labelscore
    worlddelater
    level = 1
    labellevel
    labelleven
    engine
    playersbeurt = true
    enemyzeds
    once = true

    onInitialize(_engine ) {
        this.engine = _engine
    }

    constructor(gameobj, roomamount) {
        super();
        this.game = gameobj
        this.roomamount = roomamount

        // spawn background
        let background = new Background(400,320)
        this.game.add(background)

        //create outer wall
        for (let x = 0; x < 25; x++)
        {
            for (let y = 0; y < 20; y++)
            {
                let indistructeblewall = new Indistructeblewall(x * 32 + 16 , y * 32 + 16)
                if(x === 0 || x === 24 || y === 0 || y === 19)
                {
                    this.game.add(indistructeblewall)
                }
            }
        }

        //create inner wall
        this.createworld()

        // spawn player
        this.player = new Player(this)
        this.game.add(this.player)

        //label for enemey
        this.labelenemy = new Label({
            text: "Enemy: " + this.enemy.toString(),
            pos: vec(20, 20),
            font: new Font({
                family: 'impact',
                size: 16,
                unit: FontUnit.Px,
                color: Color.White.clone(),
            })
        });
        this.game.add(this.labelenemy);

        //label for score
        this.labellevel = new Label({
            text: "Level: " + this.level.toString(),
            pos: vec(200, 20),
            font: new Font({
                family: 'impact',
                size: 16,
                unit: FontUnit.Px,
                color: Color.White.clone(),
            })
        });
        this.game.add(this.labellevel);

        //label for score
        this.labelscore = new Label({
            text: "Score: " + this.score.toString(),
            pos: vec(400, 20),
            font: new Font({
                family: 'impact',
                size: 16,
                unit: FontUnit.Px,
                color: Color.White.clone(),
            })
        });
        this.game.add(this.labelscore);

        //label for levens
        this.labelleven = new Label({
            text: "leven: " + this.player.leven.toString(),
            pos: vec(720, 20),
            font: new Font({
                family: 'impact',
                size: 16,
                unit: FontUnit.Px,
                color: Color.White.clone(),
            })
        });
        this.game.add(this.labelleven);
    }

    createworld(){
        // spawn inner wall
        for (let x = 1; x < 24; x++)
        {
            for (let y = 1; y < 19; y++)
            {
                let wall = new Wall(x * 32 + 16 , y * 32 + 16, this)
                this.game.add(wall)
            }
        }

        //spawn kamers
        for (let r = 0; r < this.roomamount; r++)
        {
            //spawn begin kamer
            if(r === 0)
            {
                console.log('spawn begin room')
                let room = new Room(400 , 304, 20, this, false)
                this.game.add(room)
                if(!this.exit){
                    this.exit = new Exit(this)
                    this.game.add(this.exit)
                }
            }
            // spawn andere kamers
            else
            {
                let checkpos = false
                while(!checkpos)
                {
                    let randomx = randomIntInRange(1, 23)
                    let x = 32 * randomx + 16
                    if (Number.isInteger(x / 48))
                    {
                        let randomy = randomIntInRange(1, 18)
                        let y = 32 * randomy - 16
                        if (Number.isInteger(y / 48))
                        {
                            let room2 = new Room(x , y, randomIntInRange(10, 20), this, true)
                            this.game.add(room2)
                            checkpos = true
                        }
                    }
                }
            }
        }
    }

    //delate the inner walls of the world
    delateworld(){
        if(!this.worlddelater){
            this.worlddelater = new Delateworld()
            this.game.add(this.worlddelater)
            this.worlddelater.delate = true
        }else{
            this.worlddelater.delate = true
        }
        this.worlddelater.delate = false
        this.exit.changestatus()
        this.level++
        this.labellevel.text = "Level: " + this.level.toString()
        this.createworld()
    }

    //spawn enemy on x y location & update ui
    spawnenemy(x, y){
        let enemy = new Enemy(x, y, this)
        this.game.add(enemy)
        this.enemy++
        this.labelenemy.text = "Enemy: " + this.enemy.toString()
    }

    // add score to total score & update ui
    addscore(score){
        this.score += score
        this.labelscore.text = "Score: " + this.score.toString()
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);
        if(!this.playersbeurt && this.once){
            this.enemyzeds = this.enemy
            this.once = false
        }
        if(this.enemyzeds <= 0 && !this.playersbeurt){
            console.log('enemy done')
            this.once = true
            this.playersbeurt = true
            this.enemyzeds = this.enemy
            this.player.zetover = 5
        }
    }

    //update ui leven
    updatelevenui()
    {
        this.labelleven.text = "leven: " + this.player.leven.toString()
        if(this.player.leven <= 0){
            this.engine.add("gameoverscene", new Gameoverscene(this.score));
            this.engine.goToScene("gameoverscene");
        }
    }
}