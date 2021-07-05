let xoff = 0.0;
let yoff = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(150, 150, 255);
  noStroke();
  textSize(40);
  textAlign(CENTER, CENTER);

  frameRate(15);
  
}

function draw() {
  background(0, 50);
  
  xoff = xoff + 0.01;
  yoff = yoff + 0.01;
  let n = width*xoff;
  let n2 = height*yoff;
  
  text("CLASS IS IN SESSION", width/2, height/2);
  
  let x2 = floor(random(width));
  let y2 = floor(random(height));
  let w = floor(random(width/2));
  let h = floor(random(height/2));
  
  copy(x2, y2, w, h, w, h, w, h);

}