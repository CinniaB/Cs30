// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tSize = 40;
let x =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(tSize)
}

function draw() {
  background(220);

  //mouse section
 
  //if(mouseIsPressed) tSize = random (20, 80)


  textSize(tSize);
  text((mouseX + ", " + mouseY),mouseX, mouseY);

  fill(255,0,0)
  circle(width*0.5,height*0.5,100)

  fill(0,255,0)
  x = x + 10
  if(x > width) x = 0
  rect(x, height/2,60)
}



function mousePressed(){
  tSize = random(20,80)
}