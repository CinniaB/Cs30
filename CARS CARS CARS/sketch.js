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

  for(let i = 0; i < 20 ;i++){
    eastBound.push(new Vehicle(width,random(height/2,height/4),0));
  }
  for(let i = 0;i < 20;i++){
    westBound.push(new Vehicle(width,random(height/2,height*3),1));
  }
}
function draw() {
  background(220);
  drawRoad();
  for(let i = 0;i < eastBound.length;i++){
    eastBound[i].action();
  }
  for(let i = 0;i < westBound.length;i++){
    westBound[i].action();
  }
}

function mouseClicked(){
  eastBound.push(new Vehicle(mouseX,mouseY,0));
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
    this.xSpeed = random(1,15);
  }
  SpeedUp(){
    if(this.direction === 0){
      if(random(1,100) >= 100){
        xSpeed += random(-15, -1);
      }
    }
    if(this.direction === 1){
      if(random(1,100) >= 100){
        xSpeed += random(1, 15);
      }
    }
  }

  Speeddown(){
    if(this.direction === 0){
      if(random(1,100) >= 100){
        xSpeed -= random(-3, -1);
      }
    }
    if(this.direction === 1){
      if(random(1,100) >= 100){
        xSpeed -= random(1, 3);
      }
    }
  }

  changeColor(){
    if( random(1,100) >= 100){

      this.c = color(random(255),random(255),random(255));
    }
  }

  move(){
    if(this.direction === 0){
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = 0;
      }
    }
    else if(this.direction === 1){
      this.x -= this.xSpeed;
      if(this.x < 0){
        this.x = width;
      }
    }
  }
  action(){
    this.move();
    this.SpeedUp();
    this.Speeddown();
    this.changeColor();
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
