var player;
var coins;
var score = 0;
var box;
var wall;
function setup() {
  createCanvas(1000, 600);
  coins = new Group();
  box = new Group();
  wall = new Group();
  wall2 = new Group();
  wall3 = new Group();
  wall4 = new Group();
  for (var i = 0; i < 50; i++) {
  var b = createSprite(random(20, width-100), random(0, height-100), 10, 10);
  b.shapeColor = color(255,0,255);
  box.add(b);
}
  for (var i = 0; i < 100; i++) {
  var c = createSprite(random(20, width-100), random(20, height-100), 10, 10);
  c.shapeColor = color(255,255, 0);
  coins.add(c);
  }
  wall4 = createSprite(500, 599, 1000, 1);
  wall4.shapeColor = color(0, 0, 255);
  wall3 = createSprite(1000, 100, 1, 1000);
  wall3.shapeColor = color(0, 0, 255);
  wall2 = createSprite(.5, .5, 1, 2000);
  wall2.shapeColor = color(0, 0, 255);
  wall = createSprite(.5, .5, 2000, 1);
  wall.shapeColor = color(0, 0, 255);
  player = createSprite(width/2,height/2,15,15);
  player.shapeColor = color(255);
  coins.shapeColor = color(0,255,0);
}

function draw(){
	background(50);
	textSize(70);
  fill(255,0,0)
	textAlign(CORNER, CORNER);
  if(player.collide(wall4)){
    noLoop();
    text("Game Over", width/3, height/2.5);
  }
  if(player.collide(wall3)){
    noLoop();
    text("Game Over", width/3, height/2.5);
  }
  if(player.collide(wall2)){
    noLoop();
    text("Game Over", width/3, height/2.5);
  }
  if(player.collide(wall)){
    noLoop();
    text("Game Over", width/3, height/2.5);
  }
  if(player.collide(box)){
  	noLoop();
  	text("Game Over", width/3, height/2.5);
  }
  if (coins.length > 0){
	text(score, width/2, height/2)
  }
  /*if (keyDown(UP_ARROW)){
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
  }*/
  if(keyDown(32)){
    player.setSpeed(0, 0)
  }
  if (keyDown(87)){
  	player.setSpeed(4, 270);
  }
  if (keyDown(65)){
  	player.setSpeed(4, 180);
 }
  if (keyDown(83)){
  	player.setSpeed(4, 90);
  }
  if (keyDown(68)){
  	player.setSpeed(4, 0);
  }
  if (coins.length > 0) {
  	text(score, width/2, height/2);
  }
  else{ 
    noLoop();
  	text("you win", width/2, height/2);
  }
  player.overlap(coins, getCoin);
  player.overlap(box);
  player.overlap(wall);
  drawSprites();
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
 
}
var database = firebase.database().ref();
function sendMessage(){
    var name = $("#name").val();
    var score = $("#score").val();
    database.push({
        'name':name,
        'score':score
    });
    database.on("child_added",function(dataRow){
        //getting raw values
        var row = dataRow.val();
        // Adding to the div
        $("#messageBoard").append("<p>" + row.name + ": " + row.score + "</p>");
    });
}
// add enemy that chases you after you collected 50 coins