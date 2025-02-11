// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variable
let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
}

function loopReview(){
  for (let x= 0; x < 4; x++){
    for(let y = 0; y < 4; y++){
      print(x,y);
    }
  }
}

function circleDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2)
  let b = abs(y1 - y2)
  let c = sqrt(pow(a,2) + pow(b,2))
  return round (c)
}

function renderGrid(){
  for (let x = 0; x < width; x = x + gridSpacing){
    for (let y = 0;  y < height; y = y + gridSpacing){
     
      let d = circleDistance(x,y,mouseX,mouseY)

      if(d > 150){
        fill(0)
      }

      else {
        fill(200,50,120)
      }
      
      circle(x,y,gridSpacing)
      textSize(gridSpacing/2)
      textAlign(CENTER,CENTER)
      text(d,x,y)

    }
  }
  
}