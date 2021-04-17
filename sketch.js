const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var backgroundImage;
var ballImage;
var ringImage;
var engine,world;



function preload(){
  backgroundImage=loadImage("BACKGROUND.jpg");
  ballImage=loadImage("BLUEBALL2.png");
  ringImage=loadImage("RING2.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  drawSprites();

}
