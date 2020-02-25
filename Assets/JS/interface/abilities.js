
// Input Listener
var keys2 = {
  '1': false,
  '2': false,
  '3': false,
};

var cooldowns = {
  '1': false
}
document.addEventListener('keydown', function(event) {
if (event.keyCode == 49) {
  keys2['2'] = true;
}
if (event.keyCode == 50) {
  keys2['3'] = true;
}
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 49) {
    keys2['2'] = false;
  }
  if (event.keyCode == 50) {
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
    if (keys2[n]) {ab.classList.add('pressed')} else {ab.classList.remove('pressed')}
    if (cooldowns[n]) {ab.classList.add('cooldown')} else {ab.classList.remove('cooldown')}
  });

  
  if (keys2['1']) {
    if (cooldowns['1'] == false) {

      particleObjects.zaps.push(
        particlePrefab.create("zap", {
          mesh: {
            vertices: [ [-Player.x, Player.y ,0], [-Cursor.x, Cursor.y, 0] ],
            faces: [ [0,1] ]
          }
        })
      );
      cooldowns['1'] = true;
      setTimeout( () => {
        cooldowns['1'] = false;
      }, 500);

    }
  }  
}



c.addEventListener('mousedown', function(e) {
  keys2['1'] = true;
})
c.addEventListener('mouseup', function(e) {
  keys2['1'] = false;
});
