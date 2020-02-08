

// Main Cycle

var time = 0
setInterval(() => {
  time += 1



  Player.friction();
  checkMovement();
  Player.speedLimit();
  Player.updatePosition();

  Camera.adjust(Player);

  ambientObjects.forEach(testObject => {
    if (testObject.physics.solid == true && Player != testObject) {
      testCollisions(Player, testObject);
    }
  });

  c.width = c.width; // CLS
  render(ambientObjects, true);

  checkAbilities();

}, 20); 

//////////
// TODO //
//////////

// mesh list loader - later easy switch to API

// entity hierarchy overhaul -> single list
// PREFAB objects
// getMesh rotations
// Mesh (+ modular mesh), Animations 
// entity parent attribute

// *serverside* Entity (following mechanic (equipment))

// IDEA fake player direction that has minimum intensity of x and caches actual direction
// u Entity i u efektima

// overlay effect pipeline
// Shield Absorb
// player aim