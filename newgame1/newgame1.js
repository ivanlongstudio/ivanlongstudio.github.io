var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;

function preload() {
  img = loadImage('images/pidove.png');
  img2 = loadImage('images/marill.png');
  img3 = loadImage('images/dedenne.png');
  img4 = loadImage('images/nihilego.png');
  img5 = loadImage('images/darkrai.png');
  img6 = loadImage('images/arceus.png');
  img7 = loadImage('images/ditto.png');
  img8 = loadImage('images/pkmngrass.png');
  img9 = loadImage('images/pkmnpowerplant.jpg');
  img10 = loadImage('images/newmoonisland.png');
  img11 = loadImage('images/pkmnspearpillar.jpg');
  img12 = loadImage('images/ultrawormhole.png');
  img13 = loadImage('images/pkmnchampionroom.png');
  img14 = loadImage('images/whirlislands.png');
  img15 = loadImage('images/pokeball.png');
}

function setup() {
createCanvas(800,800);
textAlign(CENTER);
textSize(20);
 }//end of setup


function draw() {
  background(img8)
    if(gameState == "L1"){
  levelOne();
  }
    if(gameState == "L2"){
  levelTwo();
  }
    if(gameState == "L3"){
  levelThree();
  }
    if(gameState == "L4"){
  levelFour();
  }
    if(gameState == "L5"){
  levelFive();
  }
    if(gameState == "L6"){
  levelSix();
  }
    if(gameState == "L7"){
  levelSeven();
  }
    if(gameState == "Lend"){
  levelEnd();
  }
  text(("Score: " + score),width/2,40);
  
   if (mouseIsPressed === true) {
    cursor('https://ivanlongstudio.github.io/images/pokeball.png', 20, 20);
  } else {
    cursor('https://ivanlongstudio.github.io/images/pokeball.png');
  }

var white = (245, 245, 245);
var black = (8, 8, 8);


 }//end of draw

function levelOne(){
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  //if(distToBall <ballSize/2){
    if(distToBall <ballSize){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=5){
  gameState = "L2";
  }
image(img, ballx, bally, ballSize, ballSize);
  //line(ballx,bally,mouseX,mouseY);
 

 }//end of level one

 function levelTwo(){
   background(img14);
    fill('white');
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=7){
gameState = "L3";
  }

  image(img2, ballx, bally, ballSize, ballSize);

 }//end of level two
 
  function levelThree(){
     background(img9);
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=9){
gameState = "L4";
  }

image(img3, ballx, bally, ballSize, ballSize);

 }//end of level three
 
  function levelFour(){
     background(img12);
  text("Level 4", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=11){
gameState = "L5";
  }

  image(img4, ballx, bally, ballSize, ballSize);

 }//end of level four
   function levelFive(){
     background(img8);
  fill('black');
  text("Level 5", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=13){
gameState = "L6";
  }

  image(img7, ballx, bally, ballSize, ballSize);

 }//end of level five
   function levelSix(){
     background(img10);
  fill('white');
  text("Level 6", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=15){
gameState = "L7";
  }

  image(img5, ballx, bally, ballSize, ballSize);

 }//end of level six
 
   function levelSeven(){
     background(img11);
  fill('white');
  text("Level 7", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=17){
gameState = 'Lend';
  }

  image(img6, ballx, bally, ballSize, ballSize);

 }//end of level seven
 
    function levelEnd(){
     background(img13);
  fill('white');
  text("Victory!", width/2,height-20);
 

 }//end of level end
