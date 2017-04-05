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
var homescreen = true;
var game = false;


function setup() {
  createCanvas(1000, 600);
  coins = new Group();
  box = new Group();
  box2 = new Group();
  box3 = new Group();
  box4 = new Group();
  wall = new Group();
  wall2 = new Group();
  wall3 = new Group();
  wall4 = new Group();
  power = new Group();
  game = false
  homescreen = true
  for (var i = 0; i < 10; i++) {
  var b = createSprite(random(20, width-300), random(0, height-300), 10, 10);
  b.shapeColor = color(255,0,255);
  box.add(b);
}

  for (var i = 0; i < 10; i++) {
  var b = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b.shapeColor = color(255,0,255);
  box2.add(b);
}
  for (var i = 0; i < 10; i++) {
  var b = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b.shapeColor = color(255,0,255);
  box3.add(b);
}  for (var i = 0; i < 10; i++) {
  var b = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b.shapeColor = color(255,0,255);
  box4.add(b);
}
 for (var i = 0; i < 10; i++) {
  var b = createSprite(random(20, width-100), random(0, height-100), 5, 5);
  b.shapeColor = color(0,0,255);
  power.add(b);
}


//Coins

  for (var i = 0; i < 20; i++) {
  var c = createSprite(random(20, width-100), random(20, height-100), 10, 10);
  c.shapeColor = color(255,255, 0);
  coins.add(c);
  }

  //Sets the positin of the walls (borders of the field) so that the player cannot escape
  wall4 = createSprite(500, 599, 1000, 1);
  wall4.shapeColor = color(0, 0, 255);
  wall3 = createSprite(1000, 100, 1, 1000);
  wall3.shapeColor = color(0, 0, 255);
  wall2 = createSprite(.5, .5, 1, 2000);
  wall2.shapeColor = color(0, 0, 255);
  wall = createSprite(.5, .5, 2000, 1);
  wall.shapeColor = color(0, 0, 255);
  player = createSprite(width/2,height/2,15,15);
    player.addImage(loadImage("https://wjohnson1.github.io/Olympics/Diving/swimmer.png"))
  coins.shapeColor = color(0,255,0);
}
//This part makes the player move with the keys
function draw(){
// COPY FROM HERE
if (homescreen === true){
  background(0);
  textSize(50);
  fill(255);
  text("Press spacebar to start", 250, 300);
  if (keyCode === 32){
    homescreen = false
    game = true
  }
}
// HERE TOO BUT DONT FORGET TO PUT BRACKET AT THE BOTTOM AS WELL

if (game === true){

    background(0,0,0)
    textSize(50)
    fill(255,255,255)
    text("Press Space To Start", 250, 300)
    background(50);
    textSize(70);
    fill(255,0,0)
    textAlign(CORNER, CORNER);
//Player to collide with only the enemies
//if enemy hits player than game over appears
//bottom wall

  if(player.collide(wall4)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game === false;
  }
  if(player.collide(wall3)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(wall2)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(wall)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(box)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(box2)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(box3)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if(player.collide(box4)){
    noLoop();
    text("Game Over", width/3, height/2.5);
    game = false;
  }
  if (coins.length > 0){
  text(score, width/2, height/2)
  }
  if(keyDown(32)){
  player.setSpeed(0, 0)
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
    text("Congrats", width/3, height/2);
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

  //Overlap=If player overlaps with object it activates the function "getCoin" adding on to the score
  //makes the coin dissapear
  player.overlap(power, getPower);
  player.overlap(coins, getCoin);
  player.overlap(box);
  player.overlap(wall);
  drawSprites();
}

}
//Adds on to coin count and removes coin once overlap is set
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
function getPower(player, power) {
  power.remove();
  if(player.collide(power)){
    player.setSpeed(10);
  }
  function restart(){
    if (game === false && homescreen === false) {
      fill(0)
      textSize(50)
      text("Play Again?", 200, 150)
      textSize(25)
      text("Press R to Restart", 300, 250)
      if (keyCode === 82){
        player.remove()
        box.remove()
        coins.remove()
        setup()
        homescreen = false 
        game = true
        draw();
      }

    }
  }
}
// function die(){
//   updateSprites(false);
//   gameOver = true;
// }
// function newGame(){
//   gameOver = false;
//   updateSprites = true;
// }
// function mousePressed(){
//   if(gameOver)
//     newGame();
// }


//  if(keyDown(82)) { location.reload(); }
//var gameState = "startScreen", if (gameState=="startScreen") { // show the start Screen } else if (gameState=="gameInProgress") 
//{ // game code goes here } else if (gameState=="endScreen") { // show endscreen }

//SPAWN COINS ONE BY ONE> WHEN ONE IS COLLECTED, ANOTHER SPAWNS, AFTER 5 COINS, MORE ENIMIES SPAWN. POINT BASED


// http://p5play.molleindustria.org/examples/index.html?fileName=flappyBird.js