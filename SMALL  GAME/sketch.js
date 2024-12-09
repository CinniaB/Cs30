// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let character;

function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new MC(width / 2, height / 2);
}

function draw() {
  background(220);
  character.display();
  character.move();
}

function keyPressed(){
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
      this.position.x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      this.position.x += 2;
    }
    this.position.add(this.vel);
    this.vel.add(0, 0.5);
    if (this.position.y >= 600) {
      this.position.y = 600;
      this.vel.y = 0;
      this.jumps = 0; 
    }
  }
  jump() {
    if (keyIsDown(32) === true && this.jumps < 2) {
      this.vel.y = -8;
      this.jumps++;
    }

  }


}
