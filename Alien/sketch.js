// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}



function draw() {
  background(220);
  rectMode(CENTER)

  fill(0, 255, 0)
  noStroke()
  rect(width/2, height/2, 60, 60, 50,50,0,00)

  fill(0)
  circle(width/2-17,height/2,5.5)
  

  fill(0)
  circle(width/2+17, height/2, 5.5)

  fill(0)
  stroke(0)
  line(width/2-10,height/2,width/2+10,height/2)
  rectMode(CORNER)
  
  fill(0,255,0)
  noStroke()
  rect(width/2-30,height/2+30,5,10)
  
  fill(0,255,0)
  noStroke()
  rect(width/2+30, height/2+30, -5,10)
}
