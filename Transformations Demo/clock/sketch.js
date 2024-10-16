// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  push()
  translate(width/2,height/2)
  circle(0,0,400)
  for(let i = 0; i <60; i++){
    if(i %5 === 0){
      strokeWeight(4)
      line(140, 0, 190,0)
    }
    else{strokeWeight(1)
      line(150, 0, 180,0)
    }
    rotate(6)
    

  }
  line(200,0,140,0)
  
  pop()
}


