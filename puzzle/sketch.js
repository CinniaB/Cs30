let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let newGrid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  // Initialize newGrid with random values (0 or 255)
  newGrid = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let rowArray = [];
    for (let j = 0; j < NUM_COLS; j++) {
      rowArray.push(int(random(0, 2)) === 0 ? 0 : 255); // Random 0 or 255
    }
    newGrid.push(rowArray);
  }
}

function draw() {
  background(220);
  
  determineActiveSquare();   // figure out which tile the mouse cursor is over
  drawGrid();                // render the current game board to the screen (and the overlay)
  winCondition();
  overlay();
}

function mousePressed() {
  if (keyIsDown(32)) {  // Spacebar key (keyCode: 32)
    // Spacebar is pressed -> Flip 4 squares (current + right + down + diagonal)
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow + 1);
    flip(currentCol + 1, currentRow + 1);
  } else if (keyIsDown(SHIFT) && mouseIsPressed) {  // Shift key is pressed
    // Shift is pressed -> Flip only the currently selected square
    flip(currentCol, currentRow);
  } else {
    // No key pressed -> Flip 5 squares (current + right + left + up + down)
    flip(currentCol, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    newGrid[row][col] = newGrid[row][col] === 0 ? 255 : 0;
  }
}

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(newGrid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() {
  let firstValue = newGrid[0][0];
  let allIdentical = newGrid.every(row => row.every(value => value === firstValue));

  if (allIdentical) {
    textSize(32);
    fill(firstValue === 0 ? 255 : 0);
    textAlign(CENTER, CENTER);
    text("You Win", width / 2, height / 2);
  }
}

function overlay() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  fill(0, 100, 0, 150);
  rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
  rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
  rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
  rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
  rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
}
