const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,ground,trash1,trash2;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(25,100,120);
    ground = new Ground(400,550,800,20);
   // trash1 = new Trashbin(650,530,200,20);
    trash2 = new Trashbin(550,475,20,150);
    trash3 = new Trashbin(750,475,20,150);
    // wall = new Trashbin(770,400,20,800);
    // wall2 = new Trashbin(400,10,700,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    paper.display();
    ground.display();
  //  trash1.display();
    trash2.display();
    trash3.display();
    // wall.display();
    // wall2.display();
    console.log("paper x"+ paper.body.position.x);
    console.log("paper y"+paper.body.position.y);
    console.log("paper angle "+paper.body.angle);
    keyPressed();

}


function keyPressed() {
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-100})
    }
    
    if(keyCode === DOWN_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0})
    }
}