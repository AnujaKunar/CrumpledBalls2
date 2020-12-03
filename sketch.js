
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paperObject, ground;

function setup() {
  createCanvas(1400, 400);
  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(600,height,1600,20);

  paperObject = new Paper(200,450,40);
  dustbin = new Dustbin(1200,380,200,20);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  dustbin.display();
  paperObject.display();
  ground.display();
 
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
	}
}

