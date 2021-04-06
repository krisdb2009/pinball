import { Engine } from './classes/engine.js'
import { Game } from './classes/game.js';
import { Pinball } from './classes/pinball.js';

class Main {
    constructor() {
        window.BAEngine.Engine = new Engine(document.querySelector('canvas').getContext('2d'));
        BAEngine.Engine.Play();
        window.BAEngine.Game = new Game();

        setInterval(function() {
            var pb = new Pinball();
            pb.XVelocity = (Math.random() * 1) - (Math.random() * 2);
            pb.YVelocity = (Math.random() * 1) - (Math.random() * 2);
            BAEngine.Engine.Layers.push(pb);
        }, 1000);



    }
}
window.BAEngine = {};
window.BAEngine.Main = new Main();