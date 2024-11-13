// fractles
// Cinnia Bidaux
// november the 13th 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  seed = random(100)
}

function draw() {
  background(255);
  random(seed)
  squareFractle(width/2,height/2, width/3)
}

function squareFractle(x,y,len){
  if(len > 10){
    rectMode(CENTER);
    fill(random(255),random(255),random(255));

    push()
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,len);
    pop()

    squareFractle(x - len/2, y - len/2, len/2);
    squareFractle(x + len/2, y + len/2, len/2);
    squareFractle(x - len/2, y + len/2, len/2);
    squareFractle(x + len/2, y - len/2, len/2);
  }
}

function circleFractle(x,y,d){
  if(d>2){
    circle(x,y,d);


    circleFractle(x - d/2,y, d/2);
    circleFractle(x + d/2,y, d/2);
    circleFractle(x,y + d/2, d/2);
  }
}


function cantOr(x,y,len,depth){
  if(depth > 0){
    line(x,y,x+len,y);
    let newY = y + 20;
    cantOr(x,newY,len/3, depth -1);
    cantOr(x+ 2/3*len,newY,len/3, depth-1);
  }
}


function circleIncircle(x, y, d){
  if (d > 10){
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01, 2);
    circleIncircle(x,y,d/den);
  }
}


