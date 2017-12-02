var x = 0;
var y = 0;
var myCanvasWidth = 800;
var myCanvasHeight = 800;

function setup() {
  noFill();
  createCanvas(myCanvasWidth, myCanvasHeight);
  makeBackground();
}

function makeBackground() {
  background(50, 100, 50);
}

function draw() {
  noFill();
  ellipse(x, y, 20, 20);
  x = x + 5;

  var weAreAtTheRightSideOfTheScreen = x > myCanvasWidth;
  if (weAreAtTheRightSideOfTheScreen) {
    y = y + 100;
    x = 0;
  }

  if ( y > myCanvasHeight ) {
    noLoop();
  }
}


function mousePressed() {
  clear();
  makeBackground();
  fill(0, 0, 200);
  ellipse(mouseX, mouseY, 40, 40);

  // var isNearX = (mouseX > (x - 20)) && (mouseX < (x + 20));
  // var isNearY = (mouseY > (y - 20)) && (mouseY < (y + 20));

  // if (isNearX && isNearY) {
  //   textSize(32);
  //   fill(200, 0, 0);
  //   text("success! ", 20, 200);
  // }
}
