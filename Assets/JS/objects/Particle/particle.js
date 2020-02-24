
class ParticleEntity extends Entity {
  constructor(optional) {
    super(optional);

    this.initialTime = 0;
    this.duration = optional.duration || 50;
  }
}




// Shield
// ctx.strokeStyle = "#6accfc";
// player aim




particleObjects = {
  explosions: [],
  zaps: []
}

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
    originalLook = p.look

    a = (time - p.initialTime) / p.duration;
    
    p.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)

    p.transform.scale = 1 - ( (1 - a) ** 2);
    
  });

  // Zap handling
}
