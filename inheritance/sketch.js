// multiple files iheritance
// cinnia Bidaux
// dec 6th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i<10; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new LineObject());
    objects.push(new CircleObject(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}

