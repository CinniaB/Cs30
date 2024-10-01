// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBakground()
  myForeground()
 
}

function myBakground(){
  //use some loops to creat gradient bakground
  background(200)
}

function myForeground(){
  //draw shapes using For / While loop
  // Var   //cond.   //modification of var
  for(let x = 0; x < mouseX; x +=50){
    fill(0)
    circle(x, height/2 ,40)
    fill(225)
    text(x, x, height/2)
  }
    
  let(starCount)
  while(starCount){
    fill(255,0,0)
    let x = random(0,height);

    starCount++;
  }
}