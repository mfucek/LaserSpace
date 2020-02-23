
// overlay effect pipeline
// particle effects
// Shield
// ctx.strokeStyle = "#6accfc";
// Impact 
// player aim

///////////////////////////////
String.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}
///////////////////////////////



particleObjects = {
  explosions: [],
  zaps: []
}

particleObjects.explosions.push(
  new ParticleEntity()
)

function particleUpdate() {
  // checking for decay in all type lists
  Object.entries(particleObjects).forEach(particleList => {
  po = particleList[1]      
    d = 0;
    for (let i = 0; i < po.length; i++) {
      p = po[i + d];
      if (p.duration != 0 & p.initialTime + p.duration < time) {      
        po.splice(i, 1);
        d += 1;
      }    
    }
  });

  // Explosion handling
  particleObjects.explosions.forEach(p => {
    a = (time - p.initialTime) / p.duration;
    // opacity falloff
    o = ( 255  - Math.round(a * 255) ).toString(16).pad()
    p.look.stroke = "#ffffff" + o    
    p.transform.scale = 1 - ( (1 - a) ** 2);
    
  });

  // Zap handling
}
