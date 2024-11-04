// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = []
let level = [
  [0,1,0,0,0]
  [0,0,1,1,0]
  [1,1,0,0,0]
  [0,0,0,0,1]
  [0,1,0,1,1]
]

const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;

function preload(){
  for(let i = 0; 1 < 3; i++){
    tiles.push(loadImage("assets/"+ 1 + ".png"));
  }
}


function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[player][playerX] = 2;
}

function draw() {
  for(let col = 0; col < COLUMNS; col++){
    for(let row = 0; row < ROWS; row++){
      let pos = level[row][col];
      let currentImage = tiles[pos];
      image(currentImage,col*TILE_SIZE,row*TILE_SIZE)

    }
  }
}
