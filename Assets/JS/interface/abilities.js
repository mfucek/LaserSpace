
var cooldowns = {
  '1': false
}
abilities = document.querySelectorAll('.ability')
console.log(abilities);


function checkAbilities() {
  n = 0;
  abilities.forEach(ab => {
    n += 1;
    // CSS activation
    if (Input.keyboard[n]) {ab.classList.add('pressed')} else {ab.classList.remove('pressed')}
    if (cooldowns[n]) {ab.classList.add('cooldown')} else {ab.classList.remove('cooldown')}
  });

  
  if (Input.keyboard['1']) {
    if (cooldowns['1'] == false) {

      var angle = - Math.atan2( Player.y - Cursor.y, Player.x - Cursor.x )
      console.log(angle);
      

      particleObjects.zaps.push(
        particlePrefab.create("zap", {
          mesh: {
            vertices: [ [-Player.x, Player.y ,0], [-Player.x + Math.cos(angle) * 1000, Player.y + Math.sin(angle) * 1000, 0] ],
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
  Input.keyboard['1'] = true;
})
c.addEventListener('mouseup', function(e) {
  Input.keyboard['1'] = false;
});
