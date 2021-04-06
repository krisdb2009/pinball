import { Item } from './item.js';
import { GravityItem } from './gravityitem.js';
export class DevStats extends Item {
    constructor() {
        super();
        this.Font = '12px monospace';
        this.BackgroundColor = 'red';
        this.ForgroundColor = 'black';
        this.X = 650;
        this.Y = 0;
        this.Width = 150;
        this.Height = 50;
    }
    Draw() {
        var ctx = BAEngine.Engine.Context;
        ctx.font = this.Font;
        ctx.fillStyle = this.BackgroundColor;
        ctx.fillRect(this.X, this.Y, this.Width, this.Height);
        ctx.fillStyle = this.ForgroundColor;
        ctx.fillText('BAEngine: Pinball', this.X + 5, this.Y + 15);
        ctx.fillText('FPS: ' + BAEngine.Engine.FrameRate, this.X + 5, this.Y + 30);
        ctx.fillText('TPS: ' + BAEngine.Engine.PhysicsRate, this.X + 5, this.Y + 45);
    }
}