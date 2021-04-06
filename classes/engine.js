export class Engine {
    constructor(CanvasContext) {
        this.FrameTime = 0;
        this.PhysicsTime = 0;
        this.PhysicsPerformance = 0;
        this.FramePerformance = 0;
        this.FrameRate = 0;
        this.PhysicsRate = 0;
        this.PhysicsTargetRateMS = 3;
        this.Speed = 0.5;
        this.PhysicsPerFrame = 0;
        this.Context = CanvasContext;
        this.Layers = new Array();
        this.PhysicsQueue = new Array();
        this.Initialize();
    }
    Initialize() {
        console.log('Engine: Starting physics...');
        console.log('Engine: Initializing...');
        setInterval(function() {
            BAEngine.Engine.FrameRate = Math.round(1000 / BAEngine.Engine.FramePerformance);
        }, 100);
        setInterval(function() {
            BAEngine.Engine.PhysicsRate = Math.round(1000 / BAEngine.Engine.PhysicsPerformance);
        }, 100);
    }
    Play() {
        console.log('Engine: Playing.');
        this.DrawFrame();
        this.CalculatePhysics();
    }
    Pause() {
        console.log('Engine: Paused.');
    }
    DrawFrame() {
        var now = performance.now();
        BAEngine.Engine.FramePerformance = now - BAEngine.Engine.FrameTime;
        BAEngine.Engine.FrameTime = now;
        BAEngine.Engine.Layers.forEach(function(item) {
            item.Draw();
        });
        BAEngine.Engine.PhysicsPerFrame += BAEngine.Engine.FramePerformance;
        while(BAEngine.Engine.PhysicsPerFrame >= BAEngine.Engine.PhysicsTargetRateMS) {
            BAEngine.Engine.PhysicsPerFrame -= BAEngine.Engine.PhysicsTargetRateMS;
            BAEngine.Engine.CalculatePhysics();
        }
        requestAnimationFrame(BAEngine.Engine.DrawFrame);
    }
    CalculatePhysics() {
        var now = performance.now();
        BAEngine.Engine.PhysicsPerformance = now - BAEngine.Engine.PhysicsTime;
        BAEngine.Engine.PhysicsTime = now;
        BAEngine.Engine.PhysicsQueue.forEach(function(item) {
            item.CalculatePhysics();
        });
        //setTimeout(BAEngine.Engine.CalculatePhysics, 1 - (Date.now() - now));
    }
}