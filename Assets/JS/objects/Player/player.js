
import { entityHierarchy } from "../entityHierarchy"
import { Entity } from "../Entity/entity";
import { Camera } from "../../camera/camera";
import { keys } from "../../input/keyboard";
import { meshBuffer } from "../../networking/buffers/meshBuffer";


class PlayerEntity extends Entity {
  constructor() {
    super();
    this.type = "Player";

    this.mesh = meshBuffer.ship;

    this.transform = {
      scale: 0.5,
      rotation: [0, 0, 0]
    }

    this.look = {
      fill: "#ffffff20",
      stroke: "#ffffff",
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

function initPlayer() {
  entityHierarchy.push( Player );

  // force field
  entityHierarchy.push(
    new Entity({
      mesh: meshBuffer.circle,
      look: {stroke: "#37CFFF20", lineWidth: 1},
      transform: { 
        scale: 2,
        rotation: [0, 0, 0]},
      parent: Player
    })
  );

  Camera.target = Player;

  window.Player = Player;
  console.log('Player added to hierarchy.')  
}

function checkInput() {  
  if (keys.up) {
    Player.addVector(Math.PI * 90 / 180, acceleration);
    looking.addVector( Math.PI, fr );
  }
  if (keys.down) {
    Player.addVector(Math.PI * 270 / 180, acceleration);
    looking.addVector( 0, fr );
  }
  if (keys.left) {
    Player.addVector(Math.PI * 180 / 180, acceleration);
    looking.addVector( Math.PI * 3 / 2, fr );
  }
  if (keys.right) {
    Player.addVector(Math.PI * 0 / 180, acceleration);
    looking.addVector( Math.PI / 2, fr );
  }

  Player.transform.rotation = [looking.direction, 0, 0]
}

function updatePlayer(deltaTime) {
  Player.friction(deltaTime);
  checkInput();
  Player.speedLimit();
  Player.updatePosition(deltaTime);
}



// Create Player Entity
var Player = new PlayerEntity();
Player.x = Math.floor(Math.random() * 2000) - 1000;
Player.y = Math.floor(Math.random() * 2000) - 1000;

// Input fake rotation handling
var acceleration = 1;
var fr = 2;
var looking = {
  intensity: 10,
  direction: Math.PI,
  lastDirection: Math.PI,

  addVector : function(d, i) {
    var x = Math.cos(this.direction) * this.intensity + Math.cos(d) * i;
    var y = Math.sin(this.direction) * this.intensity + Math.sin(d) * i;

    this.direction = Math.round( Math.atan2(y, x) * 100 ) / 100;
    this.intensity = 10
  }
}


export { Player, initPlayer, updatePlayer };