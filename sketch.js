const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
 var ground;

 engine = Engine.create();
 world = engine.world;
}

function draw() {
  background(0);  

  ground = new Ground(200,200,100,20);

  //drawSprites();
  ground.display();
}