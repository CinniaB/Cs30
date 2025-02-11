// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let scale = 15;
function setup() {
  createCanvas(500, 500);
  background(255);
}
function draw() {
  background(155)
  drawTree(width/2, height*0.9, 90, 6);
  
}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  // eslint-disable-next-line no-cond-assign
  
  line(x1, y1, x2, y2);
  
}
function drawTree(x1, y1, angle, depth) {
  
  if (depth > 0) {
    strokeWeight(depth*1);
    let den = map(mouseX,0,width,1,50);
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints ofcurrent branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Getshorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle+den, depth-1);
    drawTree(x2, y2, angle-den, depth-1);
    drawTree(x2, y2, angle, depth-1);
    if(depth < 5){
      drawLeaf(x2, y2, depth*(random(15)));
    }

  }
}


function drawLeaf(x,y,d){
  if(d > 0){
    fill(random(255),random(255),random(255));
    circle(x,y,d);
    strokeWeight(2);
    
    


  }
}
function circleIncircle(x, y, d){
  if (d > 10){
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01, 2);
    circleIncircle(x,y,d/den);
  }
}