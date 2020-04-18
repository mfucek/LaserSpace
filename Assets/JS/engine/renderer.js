import { entityHierarchy } from "../objects/entityHierarchy";

import { c, ctx, initialHeight, initialWidth } from "../interface/canvas";

import { drawCircle, drawSegment, drawText, drawCircleUnzoomed } from "./drawing";

import { getCursor } from "../input/mouse";

import { debug } from "../debug";

window.collisions = false;

function render() {

  c.width = c.width; // CLS
  
  // FIX THIS!!
  var sW = window.innerWidth / initialWidth;
  var sH = window.innerHeight / initialHeight;
  var tW = 0//-( window.innerWidth - initialWidth ) / 2;
  var tH = 0//-( window.innerHeight - initialHeight ) / 2;
  var sQ = Math.max(sW, sH)
  ctx.transform(sH, 0, 0, sW, tW, tW);
  

  
  var sortedEntityHierarchy = [...entityHierarchy].sort((a, b) => (a.z > b.z) ? 1 : -1);
  (sortedEntityHierarchy).forEach(element => {

    // LABEL HANDLING        
    if (element.label) {      
      if (element.parent != undefined) {
        drawText(element.label, [element.x + element.parent.x, element.y + element.parent.y, element.z + element.parent.z])
      } else {
        drawText(element.label, [element.x, element.y, element.z])
      }
    }
    
    var e = element.getMesh();    

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
    if (debug.physicsBoundary & element.physics.solid == true ) {
      drawCircle( [element.x, element.y, element.z], element.physics.collisionRadius, {stroke: "#ff0000"}, true)
    }
  });

  // CURSOR DRAWING
  var Cursor = getCursor();
  drawCircleUnzoomed( [Cursor.x, Cursor.y, 0], 6, {stroke: "#ffffff"} );
}


function mapVertices(referenceList, vertList) {
  let newList = []
  referenceList.forEach(element => {
    newList.push( vertList[element] );
  });
  return newList;
}


export { render };