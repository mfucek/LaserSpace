class Entity {
  constructor(optional) {
    var optional = optional || {};

    // Position
    this.x = optional.x || 0;
    this.y = optional.y || 0;
    this.z = optional.z || 0;
  
    // Dynamics
    this.direction = optional.direction || Math.PI / 2; // 0-360
    this.intensity = optional.intensity || 0;  
    this.maxSpeed = optional.maxSpeed || 10;
    this.frictionIntensity = .2;

    // Mesh
    this.mesh = optional.mesh || {
      vertices: [[0,0,0]],
      circles: [[1, 10]],
      fill: undefined,
      stroke: undefined
    };

    // Look
    this.look = optional.look || {
      fill: undefined,
      stroke: undefined
    }

    // Physics
    this.physics = optional.physics || {
      // mass: 1,
      solid: false,
      collisionRadius: 0,
    };
    // make physics object
  }

  // MESH RELATED
  getMesh(optional) {
    // TRANSFORMS - translate, rotate
    // REFERENCE (memory optimizations) from MESH list
    var optional = optional || {};

    var mesh2 = JSON.parse(JSON.stringify(this.mesh));
    mesh2.vertices.forEach(v => {
      v[0] += this.x;
      v[1] += this.y;
      v[2] += this.z;      
    });
    // console.log(mesh2.vertices[0]);
    return mesh2;
  }

  // PHYSICS DYNAMICS

  // NON PSYSICS DYNAMICS
  addVector(d, i) {
    var x = Math.cos(this.direction) * this.intensity + Math.cos(d) * i;
    var y = Math.sin(this.direction) * this.intensity + Math.sin(d) * i;

    this.direction = Math.atan2(y, x);
    this.intensity = Math.round( Math.hypot(x, y) * 10) / 10;
  }

  updatePosition() {
    this.x += Math.cos(this.direction) * this.intensity;
    this.y += Math.sin(this.direction) * this.intensity;
  }

  speedLimit() {
    if (this.intensity > this.maxSpeed) {
      this.intensity = this.maxSpeed;
    }
  }

  friction() {
    if (this.intensity > 0) {
      this.intensity = this.intensity - this.frictionIntensity;
    }
    if (Math.abs(this.intensity) < 0.1) {
      this.intensity = 0;
    }
  }
};


var testEntity = new Entity();