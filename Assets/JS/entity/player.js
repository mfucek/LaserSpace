var
  maxSpeed = 10,
  acceleration = 1,
  friction = .2,
  scale = 10;


class PlayerEntity extends Entity {
  constructor() {
    super();
    
    this.mesh = {
      vertices: [[0, 0, 0]],
      circles: [[1, 20]],
      fill: "#ffffff20",
      stroke: "#ffffff"
    };
    
    this.physics = {
      solid: false,
      collisionRadius: 20
    };

  }
}

var Player = new PlayerEntity();
