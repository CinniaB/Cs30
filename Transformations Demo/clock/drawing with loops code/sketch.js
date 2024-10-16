// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racer1
let racer2
let racer3

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new roundRacer(height/4, 'lightgreen')
  racer2 = new roundRacer(2*height/4, 'lightgreen')
  racer3 = new roundRacer(3*height/4, 'lightgreen')
}

function draw() {
  background(220);
  circle.display
  racer1.display
  racer2.display
  racer3.display
  racer1.move()
  racer2.move()
  racer3.move()
}

class roundRacer{
  constructor(yPos, colour){
    this.xPosition = 0;
    this.yPosition = yPos
    this.speed = random(3,15);
    this.c = colour
  }
  circle.display(){
    fill(this.c)
    noStroke()
    circle(50,50,50)
  }
}