var acceleration = 1;

//////////////////////////
// LJEPSE OVO NAPRAVITI //
//////////////////////////
var newDir = 0;
fr = 2;

looking = {
  intensity: 10,
  direction: Math.PI,
  lastDirection: Math.PI,

  addVector : function(d, i) {
    var x = Math.cos(this.direction) * this.intensity + Math.cos(d) * i;
    var y = Math.sin(this.direction) * this.intensity + Math.sin(d) * i;

    this.direction = Math.round( Math.atan2(y, x) * 100 ) / 100;
    this.intensity = 10 // Math.round( Math.hypot(x, y) * 10) / 10;
    // Player.transform.rotation = [0, 0, 0] 
  }
}

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

// var deltaDirection = looking.direction;
// var lastDirection = looking.direction;

// function sigmoid(t) {
//   return 1/(1+Math.pow(Math.E, -t));
// }

function checkMovement() {
  // lastDirection = looking.direction;
  
  if (keys['w']) {
    Player.addVector(Math.PI * 90 / 180, this.acceleration);
    looking.addVector( Math.PI, fr );
  }
  if (keys['s']) {
    Player.addVector(Math.PI * 270 / 180, this.acceleration);
    looking.addVector( 0, fr );
  }
  if (keys['a']) {
    Player.addVector(Math.PI * 180 / 180, this.acceleration);
    looking.addVector( Math.PI * 3 / 2, fr );
  }
  if (keys['d']) {
    Player.addVector(Math.PI * 0 / 180, this.acceleration);
    looking.addVector( Math.PI / 2, fr );
  }

  // deltaDirection = sigmoid( lastDirection - looking.direction   );

  Player.transform.rotation = [looking.direction, 0, 0]
}

