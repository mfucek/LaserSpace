import { Entity } from "../Entity/entity"

import { entityHierarchy } from "../entityHierarchy";

import { decToHex } from "../../engine/decToHex";


class ParticleEntity extends Entity {
  constructor(optional) {
    super(optional);

    this.type = "Particle";
    this.particleType = optional.particleType || undefined;

    this.initialTime = 0;
    this.duration = optional.duration || 5000;
  }

  checkDecay() {
    return this.initialTime + this.duration - performance.now() <= 0
  }
}

// Shield
// ctx.strokeStyle = "#6accfc";
// player aim
// problem with global a, weird opacity handling with multiple particles



function updateParticles() {

  // entityHierarchy.forEach( obj => {
  let d = 0;
  for (let i = 0; i < entityHierarchy.length; i++) {
    var obj = entityHierarchy[i + d];
    if (obj != undefined) {
      if (obj.type == "Particle") {

        // Checking for decay conditions        
        if (obj.checkDecay()) {
          entityHierarchy.splice(i, 1);
          d += 1;
        }
        
        // Explosion particle handling   
        if (obj.particleType == "explosion") {

            let originalLook = obj.look;
        
            let a = (performance.now() - obj.initialTime) / obj.duration;
            
            // fade
            obj.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)
        
            // scale
            obj.transform.scale = 1 - ( (1 - a) ** 2);
          
        }

        // Zap particle handling
        if (obj.particleType == "zap") {
            let originalLook = obj.look
        
            let a = (performance.now() - obj.initialTime) / obj.duration;
            
            // fade
            obj.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)    
        
            // travel
            let x1 = obj.mesh.vertices[0][0]
            let x2 = obj.mesh.vertices[1][0]
            let y1 = obj.mesh.vertices[0][1]
            let y2 = obj.mesh.vertices[1][1]
            let len = Math.hypot( x1-x2, y1-y2 ) * Camera.zoom / 10 * a ** (1/20)
        
            obj.look.dash = [len, 10000]
        }

      }    
    }
  };






  // // Zap handling
  // particleObjects.zaps.forEach(p => {
  //   originalLook = p.look

  //   a = (time - p.initialTime) / p.duration;
    
  //   p.look.stroke = originalLook.stroke.substring(0,7) + decToHex(a)    

  //   x1 = p.mesh.vertices[0][0]
  //   x2 = p.mesh.vertices[1][0]
  //   y1 = p.mesh.vertices[0][1]
  //   y2 = p.mesh.vertices[1][1]
  //   len = Math.hypot( x1-x2, y1-y2 ) * Camera.zoom / 10 * a ** (1/20)

  //   p.look.dash = [len, 10000]
  // });
}



export { updateParticles, ParticleEntity };