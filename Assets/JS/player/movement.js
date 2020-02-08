var acceleration = 1;



// Input Listener
var keys = {
    'w': false,
    's': false,
    'a': false,
    'd': false,
    'space': false
};
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 87) {
    keys['w'] = true;
  }
  if (event.keyCode == 83) {
    keys['s'] = true;
  }
  if (event.keyCode == 65) {
    keys['a'] = true;
  }
  if (event.keyCode == 68) {
    keys['d'] = true;
  }
  if (event.keyCode == 32) {
    keys['space'] = true;
  }
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 87) {
    keys['w'] = false;
  }
  if (event.keyCode == 83) {
    keys['s'] = false;
  }
  if (event.keyCode == 65) {
    keys['a'] = false;
  }
  if (event.keyCode == 68) {
    keys['d'] = false;
  }
  if (event.keyCode == 32) {
    keys['space'] = false;
  }
});

// FIX COMBINATIONS
// by adding 'decision' vectors get direction, then globally apply the direction
function checkMovement() {
  if (keys['w']) {
    Player.addVector(Math.PI * 270 / 180, this.acceleration);
  }
  if (keys['s']) {
    Player.addVector(Math.PI * 90 / 180, this.acceleration);
  }
  if (keys['a']) {
    Player.addVector(Math.PI * 180 / 180, this.acceleration);
  }
  if (keys['d']) {
    Player.addVector(Math.PI * 0 / 180, this.acceleration);
  }
}

