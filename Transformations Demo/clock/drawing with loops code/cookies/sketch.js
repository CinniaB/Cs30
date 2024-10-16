// intro to objects
// Your Name
// Date\

let myBook = new Book();

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook", "Cinnia", 
    "leatherbound", 515, 1234567891011,
    width * 0.3 )
}

function draw() {
  background(220);
  myBook.display()
}

class Book{
  //1. constructor 
  constructor(title,author,coverType,pages,isbn){
    this.title = title;
    this.author = author;
    this.coverType =coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.x = x;
  }
  //2. claass methods
  printSummary(){
    print(this.title + ",by" + this.author)
    print("lenght: " + this.pages + "pages")
    print("Covertype: " + this.coverType)
    print("ISBN:" + this.isbn)
  }
  display(){
    //visuilize the book based on its proprties
    //width depends on pages (1/10 scales)
    rectMode(CENTER); textAlign(CENTER);
    switch(this.coverType){
      case "softcover":
        fill(250,200,200);
      case "harcover":
        fill(129,255,240);
      case "leatherbound":
        fill(150,100,15);
    }
    rect(this.x, height/2, this.pages/10, 150);
    textSize(20);  fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }
}