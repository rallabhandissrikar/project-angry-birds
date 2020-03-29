class Box  {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':10
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.visibility = 255;
    }

    display(){
        if(this.body.speed<6){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            fill("red");
            translate(pos.x,pos.y)
            rotate(angle)
            rect(0,0,25,25);
            pop();
          }
          else{
            World.remove(world,this.body);
            push()
            this.visibility-=5;
            tint(255,this.visibility);
            rect(0,0,20,20);
            pop()
          }
      
    }
}