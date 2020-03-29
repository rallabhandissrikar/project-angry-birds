class Rumble{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':50
        }
    this.body = Bodies.circle(x,y,r);
    this.r = r;
    this.image = loadImage("picks/Untitled.png");
    World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       
       translate(pos.x,pos.y)
       fill("cyan")
       rectMode(CENTER);
       rotate(angle);
       ellipse(0,0,40);
       pop();
    }
}