var x = 0;
var y = 0;
var myCanvasWidth = 800;
var myCanvasHeight = 800;
var t = 0;
var radius = 100;

function setup() {
  noFill();
  createCanvas(myCanvasWidth, myCanvasHeight);
  makeBackground();
}

function makeBackground() {
  background(0, 200, 0)
}

function fade() {
  fill(255, 100, 50, 20)
  rect(0, 0, 800, 800)
}

function success() {
  clear();
  fill(0, 200, 0)
  rect(0, 0, 800, 800)
}

function draw() {
  noFill();
  ellipse(x, y, 20, 20);
  fade()
  t += 0.1;
  x = 400 + Math.cos(t) * radius;
  y = 400 + Math.sin(t) * radius;

  var weAreAtTheRightSideOfTheScreen = x > myCanvasWidth;
  if (weAreAtTheRightSideOfTheScreen) {
    y = y + 100;
    x = 0;
  }

  if ( y > myCanvasHeight ) {
    noLoop();
  }
}

function getDistance(startX, startY, endX, endY) {
  const dx = endX - startX;
  const dy = endY- startY;
  return Math.sqrt(dx*dx + dy*dy);
}

function mousePressed() {
  // clear();
  // makeBackground();
  fill(0, 0, 200);
  ellipse(mouseX, mouseY, 40, 40);

  const distance = getDistance(mouseX, mouseY, x, y);

  if (distance < 20) {
    textSize(32);
    fill(200, 0, 0);
    text("success! ", 20, 200);
    success();
  }
}
