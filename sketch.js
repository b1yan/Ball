const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,groundOptions);
  World.add(world, ground);
  var options={
    restitution:1.0


  }
    
  
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball)
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20)
}