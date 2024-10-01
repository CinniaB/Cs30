// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectTime = 5
let rectInterval = 0.01

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  staircase()
}

function staircase(){
  //use for loop to draw a series of
  //rectangles for use as terrain
  randomSeed(1)
  let rectWidth = 5
  for(let x = 0; x <= width; x += rectWidth){
    noFill()
    let rectHeight = random(50,500)
    rect(x,height,rectWidth,-rectHeight)
    rectTime += rectInterval
  }
}