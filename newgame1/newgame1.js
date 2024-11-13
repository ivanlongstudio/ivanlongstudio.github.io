var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;

function preload() {
  img = loadImage('images/pidove.jpg');
  img2 = loadImage('images/marill.jpg');
  img3 = loadImage('images/dedenne.jpg');
  img4 = loadImage('images/nihilego.jpg');
  img5 = loadImage('images/darkrai.jpg');
  img6 = loadImage('images/arceus.jpg');
  img7 = loadImage('images/ditto.jpg');
  img8 = loadImage('images/pkmngrass.png');
  img9 = loadImage('images/pkmnpowerplant.jpg');
  img10 = loadImage('images/newmoonisland.png');
  img11 = loadImage('images/pkmnspearpillar.jpg');
  img12 = loadImage('images/ultrawormhole.png');
  img13 = loadImage('images/pkmnchampionroom.png');
  img14 = loadImage('images/whirlislands.png');
}

function setup() {
createCanvas(600,600);
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
  
  text(("Score: " + score),width/2,40);
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
  text("Level 7", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall <ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=17){

  }

  image(img6, ballx, bally, ballSize, ballSize);

 }//end of level seven
