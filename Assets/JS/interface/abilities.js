
// Input Listener
var keys2 = {
  '1': false,
  '2': false,
  '3': false,
};
document.addEventListener('keydown', function(event) {
if (event.keyCode == 49) {
  keys2['1'] = true;
  // maxSpeed = 30;
  // acceleration = 2;
  // Player.maxSpeed = 30;
  // Player.acceleration = 2;
}
if (event.keyCode == 50) {
  keys2['2'] = true;
}
if (event.keyCode == 51) {
  keys2['3'] = true;
}
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 49) {
    keys2['1'] = false;
    maxSpeed = 10;
    acceleration = 1;
    Player.maxSpeed = 10;
    Player.acceleration = 1;
  }
  if (event.keyCode == 50) {
    keys2['2'] = false;
  }
  if (event.keyCode == 51) {
    keys2['3'] = false;
  }
});

abilities = document.querySelectorAll('.ability')
console.log(abilities);


function checkAbilities() {
  n = 0;
  abilities.forEach(ab => {
    n += 1;
    // CSS activation
    if (keys2[n]) {ab.classList.add('cooldown')} else {ab.classList.remove('cooldown')}
  });
  
}

