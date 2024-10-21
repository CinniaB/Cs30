// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let names = ['Jhone','Jane', 'Stephan'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  names.push('liam');
  console.log(names);
  
  let nameLast = names.pop();
  console.log(names);
  console.log(nameLast);

  let nameFirst = names.shift();
  console.log(names);
  console.log(nameFirst);

  names.push('mistaal');
  names.push('jeniffer');
  names.push('tod');
  names.push('tyler');
  names.push('sam');

  for (n of names){
    console.log(n);

  }
  console.log(random(names));
}

function draw() {
  background(220);
}
