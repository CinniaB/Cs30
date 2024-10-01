// drawing challeng
// Cinnia Bidaux
// Sept 13
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rX = 50; let rY = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //moving rectangle

  if (keyIsPressed) { //alt shift f 
    if (key === "a"){   
      rY += 10; //rY = rY +10
    if (rY > height) rY = 0;
    }
  }

  fill(50, 150, 255)
  rect(rX, rY, 70, 25, 10)
}

function KeyPressed(){
  if(keyCode===DOWN_ARROW){
    rY += 100;
  }
  
}
