function testCollisions(obj1, obj2) {
  if (
    Math.hypot(
      (obj1.x-obj2.x), (obj1.y-obj2.y))
      <=
      obj1.physics.collisionRadius + obj2.physics.collisionRadius
  ) {
    dr = - Math.atan2(obj1.x - obj2.x, obj1.y - obj2.y);
    obj1.direction = 2 * dr - obj1. direction;
    obj1.intensity *= 0.9;

    displace = Math.abs( obj1.physics.collisionRadius + obj2.physics.collisionRadius - Math.hypot( (obj1.x-obj2.x), (obj1.y-obj2.y) ));

    obj1.x += Math.cos(obj1.direction) * (displace + 2);
    obj1.y += Math.sin(obj1.direction) * (displace + 2);
  };
};