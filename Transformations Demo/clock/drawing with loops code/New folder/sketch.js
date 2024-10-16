// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < points.length; i++){
    points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY));
}


class MiniPoint{
  constructor(xpos,ypos){
    this.x = xpos;
    this.y = ypos;
    this.c = color(random(255),random(255),random(255));
    this.s = 20;
    this.noisex = random(10);
    this.noisey = random(10);
    this.offset = 0.01;
    this.MAX_SPEED = 5;
  }

  //class functuion
  display(){
    fill(this.c);
    noStroke();
    ellipse(this.x,this.y,this.s,this.s);

  }

  connectPoints(pointArray){
    for(let i = 0; i < pointArray.length; i++){
      if(this !== pointArray[i]){
        if(dist(this.x,this.y, pointArray[i].getX(),pointArray[i].getY())<100){
          line(this.x,this.y, pointArray[i].getX(),pointArray[i].getY());
        }
      }
    }
  }
  getX(){
    return this.x;}
  getY(){
    return this.y;}

  move(){
    let xSpeed = map(noise(this.noisex),0,1,-this.MAX_SPEED,this.MAX_SPEED);
    let ySpeed = map(noise(this.noisey),0,1,-this.MAX_SPEED,this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noisex += this.offset;
    this.noisey += this.offset;


    if(this.x < 0) {
      this.x += width;}
    if(this.x> width) {
      this.x -= width;}
    if(this.y < 0) {
      this.y += height;}
    if(this.y > height) {
      this.y -= height;}
  }
}