// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [[ 0,   255,  200,   50,  100],
            [255   ,50  ,150,   250,  0],
            [ 0,    0,   150,   200, 50]];

const NUM_ROWS = 3;
const NUMS_COLS = 5;

let rectWidth, rectHeight;

function renderGrid(){
  for(let x = 0; x < NUMS_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500/NUMS_COLS;
  rectHeight = 300/NUM_ROWS;
}
function getArrayX(){
  return int(mouseX/rectWidth);
}
function getArrayY(){
  return int(mouseY/rectHeight);
}
function draw() {
  background(220);
  renderGrid();
  print(int(mouseX/rectWidth),int(mouseY/rectHeight));
  //if(frameCount%30===0){
    //grid[int(random(NUM_ROWS))][int(random(NUMS_COLS))] = int(random(255))
  //}
}

function mousePressed(){
  if(grid[getArrayY()][getArrayX()] === 0){
    grid[getArrayY()][getArrayX()] =255;
  }
  else{
    grid[getArrayY()][getArrayX()] = 0;
  }
}