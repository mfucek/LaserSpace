
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
  zaps: [],
  other: []
}

function particleUpdate() {
  // checking for decay in all type lists
  Object.entries(particleObjects).forEach(particleList => {
  po = particleList[1]      
    d = 0;
    for (let i = 0; i < po.length; i++) {
      p = po[i + d];

      if (p != undefined){

        if (p.duration != 0 & p.initialTime + p.duration < time) {      
          po.splice(i, 1);
          d += 1;
        }  

      }  
    }
  });

  // problem with global a, weird opacity handling with multiple particles

  // Explosion handling
  particleObjects.explosions.forEach(p => {
    originalLook = p.look

    a = (time - p.initialTime) / p.duration;
    
    p.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)

    p.transform.scale = 1 - ( (1 - a) ** 2);
    
  });

  // Zap handling
  particleObjects.zaps.forEach(p => {
    originalLook = p.look

    a = (time - p.initialTime) / p.duration;
    
    p.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)    

    x1 = p.mesh.vertices[0][0]
    x2 = p.mesh.vertices[1][0]
    y1 = p.mesh.vertices[0][1]
    y2 = p.mesh.vertices[1][1]
    len = Math.hypot( x1-x2, y1-y2 ) * Camera.zoom / 10 * a ** (1/20)
    



    p.look.dash = [len, 10000]
  });
}

