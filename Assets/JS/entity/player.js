class PlayerEntity extends Entity {
  constructor() {
    super();
    
    this.mesh = {
      vertices: [[0, 0, 0]],
      circles: [[1, 20]]
    };

    this.look = {
      fill: "#ffffff20",
      stroke: "#ffffff"
    }
    
    this.physics = {
      solid: true,
      collisionRadius: 20
    };

  }
}

var Player = new PlayerEntity();
