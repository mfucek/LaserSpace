var zCoeficient = 0.001;

function project(target, camera) {
  zoom = camera.zoom / 10
  
  return {
    x: offset.x + ( target.x - camera.x ) * zoom,
    y: offset.y + ( target.y - camera.y ) * zoom
  }
}

function projectVertex(vertex, camera) {
  zoom = camera.zoom / 10

  tx = vertex[0]
  ty = vertex[1]
  tz = vertex[2]

  xP = offset.x + ( tx - camera.x ) * zoom
  yP = offset.y + ( ty - camera.y ) * zoom

  xZ = (xP - offset.x) * tz * zCoeficient;
  yZ = (yP - offset.y) * tz * zCoeficient;

  return {
    x: xP + xZ,
    y: yP + yZ
  }
}