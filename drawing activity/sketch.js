// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let currentback = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  if (currentback === 0) background(180, 255, 248);
  else if (currentback === 1) background(0, 95, 123)
  else if (currentback === 2) background(36, 0, 123)
  else if (currentback === 3) background(47, 0, 58)
    hill()
    morehill()
    righthill()
    grass()
    bunny()
    textSize(20)
    text("Cinnia Bidaux",width*0.85,height*0.95)
   
}




function mousePressed() {
  if (mouseButton === LEFT) {
    currentback = currentback + 1;
    if (currentback > 3) currentback = 0;

  }
}



function bunny() {
  
  rect(CENTER)
  
 fill(209, 99, 34)
  stroke(141, 53, 0)
  ellipse(mouseX-15,mouseY-30,20,50,50,50)
  
  ellipse(mouseX+15,mouseY-30,20,50,50,50)
  
  fill(209, 99, 34)
  noStroke()
  circle(mouseX-5,mouseY+30,55)

  rect(mouseX-47, mouseY+25, 70, 40, 50,50,50,50)

  stroke(141, 53, 0)
  triangle(mouseX-20,mouseY,mouseX+25,mouseY,mouseX+10,mouseY+68)

  stroke(141, 53, 0)
  circle(mouseX-27,mouseY+45,40)

  fill(255, 255, 255)
  ellipse(mouseX-10, mouseY+60 ,20 ,10, 3, 10)
  
  fill(209, 99, 34 )
  noStroke()
  circle(mouseX, mouseY, 50)
  
  
  ellipse(mouseX+4, mouseY+10 ,50 ,30, 40, 80)

  fill(0)
  circle(mouseX-5,mouseY+2,5)

  fill(0)
  circle(mouseX+20,mouseY+2,5)

  if(mouseButton === LEFT){
    mouseX && mouseY === 0
    
  }
    
  
    
}

function grass(){
  fill(0,102,0)
  rect(width/1000,height/2+50,width,height,0,0,0,0)
}

function hill(){
  fill(0,153,0)
 
   circle(width/2-700,height/2+100,800)
}

function morehill(){
  fill(0,204,0)
  circle(width/2-500,height/2+100,600)

}

function righthill(){
  fill(0,153,0)
  circle(width/2+700,height/2+100,800)
}

