import { decToHex } from "./decToHex";
import { entityHierarchy } from "../objects/entityHierarchy";

var entityCopy = {}
var entityBegin = {}

window.a = entityBegin;

function storeOriginals(e) {
  // store original attributes
  if (entityCopy[e.uniqueId] == undefined) {
    entityCopy[e.uniqueId] = JSON.parse(JSON.stringify(e))    
  }

  // animation initializations
  if (entityCopy[e.uniqueId] != undefined) {
    if (entityBegin[e.uniqueId] == undefined) {
      // SPIN init - scramble rotation
      if (entityCopy[e.uniqueId].animations.spin != undefined) {
        entityCopy[e.uniqueId].transform.rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2 ]
      }      
    }
  }
  
  // store initial time
  if (entityBegin[e.uniqueId] == undefined) {
    entityBegin[e.uniqueId] = performance.now()
  }

    
}

function updateAnimations() {
  
  entityHierarchy.forEach(e => {
    if (e.animations != undefined){
      storeOriginals(e);

      // SPIN      
      if (e.animations.spin != undefined) {        
        e.transform.rotation[0] = entityCopy[e.uniqueId].transform.rotation[0] + e.animations.spin * performance.now() * e.animations.spin;
      }
    
      // PHASE
      if (e.animations.phase) {
        e.look.stroke = entityCopy[e.uniqueId].look.stroke.substring(0,7) + decToHex(
          ((Math.sin(performance.now() / 100) + 1)/2) ** 2
        )
        
      }

      // POP 
      if (e.animations.pop) {

        let c = entityCopy[e.uniqueId];
        
        
        // console.log(performance.now() - entityBegin[e.uniqueId] - e.animations.pop[0]);
        
        let a = -0.00000000000005;
        let b = 20;
        e.transform.scale = c.transform.scale * ( Math.E ** (a * (performance.now() / 1000 - 5 - entityBegin[e.uniqueId] / 1000) ** b) )
        
      }
    }


  });

  
}

// prebaciti particle efekte ovuda, zap -> draw
// neka efekti budu uvjetovani durationom, ako nema duration, onda loop !!

export { updateAnimations };