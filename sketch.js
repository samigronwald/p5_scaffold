var time = 0;
var x = 0;
var y = 0;
var speed = 3;
var scene = {
  width: 800,
  height: 800,
  center: {
    x: 400,
    y: 400,
  }
};
var ring = {
  radius: 200,
  pulse: {
    radius: 20,
    speed: 10,
  }
};
var crosshair = {
  radius: 50,
};

function setup() {
  noFill();
  createCanvas(scene.width, scene.height);
  background(0, 200, 0)
}

function fade() {
  fill(255, 100, 50, 20)
  rect(0, 0, scene.width, scene.width)
}

function success() {
  clear();
  fill(0, 200, 0)
  rect(0, 0, scene.width, scene.width)
}
function updatePosition() {
  var radiusDelta = Math.cos(time * ring.pulse.speed) * ring.pulse.radius;
  var radius = ring.radius + radiusDelta;
  x = scene.center.x + Math.cos(time) * radius;
  y = scene.center.y + Math.sin(time) * radius;
}

function draw() {
  noFill();
  ellipse(x, y, crosshair.radius, crosshair.radius);
  fade()
  updatePosition();
  tick();
}
function tick() {
  time += .01 * speed;
}

function getDistance(startX, startY, endX, endY) {
  const dx = endX - startX;
  const dy = endY- startY;
  return Math.sqrt(dx*dx + dy*dy);
}


function mousePressed() {
  ellipse(mouseX, mouseY, crosshair.radius, crosshair.radius);

  const distance = getDistance(mouseX, mouseY, x, y);

  if (distance < crosshair.radius) {
    success();
  }
}
