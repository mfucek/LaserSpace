class PlayerEntity extends Entity {
  constructor() {
    super();
    
    this.mesh = readJson('Assets/OBJ/ship.json');

    this.transform = {
      scale: 0.5,
      rotation: [0, 0, 0]
    }

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
