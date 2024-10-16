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
}
class{
  constructor(x,y){
    this.x = x
    this.y = y
    this.c = color(random(255),random(255),random(255))
    this.s = 20
    this.noisex = random(10)
    this.noisey = random(10)
    this.offset = 0.01
    this.NAX_SPEED = 5
  }
  display(){
    fill(this.c)
    noStroke()
    ellipse(this.x,this.y,this.s,this.s)
  }
  move(){
    let xSpeed = map(noise(this.noisex),0,1,-this.MAX_SPEED,this.MAX_SPEED)
    let ySpeed = map(noise(this.noisey),0,1,-this.MAX_SPEED,this.MAX_SPEED)
    this.x += xSpeed
    this.y += ySpeed
    this.noisex += this.offset
    this.noisey += this.offset
}