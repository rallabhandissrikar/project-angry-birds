const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var rumb, sling;
var hels = [];
var hels1 = [];
var hels2 = [];
var hels3 = [];
var hels4 = [];

//------------------------------------------------------------------

up1=[];
up2 = [];


function setup(){
    createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(width/2,height-5,1600,30);
  ground2 = new Ground(900,200,300,20)
    rumb = new Rumble(400,400,20);
  sling = new Shot(rumb.body,{x:290,y:400});
 for(var i=0;i<10;i++){
  hels[i] = new Box(550,400,25,25);
 }
 for(var i=0;i<10;i++){
    hels1[i] = new Box(600,400,25,25);
   }
   for(var i=0;i<10;i++){
    hels2[i] = new Box(650,400,25,25);
   }
   for(var i=0;i<10;i++){
    hels3[i] = new Box(700,400,25,25);
   }
   

   //--------------------------------------------------------------
  
   for (var i=0; i< 5 ; i++){
    up1[i]= new Box(900,100,25,25);
   }
   for (var i=0; i< 5 ; i++){
    up2[i]= new Box(850,100,25,25);
   }
}

function draw(){
    background(255);
   Engine.update(engine);
    rumb.display();
    ground.display();
    ground2.display();
    sling.display();

    //-----------------------------------------------------------
    for(var i=0;i<10;i++){
        hels[i].display();
       }
       for(var i=0;i<10;i++){
        hels1[i].display();
       }
       for(var i=0;i<10;i++){
        hels2[i].display();
       }
       for(var w=0;w<10;w++){
        hels3[w].display();
       }

    //------------------------------------------------------------
    for (var i=0; i< 5 ; i++){
        up1[i].display(); 
    }
    for (var i=0; i< 5 ; i++){
        up2[i].display(); 
    }
}

function mouseDragged(){
Matter.Body.setPosition(rumb.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyReleased(){
    if (keyCode===32){
        sling.attach(rumb.body);
    }
}
