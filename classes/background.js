import { Item } from './item.js'
export class Background extends Item {
    constructor() {
        super();
        this.BackgroundColor = '#000';
    }
    Draw() {
        var ctx = BAEngine.Engine.Context;
        ctx.fillStyle = this.BackgroundColor;
        ctx.fillRect(0, 0, 800, 600);
    }
}