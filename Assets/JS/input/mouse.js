import { c } from "../interface/canvas"

// MOUSE & CURSOR

var Mouse = {
  x: NaN,
  y: NaN
};

var Cursor = {
  x: NaN,
  y: NaN
}

var mouseButtons = {
}

var mouseMap = {
  'left': 0,
  'right': 2
}




function initMouse() {
  // Update Mouse position
  document.addEventListener("mousemove", function (event) {
    (function getMousePosition(event) {
      Mouse.x = event.clientX;
      Mouse.y = event.clientY;      
      getCursor();
    })(event);
  }, false);

    
  c.addEventListener('mousedown', function(e) {
    Object.keys(mouseMap).forEach( button => {      
      if (event.button == mouseMap[button]) {
        mouseButtons[button] = true;        
      }
    });    
  })

  c.addEventListener('mouseup', function(e) {
    Object.keys(mouseMap).forEach( button => {
      if (event.button == mouseMap[button]) {
        mouseButtons[button] = false;
      }
    });
  });   
}

function getCursor() {
  
  const rect = c.getBoundingClientRect();
  Cursor.x = Math.round((Mouse.x - rect.left - c.width/2) / Camera.zoom * 10 + Camera.x);
  Cursor.y = Math.round(-(Mouse.y - rect.top - c.height/2) / Camera.zoom * 10 + Camera.y);

  return Cursor
}


export { Mouse, initMouse, getCursor, mouseButtons }