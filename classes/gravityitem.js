import { Item } from './item.js';
export class GravityItem extends Item {
    constructor() {
        super();
        this.Friction = 1.001;
        this.XVelocity = 20;
        this.YVelocity = 20;
        this.XGravity = 0;
        this.YGravity = 0.005;
        this.Width = 0;
        this.Height = 0;
    }
    Tick() {
        if(this.YVelocity != 0) this.YVelocity = this.YVelocity / this.Friction;
        if(this.XVelocity != 0) this.XVelocity = this.XVelocity / this.Friction;
        this.XVelocity -= this.XGravity; //Gravity
        this.YVelocity -= this.YGravity; //Gravity
        this.Transform.Translate.Y -= this.YVelocity;
        this.Transform.Translate.X += this.XVelocity;
        if(this.Transform.Translate.Y >= (600 - this.Height)) {
            this.Transform.Translate.Y = (600 - this.Height);
            this.YVelocity = this.YVelocity * -1;
        }
        if(this.Transform.Translate.Y <= 0) {
            this.Transform.Translate.Y = 0;
            this.YVelocity = this.YVelocity * -1;
        }
        if(this.Transform.Translate.X >= (800 - this.Width)) {
            this.Transform.Translate.X = (800 - this.Width);
            this.XVelocity = this.XVelocity * -1;
        }
        if(this.Transform.Translate.X <= 0) {
            this.Transform.Translate.X = 0;
            this.XVelocity = this.XVelocity * -1;
        }
    }
}