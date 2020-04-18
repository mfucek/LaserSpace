import { Camera } from "../camera/camera";

import { offset } from "../interface/canvas";

var zCoeficient = 0.001;

function project(target) {
  zoom = Camera.zoom / 10
  
  return {
    x: offset.x + ( target.x - Camera.x ) * zoom,
    y: offset.y + ( target.y - Camera.y ) * zoom
  }
}

function projectVertex(vertex) {
  
  var zoom = Camera.zoom / 10

  var tx = vertex[0]
  var ty = -vertex[1]
  var tz = -vertex[2] / 10

  var z = Camera.FOV/(Camera.z + tz)

  var xP = offset.x + ( ( tx - Camera.x ) * zoom ) * z
  var yP = offset.y + ( ( ty + Camera.y ) * zoom ) * z

  return {
    x: xP,
    y: yP
  }
}

export { projectVertex };