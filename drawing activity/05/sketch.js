// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//global var

let currentColor=0; 

let myColor;
let circleSizing = 50
let growimg = false

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color (200,120,210)
}

function draw() {
  background(280)
  switch(currentColor){
    case 0:
      fill(255,0,0); break;
    case 1:
      fill(myColor); break;
    case 2:
      fill(0,50,0); break;
  }
   circle(width/2,height,2, circleSizing)

   if(frameCount %  30 === 0){
    currentColor +=1
    if(currentColor >2) currentColor = 0 
   }
   
}
