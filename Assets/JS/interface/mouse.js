var Mouse = {
  x: NaN,
  y: NaN
};


function getCursorPosition(c, event) {
  const rect = c.getBoundingClientRect();
  Mouse.x = Math.round(event.clientX - rect.left + Camera.x - c.width/2);
  Mouse.y = Math.round(event.clientY - rect.top + Camera.y - c.height/2);
  // console.log(Mouse);  
}

c.addEventListener('mousedown', function(e) {
  // getCursorPosition(canvas, e)
})

c.addEventListener("mousemove", function (e) {
  getCursorPosition(c, e)  
}, false);