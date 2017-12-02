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
  textSize(32);
  fill(0, 102, 153);

  var bottomBoundaryX = x - 20;
  var topBoundaryX = x + 20;
  var isNearX = ( mouseX > bottomBoundaryX ) && ( mouseX < topBoundaryX );

  var bottomBoundaryY = y - 20;
  var topBoundaryY = y + 20;
  var isNearY = ( mouseY > bottomBoundaryY ) && ( mouseY < topBoundaryY );

  if (isNearX && isNearY) {
    textSize(32);
    fill(200, 0, 0);
    text("success! ", 20, 200);
  }
}
