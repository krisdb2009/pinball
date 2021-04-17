import { Item } from './item.js';
import { GravityItem } from './gravityitem.js';
export class DevStats extends Item {
    constructor(TransX, TransY) {
        super();
        this.Font = '12px monospace';
        this.BackgroundColor = 'red';
        this.ForgroundColor = 'black';
        this.Transform = {
            Rotation: 0,
            Origin: {
                X: 75,
                Y: 25
            },
            Translate: {
                X: TransX,
                Y: TransY
            },
            Skew: {
                X: 0,
                Y: 0
            },
            Scale: {
                X: 1,
                Y: 2
            }
        }
    }
    DrawRelative() {
        var ctx = BAEngine.Engine.Context;


        ctx.font = this.Font;
        ctx.fillStyle = this.BackgroundColor;
        this.fillRect(0, 0, 150, 50);
        ctx.fillStyle = this.ForgroundColor;
        this.fillText('BAEngine: Pinball', 5, 10);
        this.fillText('FPS: ' + BAEngine.Engine.FrameRate, 5, 20);
        this.fillText('TPS: ' + BAEngine.Engine.TickRate, 5, 30);



        

    }
    Tick() {
        this.Transform.Rotation += 0.001;
    }
}