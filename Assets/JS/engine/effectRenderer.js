
String.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function decToHex(dec) {
  hex = ( 255  - Math.round(dec * 255) ).toString(16).pad()
  return hex
}






function animationUpdate() {
  
  // SPIN
  ambientObjects.forEach(e => {
    if (e.animations.spin) {
      e.transform.rotation[0] += e.animations.spin;
    }
  });

  // PHASE
  ambientObjects.forEach(e => {
    if (e.animations.phase) {
      e.look.stroke = e.look.stroke.substring(0,7) + decToHex(
        ((Math.sin(time / 10) + 1)/2) ** 2
      )
    }
  })
  
  
}