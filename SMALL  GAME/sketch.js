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

function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new MC(width, height / 2);
  NPCs.push (new NPC(width / 2, height / 2,["hello"]));
  NPCs.push (new NPC(width / 2, height / 2,["talk"]));
  NPCs.push (new NPC(width / 2, height / 2,["jane"]));
  NPCs.push (new NPC(width / 2, height / 2,["kay"]));
  NPCs.push (new NPC(width / 2, height / 2,["milo"]));
  NPCs.push (new NPC(width / 2, height / 2,["jack"]));
  NPCs.push (new NPC(width / 2, height / 2,["jhon"]));
  NPCs.push (new NPC(width / 2, height / 2,["ahhhh"]));
  NPCs.push (new NPC(width / 2, height / 2,["no"]));
  NPCs.push (new NPC(width / 2, height / 2,["father"]));
  NPCs.push (new NPC(width / 2, height / 2,["dand"])); //make more npc to stop from crashing
  testO = new Obstacle(width/2, height/2+110,70,100);
  obstacles.push([testO]);
}

function draw() {
  background(220);
  character.display();
  character.move();
  NPCs[screen].display();
  NPCs[screen].talk();
  testO.display();
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

  checkObs(){
    //left and right
    let left = this.position.x - this.size/2;
    let right = this.position.x + this.size/2;
    let top = this.position.y - this.size/2;
    let bottom = this.position.y + this.size/2;
    for(let o of obstacles [screen]){
      print(right, o.left,o.right);
      if(right > o.left && right < o.right){
        this.position.x -= 6;
      }
      if(left < o.right && left > o.left){
        this.position.x += 6;
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

  talk(){
    text(this.lines[this.currentLine],this.position.x, this.position.y);
  }
}

class Obstacle{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.top = this.y - this.h/2;
    this.bottom = this.y + this.h/2;
    this.left = this.x - this.w/2;
    this.right = this.x + this.w/2;
  }

  display(){
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }
}