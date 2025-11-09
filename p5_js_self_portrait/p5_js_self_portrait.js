function setup() {
createCanvas(600, 600);
textAlign(CENTER, CENTER);
textSize(50);
noStroke();
}


function draw() {
background(225, 225, 225);

//HAIR
fill(0)
ellipse(300, 300, 250, 360);

//HEAD
fill(255, 230, 200);
ellipse(300, 270, 230, 240);

//GLASSES
fill(255, 0, 0);
circle(250, 270, 80, 80);
fill(255, 230, 200);
circle(250, 270, 70, 70);
fill(255, 0, 0);
rect(285, 270, 30, 5);
fill(255, 0, 0);
circle(350, 270, 80, 80);
fill(255, 230, 200);
circle(350, 270, 70, 70);

//EYES
fill(0);
rect(235, 255, 30, 30);
fill(0);
rect(335, 255, 30, 30);
fill(225, 225, 225);
rect(240, 260, 10, 10);
fill(225, 225, 225);
rect(340, 260, 10, 10);

//NOSE
fill(255, 200, 200);
ellipse(300, 300, 30, 20);

//MOUTH (^ style)
fill(0);
text("^", 300, 350);
textSize(200);

//NECK
fill(255, 230, 200);
rect(273, 380, 60, 60);
fill(255, 230, 200); 
ellipse(200, 515, 50, 170);
fill(255, 230, 200); 
ellipse(400, 515, 50, 170);
fill(255, 200, 200);
rect(200, 430, 200, 200);
fill(255, 230, 200);
circle(303, 430, 60, 60);

//BANGS
fill(0);
ellipse(300, 175, 140, 60);
fill(0);
rect(240, 160, 125, 70);
fill(0);
circle(230, 210, 50, 50);
fill(0);
circle(370, 210, 50, 50);

//LEFT ((style)
text("(", 220, 255);
text("(", 210, 270);
text("(", 200, 275);
text("(", 205, 257);
textSize(200);

//RIGHT ()style)
text(")", 375, 255);
text(")", 385, 270);
text(")", 395, 275);
text(")", 390, 257);
textSize(50);
}
