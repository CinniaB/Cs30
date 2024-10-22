// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastBound =[] ;
let westBound =[];
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0;i < eastBound.length;i++){
    eastBound[i].action();
  }
}

function mouseClicked(){
  eastBound.push(new Vehicle(mouseX,mouseY,1));
}

function drawRoad(){
  fill(0,0,0);
  rect(0,height/4,width,height/2);
  noStroke();
  for(let i = 0; i < width; i += 10){
    fill(255, 255, 255 );
    rect(i,height/2,5,2);
  }
}

class Vehicle{
  constructor(x,y,direction){
    this.x = x;
    this.y = y;
    this.type = int(random(2));
    this.c = color(random(255),random(255),random(255));
    this.direction = direction;
    this.xSpeed = 5;
  }
  move(){
    this.x += this.xSpeed;
  }
  action(){
    this.move();
    this.display();
  }
  display(){
    if(this.type === 0){
      this.drawCar();
    }
    else if(this.type === 1){
      this.drawTruck();
    }
  }

  drawCar(){
    fill(this.c);
    rect(this.x,this.y,60,20);
    fill(255,255,255);
    rect(this.x+2,this.y-5,10,5);
    rect(this.x+2,this.y+20,10,5);
    rect(this.x+45,this.y-5,10,5);
    rect(this.x+45,this.y+20,10,5);
  }
  drawTruck(){
    fill(this.c);
    rect(this.x,this.y,60,50);
  }
}