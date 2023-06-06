import { Actor, Color, Engine, Events, Scene } from "excalibur";
import {World} from "./world.js";

export class Gamescene extends Scene {
    onInitialize(_engine ) {
        const actor = new Actor({
            x: _engine.halfDrawWidth,
            y: _engine.halfDrawHeight,
            width: 20,
            height: 20,
            color: Color.Magenta,
        });

        //spawn world class
        let world = new World(this, 4)
        this.add(world)
    }
}