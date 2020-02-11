
// Main Cycle

var time = 0
setInterval(() => {
  time += 1


  updateCursor(c)  

  Player.friction();
  checkMovement();
  Player.speedLimit();
  Player.updatePosition();

  Camera.adjust(Player);

  ambientObjects.forEach(e => {
    if (e.physics.solid == true & Player != e) {
      testCollisions(Player, e);
    }
    if (e.spin) {
      e.transform.rotation[0] += 0.005;
    }
  });

  c.width = c.width; // CLS
  render(ambientObjects, false);

  checkAbilities();

}, 20);


// https://playground.babylonjs.com/#QFRJ7K#9
// https://forum.babylonjs.com/t/fps-affects-game-speed-framerate-independence/2419