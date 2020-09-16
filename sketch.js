
let bugs = []; // array of Yeet objects


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
  for (let i = 0; i < 50; i++) {
    bugs.push(new Yeet());
    background(50, 89, 100);
    
  }
}


function draw() {
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    if ((keyIsPressed) && (key == 'c')){
      background(50, 89, 100);
      }

  }
}

// Yeet class
class Yeet {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.ydiameter = random(10, 30);
    this.speed = 1;
    this.xdirection = 1;
    this.ydirection = 1;
    this.ratio=0
    this.phase=1
    this.jitter=0
    
  }

  move() {
    this.xd = (abs(this.x-mouseX))
    this.yd = (abs(this.y-mouseY))
    this.ad = (this.yd+this.xd)/2
    this.magpull = random(50,70)
    this.magpush = random(50,70)

    //BOUNCES
    if (this.x > (windowWidth)){
      this.xdirection = (this.xdirection)*-1;
      }
    if (this.x < (0)){
      this.xdirection = (this.xdirection)*-1;
      }
    if (this.y < (0)){
      this.ydirection = (this.ydirection)*-1;
      }
    if (this.y > (windowHeight)){
      this.ydirection =(this.ydirection)*-1;
    }
    
    //BEHAVIOR
    if ((keyIsPressed) && (keyCode === UP_ARROW)){
      this.jitter += .05
      } else if (keyCode === DOWN_ARROW) {
        this.jitter -= .05
      }
    if (this.jitter > 10){
     this.jitter=10
    } else if (this.jitter<0){
      this.jitter=0
    }
    this.x += random((-1*this.jitter), this.jitter)
    this.y += random((-1*this.jitter), this.jitter)
    if (mouseIsPressed){
      //Other thing
      if (mouseY < this.y) {
        this.y += this.yd/this.magpush
      }
      if (mouseY > this.y) {
        this.y += (-1*this.yd/this.magpush)
      }
      if (mouseX < this.x) {
        this.x += this.xd/this.magpush
      }
      if (mouseX > this.x) {
        this.x += -1*this.xd/this.magpush
      }
    }
    else {
      //Magnet
      if (mouseY > this.y) {
        this.y += this.yd/this.magpull
      }
      if (mouseY < this.y) {
        this.y += (-1*this.yd/this.magpull)
      }
      if (mouseX > this.x) {
        this.x += this.xd/this.magpull
      }
      if (mouseX < this.x) {
        this.x += -1*this.xd/this.magpull
      }
    }

    
    this.ratio =sin((this.ad)/(.5*windowHeight+.5*windowWidth)*6.3)
    
    
  }

  display() {
    ellipse(this.x, this.y, this.ydiameter, this.ydiameter);
    
    this.from = color(255, 100, 180, 1 * 255);
    this.to = color(255, 234, 53, 1 * 255);
    this.c1 = lerpColor(this.from, this.to, this.ratio);
    this.c2 = lerpColor(this.to, this.from, this.ratio);
    fill(this.c1)
    strokeWeight(.5);
    stroke(this.c2)
  }
}
function keyPressed(){
  if ((keyIsPressed) && (key == 's')){
  saveCanvas('images/01','png');
  }
  }
      

