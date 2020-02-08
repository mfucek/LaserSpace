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
  FOV = 100

  tx = vertex[0]
  ty = vertex[1]
  tz = -vertex[2] / 10

  xP = ( tx - camera.x ) * zoom
  yP = ( ty - camera.y ) * zoom

  xZ = (xP - offset.x) * tz * zCoeficient;
  yZ = (yP - offset.y) * tz * zCoeficient;

  z = FOV/(FOV + tz)

  return {
    x: offset.x + xP * z,//+ xZ,
    y: offset.y + yP * z//+ yZ
  }
}