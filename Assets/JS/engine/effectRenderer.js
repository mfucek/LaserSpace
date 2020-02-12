
// overlay effect pipeline
// particle effects
// Shield
// ctx.strokeStyle = "#6accfc";
// Impact 
// player aim

// particle decay

particleObjects = []

function particleDecay() {
  d = 0;
  for (let i = 0; i < particleObjects.length; i++) {
    p = particleObjects[i + d];
    if (p.duration != 0 & p.initialTime + p.duration < time) {      
      particleObjects.splice(i, 1);
      d += 1;
    }    
  }
}

particleObjects.push(
  new ParticleEntity()
)