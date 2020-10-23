var sec, min, hr, secAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  
  
}

function draw() {
  background(50); 
  sec = second();
  min = minute();
  hr = hour();

  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  push();
    stroke(255, 0, 0);
    strokeWeight(5);
    translate(202, 202);
    rotate(secAngle);
    line(0, 0, 100, 100);
  pop();
  push();
  stroke(0, 255, 0);
  strokeWeight(5);
  translate(202, 202);
    rotate(minAngle);
    line(0, 0, 80, 80);
    pop();
  drawSprites();
}