var time = 0;
var position = {
  x: 0,
  y: 0,
};
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

function draw() {
  noFill();
  ellipse(position.x, position.y, crosshair.radius, crosshair.radius);
  fade()
  updatePosition();
  tick();
}

function tick() {
  time += .01 * speed;
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

function getMouse() {
  return {
    x: mouseX,
    y: mouseY,
  };
}

function updatePosition() {
  var radiusDelta = Math.cos(time * ring.pulse.speed) * ring.pulse.radius;
  var radius = ring.radius + radiusDelta;
  position = add(
    scene.center,
    getCirclePoint(radius, time)
  );
}

function mousePressed() {
  const mouse = getMouse();

  if (getDistance(mouse, position) < crosshair.radius) {
    success();
  } else {
    drawCircle(mouse, crosshair.radius);
  }
}
