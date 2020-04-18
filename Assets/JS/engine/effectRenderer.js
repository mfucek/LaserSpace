
import { entityHierarchy } from "../objects/entityHierarchy";


function updateAnimations() {
  
  // SPIN
  entityHierarchy.forEach(e => {
    if (e.animations.spin) {
      e.transform.rotation[0] += e.animations.spin;
    }
  });

  // PHASE
  entityHierarchy.forEach(e => {
    if (e.animations.phase) {
      e.look.stroke = e.look.stroke.substring(0,7) + decToHex(
        ((Math.sin(time / 10) + 1)/2) ** 2
      )
    }
  })  
  
}

export { updateAnimations };