var time = 0;
var crosshair = { radius: 50 };
var trail = {
  head: { x: 0, y: 0 },
  nodes: [],
  maxLength: 1564,
}
var speed = 2;
var scene = {
  width: 800,
  height: 800,
  center: { x: 400, y: 400 },
};
var ring = {
  radius: 200,
  pulse: {
    radius: 20,
    speed: 10,
  }
};

function setup() {
  createCanvas(scene.width, scene.height);
  p5.disableFriendlyErrors = true;

}

function draw() {
  updatePosition();
  fade()
  drawFps()
  drawTrail()
  tick();
}

function normalize(min, max, count) {
  const delta = max - min;
  const range = delta / count;
  return num => Math.min(Math.max(range * num, min), max)
}

function drawFps() {
  var fps = frameRate();
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(2), 10, height - 10);
}

function drawTrail() {
  noFill();
  const normColor = normalize(0, 255, trail.nodes.length);
  const normRadius = normalize(0, crosshair.radius, trail.nodes.length);
  trail.nodes.map((node, i) => {
    const red = 255-normColor(i)/8;
    const green = 155 - normColor(i)/2;
    const blue = normColor(i) * Math.cos(i) * .15;
    stroke(red, green, blue);
    drawCircle(node.position, 50 - normRadius(i));
  })
}

function tick() {
  time += .01 * speed;
}

function fade() {
  fill(255, 100, 50, 200)
  rect(0, 0, scene.width, scene.height)
}

function success() {
  fill(0, 200, 0)
  rect(0, 0, scene.width, scene.height)
  reset()
}

function reset() {
  clear();
  trail.nodes = trail.nodes.slice(0,1);
}

function getMouse() {
  return { x: mouseX, y: mouseY };
}

function updatePosition() {
  const radiusDelta = Math.cos(time * ring.pulse.speed) * ring.pulse.radius;
  const radius = ring.radius + radiusDelta;
  trail.head = {
    position: add( scene.center, getCirclePoint(radius, time) ),
  }
  trail.nodes = [trail.head].concat(trail.nodes.slice(0, trail.maxLength))
}

function mousePressed() {
  const mouse = getMouse();
  if (getDistance(mouse, trail.head.position) < crosshair.radius) {
    success();
  } else {
    drawCircle(mouse, crosshair.radius);
  }
}
