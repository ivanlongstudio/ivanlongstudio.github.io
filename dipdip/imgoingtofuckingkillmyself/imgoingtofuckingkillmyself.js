var img;
var img2;
var initials ='il'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var x = 0;
 var y = 0;
 var px = 0;
 var py = 0;
 var easing = 0.05;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('images/windows.png');
  img2 = loadImage('images/tipsfedora.jpg');
  img3 = loadImage('images/sus.png');
  img4 = loadImage('images/depresso.jpg');
  img5 = loadImage('images/Alice12.png');
  img6 = loadImage('images/taxfraud.jpg');
}

function setup() {
createCanvas(windowWidth, windowHeight);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
  choice = key; // set choice to the key that was pressed
  clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
  newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function

 if (toolChoice == '1' ) {  // first tool
  // find the hue, which is a number from 0 to 360
  const hue = (frameCount * 10) % 360;

  // set the color and brush style
  const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);
  fill(hsbaColor);
  noStroke();

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY);

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2;
  const midY = (mouseY + pmouseY) / 2;

  // draw a circle at the midpoint, with distance as its diameter
  circle(midX, midY, distance);
 
  } else if (toolChoice == '2') { // second tool

  // set the color and brush style
   stroke(157, 243, 244);
  strokeWeight(2);

  // find the speed of the mouse movement
  const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

  // set minimum radius and spray density of spraypaint brush
  const minRadius = 10
  const sprayDensity = 80
 
  // find radius of the spray paint brush and radius squared
  const r = speed + minRadius
  const rSquared = r * r

  // set the number of times we lerp the points in the for loop
  const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
  // find the lerped X and Y coordinates
  const lerpX = lerp(mouseX, pmouseX, i / lerps)
  const lerpY = lerp(mouseY, pmouseY, i / lerps)
    
  // draw a bunch of random points within a circle
  for (let j = 0; j < sprayDensity; j++) {

    // pick a random position within the circle
    const randX = random(-r, r)
    const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

    // draw the random point
    point(lerpX + randX, lerpY + randY)
  }
  }
} else if (toolChoice == '3') { // third tool


stroke(245, 40, 145)
strokeWeight(1)
 var targetX = mouseX;
 x += (targetX - x) * easing;
 var targetY = mouseY;
 y += (targetY - y) * easing;
 var weight = dist(x, y, px, py);
 strokeWeight(weight);
 line(x, y, px, py);
 py = y;
 px = x;
 
  } else if (toolChoice == '4') {
  // set the color and brush style
  fill(101, 15, 54);
  noStroke()
 
  // draw a circle at the current mouse point, with diameter of 50 pixels
  circle(mouseX, mouseY, 50)
  } else if (key == '5') { // this tool calls a function
  stroke(0, 0, 255);
  testbox(120, 247, 143, 0.8);
 
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

  fill(242, 58, 137, 0.8);
  rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '7') {

  fill(124, 108, 155, 0.8);
  rect(mouseX, mouseY, 60, 60);
  } else if (toolChoice == '8') {

  fill(255, 204, 229);
  rect(mouseX, mouseY, 40, 40);
  
  } else if (toolChoice == '0') {
  stroke(0, 0);
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, 200, 150);
  
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
  image(img, mouseX, mouseY, 50, 50); 
  
  } else if (toolChoice == 'o' || toolChoice == 'O') { // g places the image we pre-loaded
  image(img2, mouseX, mouseY, 50, 50);
  
  } else if (toolChoice == '9') { // g places the image we pre-loaded
  image(img3, mouseX, mouseY, 50, 50);
  
  } else if (toolChoice == 'l' || toolChoice == 'L') { // g places the image we pre-loaded
  image(img4, mouseX, mouseY, 50, 50);
  
  } else if (toolChoice == 'u' || toolChoice == 'U') { // g places the image we pre-loaded
  image(img5, mouseX, mouseY, 50, 50);
  
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // g places the image we pre-loaded
  image(img6, mouseX, mouseY, 50, 50);
 }
}
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
  background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
   saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
  saveCanvas(filename, 'jpg');
  key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
 
}
