
import { entityHierarchy } from "../entityHierarchy";
import { particlePrefab } from "../Particle/particlePrefabs";
import { playerList } from "../../networking/communication/socket"

function testCollisions(obj1, obj2) {
  if (
    Math.hypot(
      (obj1.x-obj2.x), (obj1.y-obj2.y))
      <=
      obj1.physics.collisionRadius + obj2.physics.collisionRadius
  ) {
    var dr = - Math.atan2(obj1.x - obj2.x, obj1.y - obj2.y);
    obj1.direction = 2 * dr - obj1. direction;
    obj1.intensity *= 0.9;

    var displace = Math.abs( obj1.physics.collisionRadius + obj2.physics.collisionRadius - Math.hypot( (obj1.x-obj2.x), (obj1.y-obj2.y) ));

    obj1.x += Math.cos(obj1.direction) * (displace + 2);
    obj1.y += Math.sin(obj1.direction) * (displace + 2);

    if ( obj1.intensity > 8 ) {
      
      // interface.root.classList.add("shake");
      // setTimeout(() => {
        // interface.root.classList.remove("shake");        
      // }, 500);

      entityHierarchy.push(
        particlePrefab.create("collisionExplosion", {
          x: ( obj1.x + obj2.x ) / 2,
          y: ( obj1.y + obj2.y ) / 2,
          // later calculate actual point of collision!
        })
      );
      
    }
  };
};

function updatePhysics() {
  [...entityHierarchy, ...Object.values(playerList)].forEach(e => {
    if (e.physics.solid == true & Player != e) {
      testCollisions(Player, e);
    }
  });
}

export { updatePhysics }