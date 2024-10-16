// Perlin noise
// Cinnia Bidaux
// October tusday the 8th 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectTime = 5
let rectInterval = 0.01
let rectWidth = 5

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  rectTime = 5 + (frameCount / 20);
  background(220);
  staircase();
  flag();
}

function staircase() {
  //use for loop to draw a series of
  //rectangles for use as terrain
  let heighest = 0
  let heightsX = 0
  //sum, height to help create average
  let sumHeights = 0
  for (let x = 0; x <= width; x += rectWidth) {
    noStroke();
    fill(102, 0, 255);
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 0, 500);
    sumHeights += rectHeight;
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInterval;
    if (rectHeight > heighest) {
      heighest = rectHeight;
      heightsX = x;
    }
  }
 //create average
  let average = sumHeights / (width / rectWidth);
  stroke(255, 0, 0);
  line(0, height - average, width, height - average);

  //test
  flag(heightsX, height - heighest);


}

// let smallX = 1
//   let smallY = 1
//   for(let i = 0; i > rectTime; i++){
//     let x = random(0,width)
//     let y = random(0,height)
//     let d = random(20,60)
//     if(d > rectTime){
//       rectTime = d
//       smallX = x
//       smallY = y
//     }
//   }


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectWidth -= 1;
    if (rectWidth < 1) {
      rectWidth = 1;
    }
    background(220);
    staircase();

  }

  if (keyCode === RIGHT_ARROW) {
    //use keys to move rectangles
    rectWidth += 1;
    if (rectWidth <= 1) {
      rectWidth = 1;
    }
    background(220);
    staircase();
  }
}

function flag(x, y) {
  noStroke();
  fill(255, 0, 102);
  rect(x, y, 4, -60, 50, 50, 0, 0);
  triangle(x + 5, y - 40, x + 5, y - 60, x + 50, y - 50);
  print(x, y);
}
