//physics engine

//3 classes
//namespacing
// Like the universe - it is the entire engine
const Engine = Matter.Engine;

// World is inside the universe
const World = Matter.World;

//objects inside the world which follow the rules of physics
const Bodies = Matter.Bodies;
var ball;
//my program's engine
var engine;

var world;

var ground;

function setup() {
  createCanvas(800, 400);
  //create the engine
  engine = Engine.create();

  world = engine.world;

  var options = {
    isStatic: true,
  };
  //creates an object - only in the memory of the computer - you cannot see it.
  ground = Bodies.rectangle(400, 390, 800, 20, options);

  World.add(world, ground);

  console.log(ground);

  console.log("x: " + ground.position.x);
  console.log(ground.position.y);
  var ball_options = {
    restitution: 3.0,
  };
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  console.log(ball);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  //activate my engine - engine - so that it follows the rules of physics
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}
