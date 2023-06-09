import { Actor, Color, Engine, Events, Scene } from "excalibur";
import {Resources} from "./resources.js";
import {Gamescene} from "./gamescene.js";
import {Mainmenu} from "./mainmenu.js";
import {Score} from "./score.js";
import {Background} from "./background.js";

export class Gameoverscene extends Scene {

    onInitialize(_engine ) {
        this.engine = _engine

        // spawn background
        let background = new Actor({
            x: _engine.halfDrawWidth,
            y: _engine.halfDrawHeight,
        })
        _engine.add(background)
        background.graphics.use(Resources.Endbackground.toSprite())

        //retry button
        const retrybutton = new Actor({
            x: _engine.halfDrawWidth,
            y: _engine.halfDrawHeight + 120,
            width: Resources.Startbutton.width,
            height: Resources.Startbutton.height,
            color: Color.Magenta,
        });
        retrybutton.graphics.use(Resources.Retry.toSprite())
        retrybutton.enableCapturePointer = true
        retrybutton.pointer.useGraphicsBounds = true
        retrybutton.on("pointerdown", (event) => this.gotogame())
        _engine.add(retrybutton);

        //menu button
        const menubutton = new Actor({
            x: _engine.halfDrawWidth,
            y: _engine.halfDrawHeight + 180,
            width: Resources.Startbutton.width,
            height: Resources.Startbutton.height,
            color: Color.Magenta,
        });
        menubutton.graphics.use(Resources.Menu.toSprite())
        menubutton.enableCapturePointer = true
        menubutton.pointer.useGraphicsBounds = true
        menubutton.on("pointerdown", (event) => this.gotomenu())
        _engine.add(menubutton);
    }

    constructor(score) {
        super();
        let highscore = new Score()
        highscore.checkhighscore()
        console.log(highscore.currenthighscore + ' ' + score)
        if(highscore.currenthighscore < score){
            console.log('new record')
            highscore.sethighscore(score)
        }
    }

    //go to game scene
    gotogame(){
        console.log('click')
        this.engine.add("gamescene", new Gamescene());
        this.engine.goToScene("gamescene");
    }

    //go to menu scene
    gotomenu(){
        console.log('click')
        this.engine.add("menuscene", new Mainmenu());
        this.engine.goToScene("menuscene");
    }
}