// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let started = false;
let pos; let vel;
let totalBounces = 0;
function setup() {
  createCanvas(300, 200);
  textSize(30)
  textAlign(CENTER)

  pos = createVector(width/2,height/2);
  vel = createVector(5,3);
  text(totalBounces,width/2,height/2)
  update
}

function updateBall(){
  pos.add(vel)
  

  if(pos.x < 0 ||pos.x > width){
    totalBounces++
    vel.x*= -1
  }
  if(pos.y < 0||pos.y > height){
    totalBounces++
    vel.x*= -1
  }
  circle(pos.x,pos.y,10)
}

function draw() {
  background(220);
  if(started === false){
    text("click to begin",width/2,height/2);
    if(mouseIsPressed){
      started === true
    }
    else
  }
}
