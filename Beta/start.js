//Global variable so we wouldn't have to rewrite the code each time
//remind Richard to give accepttable grades
var player;
var coins;
var score = 0;
var wall;
var box;
var box2;
var box3;
var box4;
var boxImg;
var power;
var move;
var x;
var homescreen = true;
var game = false;
var b;
function setup() {
  createCanvas(1000, 600);
  background(50);
  back = createSprite(500, 300, 1350, 500);
  back.shapeColor = color(0,255,0)
  back.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/floor1.png"))
  coins = new Group();
  b = new Group();
  b2 = new Group();
  b3 = new Group();
  b4 = new Group();
  box = new Group();
  box2 = new Group();
  box3 = new Group();
  box4 = new Group();
  wall = new Group();
  wall2 = new Group();
  wall3 = new Group();
  wall4 = new Group();
  wall5 = new Group();
  power = new Group();
  move = true;
  // box.addImage(loadImage("box")) 
//Enemies
  for (var i = 0; i < 7; i++) {
  var b = createSprite(random(20, width-300), random(0, height-300), 10, 10);
  b.shapeColor = color(255,0,255);
  box.add(b);
  b.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/medium.png"))

}

  for (var i = 0; i < 7; i++) {
  var b2 = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b2.shapeColor = color(255,0,255);
  box2.add(b2);
  b2.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/medium.png"))

}
  for (var i = 0; i < 7; i++) {
  var b3 = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b3.shapeColor = color(255,0,255);
  box3.add(b3);
  b3.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/medium.png"))

}  for (var i = 0; i < 7; i++) {
  var b4 = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b4.shapeColor = color(255,0,255);
  box4.add(b4);
  b4.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/medium.png"))

}
 for (var i = 0; i < 10; i++) {
  var p = createSprite(random(20, width-100), random(0, height-100), 5, 5);
  p.shapeColor = color(0,250,0);
  power.add(p);
  p.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/boots.png"))
}


//Coins

  for (var i = 0; i < 20; i++) {
  var c = createSprite(random(20, width-100), random(20, height-100), 10, 10);
  c.shapeColor = color(255,255, 0);
  coins.add(c);
  c.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/gif.gif"))
}
  //Sets the positin of the walls (borders of the field) so that the player cannot escape
  wall5 = createSprite(200, 300, 10, 400);
  wall5.shapeColor = color(200, 0, 200);
  wall5.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/wall3.png"))
  wall4 = createSprite(500, 599, 1000, 1);
  wall4.shapeColor = color(0, 0, 255);
  wall3 = createSprite(1000, 100, 1, 999);
  wall3.shapeColor = color(0, 0, 255);
  wall2 = createSprite(.5, .5, 1, 2000);
  wall2.shapeColor = color(0, 0, 255);
  wall = createSprite(.5, .5, 2000, 1);
  wall.shapeColor = color(0, 0, 255);
  player = createSprite(width/2,height/2,15,15);
  player.shapeColor = color(255);
  player.addImage(loadImage("https://raw.githubusercontent.com/cfloresASC/cfloresasc.github.io/master/Beta/knight1.png"))
  coins.shapeColor = color(0,255,0);
}
//Make a moving wall back and forth. use collide
//This part makes the player move with the keys
function draw(){
  if (homescreen === true){
    background(0,0,0);
    textSize(50);
    fill(255);
    text("Press Spacebar to Start", 250, 300);
    if (keyCode === 32){
      homescreen = false
      game = true
    }
  }
  if (game === true){
  background(50);
  textSize(70);
  fill(255,0,0)
  textAlign(CORNER, CORNER);

//Player to collide with only the enemies
//if enemy hits player than game over appears
  if(player.collide(wall5)){
    noLoop();
    textSize(30);
    text("Game Over", 800, 40);
  }
  if(wall5.collide(wall3)){
    wall5.setSpeed(3,180);
  }
  if(wall5.collide(wall2)){
    wall5.setSpeed(3,0);
  }
  if(player.collide(wall4)){
    noLoop();
    textSize(30);
    text("Game Over", 800, 40);
    //player.setSpeed (0,0)
  }
  if(player.collide(wall3)){
    noLoop();
    textSize(30);
    text("Game Over", 800, 40);
    //player. setSpeed (0,0)
  }
  if(player.collide(wall2)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

    //player. setSpeed (0,0)
  }
  if(player.collide(wall)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

    //player.setSpeed(0,0)
  }
  if(player.collide(box)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

  }
  if(player.collide(box2)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

  }
  if(player.collide(box3)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

  }
  if(player.collide(box4)){
    noLoop();
        textSize(30);
    text("Game Over", 800, 40);

  }
  if (coins.length > 0){
  text(score, 870, 70)
  }
   if(keyDown(32)){
   player.setSpeed(0, 0);
   wall5.setSpeed(3,0);
 }

 if (keyDown(87) && keyDown(65)){
    player.setSpeed(4, 225);
  }
  else if(keyDown(87) && keyDown(68)){
    player.setSpeed(4, 315)
  }
  else if(keyDown(32)){
    player.setSpeed(0, 0)
  }
  else if (keyDown(65) && keyDown(83)){
    player.setSpeed(4, 135)
  }
  else if (keyDown(83) && keyDown(68)){
    player.setSpeed(4, 45)
  }
  else if (keyDown(68) && keyDown(87)){
    player.setSpeed(4, 315)
  }
  else if (keyDown(87)){
    player.setSpeed(4, 270);
  }
  else if (keyDown(65)){
    player.setSpeed(4, 180);
  }
  else if (keyDown(83)){
    player.setSpeed(4, 90);
  }
  else if (keyDown(68)){
    player.setSpeed(4, 0);
  }
    else if(keyDown(32)){
    player.setSpeed(0, 0)
  }
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else{ 
    noLoop();
    textSize(30);
    text("Congrats", 820, 40);
  } //the c in congrats is the only one in the center screen. make it so that the middle of congrats is in middle screen
   for (var i = 0; i < box.length; i++) {
    box[i].attractionPoint(.01, 700, 150);
  }
   for (var i = 0; i < box.length; i++) {
    box2[i].attractionPoint(.01, 300, 450);
  }
   for (var i = 0; i < box.length; i++) {
    box3[i].attractionPoint(.01, 300, 150);
  }
   for (var i = 0; i < box.length; i++) {
    box4[i].attractionPoint(.01, 700, 450);
  }
   for (var i = 0; i < wall5.length; i++) {
    wall5[i].attractionPoint(.01, width/2, height/2);
  }
  //Overlap=If player overlaps with object it activates the function "getCoin" adding on to the score
  //makes the coin dissapear
  player.overlap(power, getPower);
  player.overlap(coins, getCoin);
  player.overlap(box);
  player.overlap(wall);
  drawSprites();
}
//Adds on to coin count and removes coin once overlap is set
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
function getPower(player, power) {
  power.remove();
  if(player.collide(power)){
    player.setSpeed(15);
  }
}
}
//  if(keyDown(82)) { location.reload(); }
//var gameState = "startScreen", if (gameState=="startScreen") { // show the start Screen } else if (gameState=="gameInProgress") 
//{ // game code goes here } else if (gameState=="endScreen") { // show endscreen }

//SPAWN COINS ONE BY ONE> WHEN ONE IS COLLECTED, ANOTHER SPAWNS, AFTER 5 COINS, MORE ENIMIES SPAWN. POINT BASED
//Reload button
//power ups
//