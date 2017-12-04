
function getCirclePoint(radius, angle) {
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  }
}


function getDistance(start, end) {
  console.log('s', start);
  console.log('e', end);
  const delta = sub(end, start);
  return Math.sqrt((delta.x * delta.x) + (delta.y * delta.y));
}

function add(posA, posB) {
  return {
    x: posA.x + posB.x,
    y: posA.y + posB.y,
  }
}
function sub(posA, posB) {
  return {
    x: posA.x - posB.x,
    y: posA.y - posB.y,
  }
}
