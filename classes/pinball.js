import { GravityItem } from './gravityitem.js'
export class Pinball extends GravityItem {
    constructor() {
        super();
        this.Image = new Image();
        this.Image.src = './resources/pinball.png';
        this.Width = 15;
        this.Height = 15;
    }
    Draw() {
        var ctx = BAEngine.Engine.Context;
        ctx.drawImage(this.Image, this.X, this.Y);
    }
}