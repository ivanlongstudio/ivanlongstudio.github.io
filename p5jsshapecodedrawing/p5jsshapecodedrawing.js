

function setup() {
createCanvas(600, 600);
background(240);

}
function draw() {
  


fill(59,60,54); //hair back
 quad(180, 436, 220, 160, 390, 160, 486, 440);

fill(105,105,105); //body
ellipse(300, 500, 230, 350);


fill(255,218,185); //head
ellipse(300, 300, 250, 250);

fill(59,60,54); //hair front
triangle(347, 250, 392, 172, 300, 147);
triangle(225, 250, 208, 172, 300, 147);
triangle(180, 300, 190, 200, 243, 190);
triangle(420, 300, 430, 250, 380, 185);
triangle(395, 290, 430, 200, 290, 160);
triangle(300, 150, 230, 240, 320, 200);

fill(240);  //mouth
line(250, 358, 350, 358);

fill(240); //eyebrows
line(270, 245, 230, 245);
line(330, 245, 370, 245);

fill(240); //nose
line(300, 280, 300, 310);

fill(16,12,8); //eyes
ellipse(260, 270, 20, 20);
ellipse(340, 270, 20, 20);

//arms
line(500, 450, 413, 500);
line(100, 450, 187, 500);
}
