this.delay = 0
this.choice = 5

var player;
var MAX_SPEED = 20;
var MAX_SPEED1 = 40;
var score = 0;
var score1 = -1;
var enemy;
var ball;
var wallTop;
var wallBottom;
var game = false;
var homescreen = true;
var back;
function setup() {
  createCanvas(1350,600);
  textSize(70);
  textAlign(CENTER, CENTER);
  player = createSprite(30, height/2, 10, 100);
  player.immovable = true;
  player.addImage(loadImage("https://cfloresasc.github.io/pls/tennis/images.png")) 
  
  enemy = createSprite(width-28, height/2, 10, 300);
  enemy.movable = true;
  enemy.addImage(loadImage("https://cfloresasc.github.io/pls/tennis/images2.png"))
  
  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;
  
  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;
  
  ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED1;
  ball.shapeColor = color(255,255,255);
  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  if (homescreen === true) {
        background(128,188,163);
        textSize(50);
        fill(255,255,255);
        text("Can You Beat Serena Williams?", 675,100);
        text("Press Enter to Play",675,250);
        textSize(25);
        text("(Be careful of her Curve Ball)",675,305);
        textSize(50);
        text("Press Spacebar to Start",675,450);
         if (keyCode === 32){
            homescreen = false
            game = true
        }
       } 
if(game === true){
  background(3,101,100);
  text(score1, 765, 40);
  text(score, 575, 40);
    back = createSprite(675, 300, 675, 300);
  back.addImage(loadImage("https://cfloresasc.github.io/pls/tennis/tennis.jpg"))
  enemy.collide(wallBottom)
  player.position.y = constrain(mouseY, player.height/3, height-player.height/3);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  enemy.attractionPoint(0.2, mouseX, mouseY);
  if(ball.bounce(player)) {
    var swing = (ball.position.y-player.position.y)/100;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }
  
  if(ball.bounce(enemy)) {
    var swing = (ball.position.y-enemy.position.y)/2;
    ball.setSpeed(MAX_SPEED1, ball.getDirection()+swing);
  }
  
  if(ball.position.x<0) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  score1 += 1;
  }
  
  if(ball.position.x>width) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 180);
  score += 1;
  }
  if (score===12){
  text("You win!", width/2, height/2);

  game = false;
  }
  if (score1===12){
  
  text("Rival Wins!", width/2, 160);
  game = false;

  }
  if (game == false){
  	textSize(70);
  	text("Press ENTER for a Rematch");
  	if(keyCode === ENTER){
  		setup();
  	}
  }
 if(millis() > this.delay){
            this.choice = int(random(1,3))
            this.delay = millis() + 1000
        }
        if(this.choice === 1){
            angle = 90
        }
        if(this.choice === 2){
            angle = 270
        }
    	enemy.setSpeed(5,angle);   
   enemy.overlap(wallBottom)

  enemy.collide(wallTop);
  drawSprites();
  }
}
$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

