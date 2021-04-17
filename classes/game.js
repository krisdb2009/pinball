import { Background } from "./background.js";
import { DevStats } from "./devstats.js";
import { Pinball } from "./pinball.js";

export class Game {
    constructor() {
        console.log('Game: Initializing layers...');
        BAEngine.Engine.Layers.push(
            new Background(),
            new Pinball(),
            new DevStats(500,100)
        );
        console.log('Game: Done initializing layers.');
    }
}