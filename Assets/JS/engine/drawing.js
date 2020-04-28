import { projectVertex } from "./projection";
import { ctx } from "../interface/canvas";
import { Camera } from "../camera/camera";
import { debug } from "../debug";

// dash ne radi


function drawText(text, vert) {
    var p = projectVertex(vert);
    ctx.font = "12px Fredoka One";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(text, p.x, p.y - 30);
  }
  
  function drawCircle(vert, size, look) {
    var strokeColor = look.stroke;
    var fillColor = look.fill;
    var lineWidth = look.lineWidth || [1];
    ctx.setLineDash(look.dash || []);      
    ctx.beginPath();
    var p = projectVertex(vert);
    ctx.arc(
      p.x,
      p.y,
      size * Camera.zoom / 10,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    if (fillColor) {ctx.fill()}
    ctx.lineWidth = lineWidth * Camera.zoom / 10;
    ctx.stroke();  
  }

  function drawCircleUnzoomed(vert,size,look) {
    var strokeColor = look.stroke;
    var fillColor = look.fill;
    var lineWidth = look.lineWidth || [1];
    ctx.setLineDash(look.dash || []);      
    ctx.beginPath();
    var p = projectVertex(vert);
    ctx.arc(
      p.x,
      p.y,
      size,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    if (fillColor) {ctx.fill()}
    ctx.lineWidth = lineWidth;
    ctx.stroke();  
  }
  
  function drawSegment(vertList, look) {
    var strokeColor = look.stroke;
    var fillColor = look.fill;
    var lineWidth = look.lineWidth || [1];
    var shadowColor = look.shadowColor || undefined;
    var shadowBlur = look.shadowBlur || 0;
    if (debug.noShadows) {
      shadowColor = undefined;
      shadowBlur = undefined;
    }
    ctx.setLineDash(look.dash || []);   
    // TODO opacity handling
    // get current stroke/fill opacity [7,8], median with opacity
    var n = 0;  
    ctx.beginPath();  
    vertList.forEach(vert => {
      n += 1;    
      var p = projectVertex(vert);
      if (n == 1) {
        ctx.moveTo( p.x, p.y );
      } else {
        ctx.lineTo( p.x, p.y );
      }
    });
    if (look.closePath != false) { ctx.closePath(); }
    ctx.strokeStyle = strokeColor;
    if (fillColor) {
      ctx.fillStyle = fillColor;
      if (look.closePath != false) { ctx.closePath(); }
      ctx.fill();
    }
    ctx.lineWidth = lineWidth * Camera.zoom / 10;
    ctx.shadowBlur = shadowBlur * Camera.zoom / 10;
    ctx.shadowColor = shadowColor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  
  
  export { drawCircle, drawSegment, drawText, drawCircleUnzoomed }