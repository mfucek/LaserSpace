var Mouse = {
  x: NaN,
  y: NaN
};

var Cursor = new Entity({
  // mesh: readJson('Assets/OBJ/cursor.json')
});
ambientObjects.push(Cursor);

function getMousePosition(c, event) {
  Mouse.x = event.clientX
  Mouse.y = event.clientY
}

function updateCursor(c) {
  const rect = c.getBoundingClientRect();
  Cursor.x = Math.round((Mouse.x - rect.left - c.width/2) / Camera.zoom * 10 + Camera.x);
  Cursor.y = Math.round(-(Mouse.y - rect.top - c.height/2) / Camera.zoom * 10 + Camera.y);
}

c.addEventListener("mousemove", function (e) {
  getMousePosition(c, e)
}, false);



// TEST MOUSE OBJECT ADDING

c.addEventListener('mousedown', function(e) {
  ambientObjects.push(
    entityPrefab.create("meteor", {
      z: 0,  
      x: Cursor.x, 
      y: Cursor.y
    })
  );
})