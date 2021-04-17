export class Engine {
    constructor(CanvasContext) {
        this.FrameTime = 0;
        this.PhysicsPerformance = 0;
        this.TimeSinceLastFrameMS = 0;
        this.FrameRate = 0;
        this.TickRate = 0;
        this.PhysicsTargetRateMS = 3;
        this.Speed = 0.5;
        this.PhysicsPerFrame = 0;
        this.Context = CanvasContext;
        this.Layers = new Array();
        this.TickQueue = new Array();
        this.FramesPassed = 0;
        this.TicksPassed = 0;
        this.Initialize();
    }
    Initialize() {
        console.log('Engine: Starting physics...');
        console.log('Engine: Initializing...');
        setInterval(function() {
            BAEngine.Engine.FrameRate = BAEngine.Engine.FramesPassed;
            BAEngine.Engine.FramesPassed = 0;
        }, 1000);
        setInterval(function() {
            BAEngine.Engine.TickRate = BAEngine.Engine.TicksPassed;
            BAEngine.Engine.TicksPassed = 0;
        }, 1000);
    }
    Play() {
        console.log('Engine: Playing.');
        this.DrawFrame();
    }
    Pause() {
        console.log('Engine: Paused.');
    }
    DrawFrame() {
        var now = performance.now();
        BAEngine.Engine.TimeSinceLastFrameMS = now - BAEngine.Engine.FrameTime;
        BAEngine.Engine.FrameTime = now;
        BAEngine.Engine.Layers.forEach(function(item) {
            item.Draw();
        });
        BAEngine.Engine.PhysicsPerFrame += BAEngine.Engine.TimeSinceLastFrameMS;
        while(BAEngine.Engine.PhysicsPerFrame >= BAEngine.Engine.PhysicsTargetRateMS) {
            BAEngine.Engine.PhysicsPerFrame -= BAEngine.Engine.PhysicsTargetRateMS;
            BAEngine.Engine.Tick();
        }
        requestAnimationFrame(BAEngine.Engine.DrawFrame);
        BAEngine.Engine.FramesPassed++;
    }
    Tick() {
        BAEngine.Engine.TickQueue.forEach(function(item) {
            item.Tick();
        });
        BAEngine.Engine.TicksPassed++;
    }
}