import { Item } from './item.js';
export class GravityItem extends Item {
    constructor() {
        super();
        this.Friction = 1.001;
        this.XVelocity = 20;
        this.YVelocity = 20;
        this.XGravity = 0;
        this.YGravity = 0.005;
        this.Initialize();
    }
    Initialize() {
        BAEngine.Engine.PhysicsQueue.push(this);
    }
    CalculatePhysics() {
        var Engine = BAEngine.Engine;
        if(this.YVelocity != 0) this.YVelocity = this.YVelocity / this.Friction;
        if(this.XVelocity != 0) this.XVelocity = this.XVelocity / this.Friction;
        this.XVelocity -= this.XGravity; //Gravity
        this.YVelocity -= this.YGravity; //Gravity
        this.Y -= this.YVelocity;
        this.X += this.XVelocity;
        if(this.Y >= (600 - this.Height)) {
            this.Y = (600 - this.Height);
            this.YVelocity = this.YVelocity * -1;
        }
        if(this.Y <= 0) {
            this.Y = 0;
            this.YVelocity = this.YVelocity * -1;
        }
        if(this.X >= (800 - this.Width)) {
            this.X = (800 - this.Width);
            this.XVelocity = this.XVelocity * -1;
        }
        if(this.X <= 0) {
            this.X = 0;
            this.XVelocity = this.XVelocity * -1;
        }
    }
}