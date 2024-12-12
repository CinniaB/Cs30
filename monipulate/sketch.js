// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot;

function preload(){
  pilot = loadImage("assets/aviator.png")
}
function setup() {
  createCanvas(pilot.width, pilot.height);
}

function draw() {
  image(pilot,0,0);
  loadPixels();

  for(let i = 0; i < pixels.length; i += 4){
    let a = avgPixel(i);
    setPixelColor(1,a,a,a);
  }


  updatePixels();
}



function avgPixel(pos){
  let sum = pixels[pos] + pixels[pos+1] + pixels[pos+2];
  return sum/3;
}


function setPixelColor(pos, r, g ,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}
