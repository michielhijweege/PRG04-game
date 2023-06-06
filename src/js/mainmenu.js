import {Actor, Color, Engine, Events, Scene, Vector, TextAlign, Label, vec, Font, FontUnit} from "excalibur";
import {Gamescene} from "./gamescene.js";
import {Resources} from "./resources.js";
import {Score} from "./score.js";
import {Background} from "./background.js";

export class Mainmenu extends Scene {
    engine
    highscore = 0

    onInitialize(_engine ) {
        this.engine = _engine
        const actor = new Actor({
            x: _engine.halfDrawWidth,
            y: _engine.halfDrawHeight,
            width: Resources.Startbutton.width,
            height: Resources.Startbutton.height,
            color: Color.Magenta,
        });
        actor.graphics.use(Resources.Startbutton.toSprite())
        actor.enableCapturePointer = true
        actor.pointer.useGraphicsBounds = true
        actor.on("pointerdown", (event) => this.gotogame())
        _engine.add(actor);

        let score = new Score()
        score.checkhighscore()
        this.highscore = score.currenthighscore

        this.labelleven = new Label({
            text: "Current highscore is " + this.highscore.toString(),
            pos: vec(_engine.halfDrawWidth, _engine.halfDrawHeight - 60),
            font: new Font({
                family: 'impact',
                size: 16,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center
            })
        });
        this.add(this.labelleven);
    }

    gotogame(){
        this.engine.add("gamescene", new Gamescene());
        this.engine.goToScene("gamescene");
    }
}