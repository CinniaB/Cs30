// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let character;
let screen = 0;
let NPCs = [];
let testO;
let obstacles = [];
let back;
let shadeAmount = 300;

function preload(){
  back = loadImage("assets/forest.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new MC(2, height / 2);
  NPCs.push(new NPC(width - 100, height*0.64, ["hello"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["oh you've came back"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["why are you still running"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["your efforts are usless"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["Stop"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["i said Stop"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["STOP"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["You cant escape"]));
  NPCs.push(new NPC(width - 100, height*0.64, ["stop running"]));
  NPCs.push(new NPC(width - 100, height*0.64, [""])); //make more npc to stop from crashing
  NPCs.push(new NPC(width - 100, height*0.64, [""]));
  let ranY = random(50,150);
  o1a = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);//not changed
  ranY = random(50,150);
  o1b = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1c = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1d = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1e = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1f = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1g = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1h = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1j = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1k = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1l = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1m = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1n = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1o = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1p = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1q = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1r = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1s = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1t = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1u = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1v = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1w = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1x = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  ranY = random(50,150);
  o1y = new Obstacle(random(width*0.20,width*0.90), height/ 2 + 160 - ranY/2, 70, ranY);
  obstacles.push([o1a,o1b],[o1c,o1d,o1e],[o1f,o1g],[o1h,o1j,o1k],[o1l,o1m],[o1n,o1o],[o1p,o1q],[o1r,o1s],[o1t,o1u],[o1v,o1w],[o1v,o1w],[o1x,o1y]);
}


function shade(){
  rectMode(CORNER);
  noStroke();
  for(let y = 0; y < shadeAmount; y+=5){
    let t = map(y,0,shadeAmount,255,0);
    fill(0,t);
    rect(0,y,width,5);
  }
  for(let x = 0; x < shadeAmount; x+=5){
    let t = map(x,0,shadeAmount,255,0);
    fill(0,t);
    rect(x,0,5,height);
  }
  for(let y = 0; y < shadeAmount; y+=5){
    let t = map(y,0,shadeAmount,255,0);
    fill(0,t);
    rect(0,height-y,width,5);
  }
  for(let x = 0; x < shadeAmount; x+=5){
    let t = map(x,0,shadeAmount,255,0);
    fill(0,t);
    rect(width-x,0,5,height);
  }
  fill(255);
  stroke(0);
  rectMode(CENTER);

}

function draw() {
  background(220);
  image(back,0,0,width,height);
  shadeAmount = screen*50;
  shade();
  character.display();
  character.move();
  NPCs[screen].display();
  NPCs[screen].talk();
  for(let o of obstacles [screen]){
    o.display();
  }

}

function keyPressed() {
  character.jump();
}

class MC {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.vel = createVector(0, 0);
    this.size = 50;
    this.jumps = 0;
  }

  display() {
    circle(this.position.x, this.position.y, this.size);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) === true) {
      this.position.x -= 6;
      if (this.position.x < 0) {
        if (screen === 0 || screen === 10) { //10 max number of screen also i can change this later
          this.position.x += 6;
        }
        else {
          this.position.x = width;
          screen--;
        }
      }
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      this.position.x += 6;
      if (this.position.x > width) {
        if (screen > 9) { //10 max number of screen also i can change this later
          this.position.x -= 6;
        }
        else {
          this.position.x = 0;
          screen++;
        }
      }
    }

    this.position.add(this.vel);
    this.vel.add(0, 0.5);
    if (this.position.y >= 600) {
      this.position.y = 600;
      this.vel.y = 0;
      this.jumps = 0;
    }
    this.checkObs();
  }

  checkObs() {
    //left and right
    let left = this.position.x - this.size / 2;
    let right = this.position.x + this.size / 2;
    let bottom = this.position.y + this.size / 2;
    for (let o of obstacles[screen]) {
      print(right, o.left, o.right, o.top, bottom);
      if (bottom > o.top + 20) {
        if (right > o.left && right < o.right) {
          this.position.x -= 6;
        }
        else if (left < o.right && left > o.left) {
          this.position.x += 6;
        }
      }
      else if (this.vel.y >= 0 && bottom > o.top && right > o.left && left < o.right) {
        this.position.y = o.top - this.size / 2;
        this.vel.y = +0;
        this.jumps = 0;
      }


    }
  }
  jump() {
    if (keyIsDown(32) === true && this.jumps < 2) {
      this.vel.y = -8;
      this.jumps++;
    }

  }


}

class NPC {
  constructor(x, y, script) {
    this.position = createVector(x, y);
    this.size = 50;
    this.lines = script;
    this.currentLine = 0;
  }
  display() {
    circle(this.position.x, this.position.y, this.size);
  }

  talk() {
    text(this.lines[this.currentLine], this.position.x, this.position.y);
  }
}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.top = this.y - this.h / 2;
    this.bottom = this.y + this.h / 2;
    this.left = this.x - this.w / 2;
    this.right = this.x + this.w / 2;
  }

  display() {
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}