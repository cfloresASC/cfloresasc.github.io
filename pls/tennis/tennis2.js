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
var homescreen = false;
var countrymenu = true;
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
  
  player.shapeColor = enemy.shapeColor = ball.shapeColor = color(255,255,255);
  
  ball.setSpeed(MAX_SPEED, -180);
    usa = createSprite(325,175,25,25)
    usa.addImage(loadImage("https://wjohnson1.github.io/Olympics/usa.png"))
    russia = createSprite(650,175,25,25)
    russia.addImage(loadImage("https://wjohnson1.github.io/Olympics/russia.png"))
    brazil = createSprite(975,175,25,25)
    brazil.addImage(loadImage("https://wjohnson1.github.io/Olympics/brazil.png"))
    china = createSprite(270,325,25,25)
    china.addImage(loadImage("https://wjohnson1.github.io/Olympics/china.png"))
    australia = createSprite(540,325,25,25)
    australia.addImage(loadImage("https://wjohnson1.github.io/Olympics/australia.png"))
    france = createSprite(810,325,25,25)
    france.addImage(loadImage("https://wjohnson1.github.io/Olympics/france.png"))
    germany = createSprite(1080,325,25,25)
    germany.addImage(loadImage("https://wjohnson1.github.io/Olympics/germany.png"))
    greatb = createSprite(325,500,25,25)
    greatb.addImage(loadImage("https://wjohnson1.github.io/Olympics/greatb.png"))
    italy = createSprite(650,500,25,25)
    italy.addImage(loadImage("https://wjohnson1.github.io/Olympics/italy.png")) 
    mexico = createSprite(975,500,25,25)
    mexico.addImage(loadImage("https://wjohnson1.github.io/Olympics/mexico.png")) 
}

function draw() {
if (countrymenu === true) {
        background(123,183,166)
        drawSprites()
        textSize(50)
        text("Press the key under the country you want to play as",670,50)
        textSize(25)
        text("0",320,225)
        text("1",645,225)
        text("2",970,225)
        text("3",265,375)
        text("4",535,375)
        text("5",805,375)
        text("6",1075,375)
        text("7",320,550)
        text("8",645,550)
        text("9",970,550)
        if (keyDown(48)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/usa.png"
        }
        if (keyDown(49)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/russia.png"
        }
        if (keyDown(50)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/brazil.png"
        }
        if (keyDown(51)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/china.png"
        }
        if (keyDown(52)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/australia.png"
        }
        if (keyDown(53)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/france.png"
        }
        if (keyDown(54)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/germany.png"
        }
        if (keyDown(55)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/greatb.png"
        }
        if (keyDown(56)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/italy.png"
        }
        if (keyDown(57)) {
            countrymenu = false
            homescreen = true
            yourteam = "https://cfloresasc.github.io/pls/tennis/mexico.png"
        }                                                                        
    }

  if (homescreen === true) {
        background(128,188,163)
        textSize(50)
        fill(255,255,255)
        text("Can You Beat Serena Williams?", 675,100)
        text("Press Enter to Play",675,250)
        textSize(25)
        text("(Be careful of her Curve Ball)",675,305)
        textSize(50)
        text("Press Spacebar to Start",675,450)
        usa.remove()
        russia.remove()
        brazil.remove()
        china.remove()
        australia.remove()
        france.remove()
        germany.remove()
        greatb.remove()
        italy.remove()
        mexico.remove()
         if (keyCode === 32){
            homescreen = false
            game = true
        }
       } 
if(game === true){
  background(3,101,100);
  text(score1, 765, 40)
  text(score, 575, 40);
  team = createSprite(675,40, 675, 40);
  team.addImage(loadImage(yourteam));
  enemy.collide(wallBottom)
  player.position.y = constrain(mouseY, player.height/3, height-player.height/3);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  enemy.attractionPoint(0.2, mouseX, mouseY)
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
  
  text("Serena Williams Wins!", width/2, 160);
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
     back = createSprite(675, 300, 675, 300)
  back.addImage(loadImage("https://cfloresasc.github.io/pls/tennis/tennis.jpg"))

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

