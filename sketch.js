const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine
var world
var ground
var ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
var ground_option = {
  isStatic: true
}
  ground = Bodies.rectangle(400,380,800,20,ground_option);
  World.add(world,ground);
  console.log(ground.position.x,ground.position.y);
var ball_option = {
  restitution: 1
}
  ball = Bodies.circle(200,100,40,ball_option);
  World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40)
}

