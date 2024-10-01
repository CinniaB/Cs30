// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// noise() vs 

let circleTime = 5;
let circleInterval = 0.01; //amount to push clock forward

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
}

function draw() {
  background(220);
  line(width/2,0,width/2,height)
  
  //random
  randomCircle();
  //noise
  noiseCircle();
  staircase()
}

function staircase(){
  //use for loop to draw a series of
  //rectangles for use as terrain
  randomSeed(1)
  let rectWidth = 20
  for(let x = 0; x <= width; x += rectWidth){
    noFill()
    let rectHeight = random(50,500)
    rect(x,height,rectWidth,-rectHeight)
  }
}


function noiseCircle(){
  //draw cicle on screen ising
  //noise() for random values (diameter,then color)
  let cSize = noise(circleTime) //0 - 1
  cSize = map(cSize,0,1,10,255)
  fill(cSize,cSize/2,255-cSize)
  circle(width*0.75,height/2,cSize)
  text(round(cSize),width*0.75,height/2)
  circleTime += circleInterval
}


function randomCircle(){
  let cSize = random(10,255);
  fill(cSize,cSize/2,255-cSize)
  circle(width*0.25,height/2,cSize)
  textAlign(CENTER,CENTER)
  textSize(30)
  text(round(cSize),width*0.25,height/2)
}