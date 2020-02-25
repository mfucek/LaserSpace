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
      collisionRadius: 40
    };

    this.maxSpeed = 20;
    this.frictionIntensity = .5;

    // this.label = "[ Player ]"
  }
}

var Player = new PlayerEntity();
Player.x = Math.floor(Math.random() * 2000) - 1000;
Player.y = Math.floor(Math.random() * 2000) - 1000;
Camera.target = Player;