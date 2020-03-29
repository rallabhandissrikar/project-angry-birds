class Shot {

    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.25,
            length: 5
        }
        this.shot = Constraint.create(options);

        World.add(world,this.shot);
    }
    attach(body){
        this.shot.bodyA =  body;
    }
    fly(){
      this.shot.bodyA = null;
    }
    display(){
        
        if(this.shot.bodyA){
            var pointA = this.shot.bodyA.position;
        var pointB = this.shot.pointB;
        push();
        strokeWeight(5);
        stroke(0)
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();

        }
    }
}