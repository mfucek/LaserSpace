
// Main Cycle

var lastUpdate = Date.now();

var time = 0
setInterval(() => {
  time += 1

  var now = Date.now();
  var deltaTime = now - lastUpdate;
  lastUpdate = now;
  

  // CURSOR
  updateCursor(c);

  // PLAYER MOVEMENT
  Player.friction();
  checkMovement();
  Player.speedLimit();
  Player.updatePosition();

  // CAMERA ADJUSTING
  Camera.adjust(Player);

  // PHYSICS
  ambientObjects.forEach(e => {
    if (e.physics.solid == true & Player != e) {
      testCollisions(Player, e);
    }
  });

  animationUpdate();

  // PARTICLE HANDLING
  particleUpdate();

  // ANIMATION HANDLING
  animation(ambientObjects);

  // RENDERING
  c.width = c.width; // CLS
  render(ambientObjects, false);
  Object.entries(particleObjects).forEach(particleList => {    
    render(particleList[1], false)
  });

  if (Object.entries(otherPlayers).length != 0) {
    // if not only player in server
    // console.log(otherPlayers);
    // Object.entries(otherPlayers)[0][1]
    Object.entries(otherPlayers).forEach(p => {
      render( [ p[1] ] )
    });
        
    // render(otherPlayers, true);

  }

  // INTERFACE
  checkAbilities();

  // NETWORK
  if (time == 1 | Player.intensity > 0) {
    giveInfo();
  }

}, 20);


// TODO
// player names?
// main loop cleanup - too much clutter


// https://playground.babylonjs.com/#QFRJ7K#9
// https://forum.babylonjs.com/t/fps-affects-game-speed-framerate-independence/2419