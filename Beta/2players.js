var player;
var coins;
var score = 0;
var box;
var wall;
function setup() {
  createCanvas(1000, 600);
  coins = new Group();
  wall = new Group();
  wall2 = new Group();
  wall3 = new Group();
  wall4 = new Group();
  box = createSprite(width/5, width/5, 10, 10);
  for (var i = 0; i < 100; i++) {
  var c = createSprite(random(0, width-10), random(0, height-10), 10, 10);
  c.shapeColor = color(255,255, 0);
  coins.add(c);
  c.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/gif.gif"))
  }
  wall4 = createSprite(500, 599, 1000, 1);
  wall4.shapeColor = color(0, 0, 255);
  wall3 = createSprite(1000, 100, 1, 1000);
  wall3.shapeColor = color(0, 0, 255);
  wall2 = createSprite(.5, .5, 1, 2000);
  wall2.shapeColor = color(0, 0, 255);
  wall = createSprite(1, 1, 2000, 1);
  wall.shapeColor = color(0, 0, 255);
  player = createSprite(width/2,height/2,15,15);
  player.shapeColor = color(255);
  player.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/box.png"))

  coins.shapeColor = color(0,255,0)
  box.shapeColor = color(255, 250, 0);
  box.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/gif.gif"))

}

function draw(){
  background(50);
  fill(255,0,0);
  textSize(70);
  textAlign(CORNER, CORNER);
  if(keyDown(32)){
    box.setSpeed(0, 0)
  }
  if(player.collide(wall4)){
    player.setSpeed(-15, 45);
  }
  if(player.collide(wall3)){
    player.setSpeed(-15, -45);
  }
  if(player.collide(wall2)){
    player.setSpeed(-15, 135);
  }
  if(player.collide(wall)){
    player.setSpeed(-15, 225);
  } 
  if(box.collide(wall4)){
    box.setSpeed(-15, 45);
  }
  if(box.collide(wall3)){
    box.setSpeed(-15, -45);
  }
  if(box.collide(wall2)){
    box.setSpeed(-15, 135);
  }
  if(box.collide(wall)){
    box.setSpeed(-15, 225);
  }     
  if(player.collide(box)){
    noLoop();
    text("Player 2 Wins", width/3, height/2.5);
  }
  if (coins.length > 0){
  text(score, width/2, height/2)
  }
  if (keyDown(UP_ARROW)){
    box.setSpeed(10, 270);  
  }
  if(keyDown(LEFT_ARROW)){
    box.setSpeed(10, 180);
  }
  if(keyDown(DOWN_ARROW)){
    box.setSpeed(10, 90);
  }
  if(keyDown(RIGHT_ARROW)){
    box.setSpeed(10, 0);
  }
  if (keyDown(87)){
    player.setSpeed(8, 270);
  }
  if (keyDown(65)){
    player.setSpeed(8, 180);
 }
  if (keyDown(83)){
    player.setSpeed(8, 90);
  }
  if (keyDown(68)){
    player.setSpeed(8, 0);
  }
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else{
    noLoop();
    text("Player 1 Wins", width/2, height/2);
  }
  player.overlap(coins, getCoin);
  drawSprites();
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
 
}