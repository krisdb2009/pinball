export class Item {
    constructor() {
        BAEngine.Engine.TickQueue.push(this);
        var ctx = BAEngine.Engine.Context;
        this.Visible = true;
        this.Transform = {
            Rotation: 0,
            Origin: {
                X: 0,
                Y: 0
            },
            Translate: {
                X: 0,
                Y: 0
            },
            Skew: {
                X: 0,
                Y: 0
            },
            Scale: {
                X: 1,
                Y: 1
            }
        }
        this.fillText = function(text, x, y) {
            ctx.fillText(text, (this.Transform.Origin.X * -1) + x, (this.Transform.Origin.Y * -1) + y);
        }
        this.fillRect = function(x, y, width, height) {
            ctx.fillRect((this.Transform.Origin.X * -1) + x, (this.Transform.Origin.Y * -1) + y, width, height);
        }
        this.drawImage = function(image, dx, dy, dWidth, dHeight) {
            ctx.drawImage(image, (this.Transform.Origin.X * -1) + dx, (this.Transform.Origin.Y * -1) + dy, dWidth, dHeight);
        }
    }
    Draw() {
        var ctx = BAEngine.Engine.Context;
        ctx.setTransform(
            this.Transform.Scale.Y, 
            this.Transform.Skew.Y, 
            this.Transform.Skew.X, 
            this.Transform.Scale.X, 
            this.Transform.Translate.X + this.Transform.Origin.X, 
            this.Transform.Translate.Y + this.Transform.Origin.Y
        );
        ctx.rotate(this.Transform.Rotation);
        this.DrawRelative();
        ctx.resetTransform();
    }
    DrawRelative() { }
    Tick() { }
}