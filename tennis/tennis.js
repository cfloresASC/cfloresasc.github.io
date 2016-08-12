var walls;
var boxes;
var player;
var ball;
var MAX_SPEED = 10;
var enemy;
function setup() {
	background(0);
  createCanvas(1300, 600);
  wall = new Group();
  wall2 = new Group();
  wall3 = new Group();
  wall4 = new Group();
  ball = new Group();
   
   //second Person you are playing against 
  enemy = createSprite(width-28, height/2, 10, 100);
  enemy.immovable = true;
  //tenis ball
  ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;
  ball.setSpeed(MAX_SPEED, -180);
  //Person you are controlling
  player = createSprite(50, height/2, 10, 10);
  player.immovable = true;
  player.shapeColor = color(255);
  //walls that prevent the ball from leaving the area
  wall4 = createSprite(500, 599, 1690, 1);
  wall4.shapeColor = color(255);
  wall3 = createSprite(1299, 100, 1, 1000);
  wall3.shapeColor = color(255);
  wall2 = createSprite(.5, .5, 1, 2000);
  wall2.shapeColor = color(255);
  wall = createSprite(.5, .5, 3050, 1);
  wall.shapeColor = color(255);;
}
function draw() {
  background(3,101,100);
  player.velocity.y = 
    (mouseY-player.position.y)*0.5;

  player.collide(wall4)
  player.collide(wall3)
  player.collide(wall2)
  player.collide(wall)
  ball.bounce(wall2);
  ball.bounce(wall3);
  ball.bounce(wall4);
  ball.bounce(wall);
  if(ball.position.x<50) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  }
  
  if(ball.position.x>width) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  }
    if(ball.bounce(player)) {
    var swing = (ball.position.y-player.position.y)/3;
    ball.setSpeed(MAX_SPEED, swing);
  }
    if(ball.bounce(enemy)) {
    var swing = (ball.position.y-enemy.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }
  
    drawSprites();
 
}