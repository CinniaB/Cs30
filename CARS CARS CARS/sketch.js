// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let car1; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  car1 = new Vehicle(width/2,height/2,0,0);

}

function draw() {
  background(220);
  drawRoad();
  car1.display();
}

function drawRoad(){
  fill(0,0,0);
  rect(0,height/4,width,height/2);
  noStroke();
}

class Vehicle{
  constructor(x,y,direction,type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.c = color(random(255),random(255),random(255));
    this.direction = direction;
    this.xSpeed = 5;
  }
  display(){
    fill(this.c);
    rect(this.x,this.y,60,20);
    fill(255,255,255)
    rect(this.x+2,this.y+20,10,5);

  }

}