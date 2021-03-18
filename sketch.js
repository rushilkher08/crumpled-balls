
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,550);
	crumpled = new paper(500,650,50);
	Engine.run(engine);
  
}


function draw() {
  background(230);

  groundObject.display();
  dustbinObj.display();
  crumpled.display();

}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:440,y:-400})

}


}


