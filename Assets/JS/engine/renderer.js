function render(objects, collisions) {
  
  sW = window.innerWidth / initialWidth;
  sH = window.innerHeight / initialHeight;
  tW = 0//-( window.innerWidth - initialWidth ) / 2;
  tH = 0//-( window.innerHeight - initialHeight ) / 2;
  sQ = Math.max(sW, sH)
  ctx.transform(sH, 0, 0, sW, tW, tW);
  
  (objects).forEach(element => {
    
    e = element.getMesh();

    // CIRCLE HANDLING
    if (e.circles) {    
      e.circles.forEach(circle => {
        // [ vertID, radius ]    
        var p = e.vertices[circle[0]-1];        
        drawCircle(p, [circle[1]], element.look, false);
      });
        
    }

    // FACE HANDLING
    if (e.faces) {       
      e.faces.forEach(face => {         
        drawSegment( mapVertices(face, e.vertices), element.look );
      });  
    }

    // LINE HANDLING
    if (e.lines) {  
      e.lines.forEach(line => { 
        drawSegment( mapVertices(line, e.vertices), element.look );
      });  
    }

    // VERTICE HANDLING
    if (e.vertices) {
      e.vertices.forEach(vert => {
        // drawCircle(vert, 5, "#00ff0040"); 
      })
    }

    // COLLISION RENDERING
    if (collisions & element.physics.solid == true ) {
      drawCircle( [element.x, element.y, element.z], element.physics.collisionRadius + 10, {stroke: "#ff0000"}, true)
    }
  });
}


// TODO dashed circle function render
// treba staviti da se passa look a ne pojedinacno

function drawCircle(vert, size, look) {
  strokeColor = look.stroke;
  fillColor = look.fill;
  dash = look.dash;
  if (dash) {
    ctx.setLineDash([5, 15]);    
  } else {
    ctx.setLineDash([]);    
  }
  ctx.beginPath();
  var p = projectVertex(vert, Camera);
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
  ctx.lineWidth = 1 * Camera.zoom / 10;
  ctx.stroke();  
}

function drawSegment(vertList, look) {
  strokeColor = look.stroke;
  fillColor = look.fill;
  n = 0;  
  ctx.beginPath();  
  vertList.forEach(vert => {
    n += 1;    
    p = projectVertex(vert, Camera);
    if (n == 1) {
      ctx.moveTo( p.x, p.y );
    } else {
      ctx.lineTo( p.x, p.y );
    }
  });
  ctx.closePath();
  ctx.strokeStyle = strokeColor;
  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.closePath();
    ctx.fill();
  }
  ctx.lineWidth = 1 * Camera.zoom / 10;
  ctx.stroke();
}


function mapVertices(referenceList, vertList) {
  newList = []
  referenceList.forEach(element => {
    newList.push( vertList[element] );
  });
  return newList;
}