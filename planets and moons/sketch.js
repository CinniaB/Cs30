// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myPlanet;

function setup(){
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw(){
  background(220);
  myPlanet.display();
}







class Planet {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.r = this.s/2;
    this.moons = [];
  }
  display(){
    circle(this.x,this.y,this.r);
    for(let m of this.moons){
      m.update();
    }
  }
  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}


class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 30;
    this.steps = 10;
    this.speed = 5;
  }
  update(){
    this.x += this.speed;
    this.steps--;
    if(this.steps === 0){
      this.steps = 20;
      this.speed *= -1;
    }
    circle(this.x, this.y, this.r);
  }
}


function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX,mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

