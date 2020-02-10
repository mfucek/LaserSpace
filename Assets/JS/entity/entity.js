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
    };

    // Look
    this.look = optional.look || {
      fill: undefined,
      stroke: undefined,
      dash: undefined,
      lineWidth: undefined,
    }

    // Transform
    this.transform = optional.transform || {
      scale: 1,
      rotation: [0, 0, 0]
    }

    this.spin = optional.spin || false

    if (this.spin) {
      this.transform.rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2 ]
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
    var optional = optional || {};

    // clone mesh to manipulate
    var mesh2 = JSON.parse(JSON.stringify(this.mesh));

    // scale
    mesh2.vertices.forEach(v => {
      v[0] *= this.transform.scale,
      v[1] *= this.transform.scale,
      v[2] *= this.transform.scale
    });

    // transform (rotation)
    var g = Math.PI / 2
    var rt = {
      x: this.transform.rotation[0] - g,
      y: this.transform.rotation[1] + g,
      z: this.transform.rotation[2] - g,
    };

    mesh2.vertices.forEach(v => {
      var d = Math.hypot(v[0], v[1]);
      var angle = Math.atan2( v[0], v[1]);
      v[0] = d * Math.cos(angle + rt.x);
      v[1] = d * Math.sin(angle + rt.x);
    });
    mesh2.vertices.forEach(v => {
      var d = Math.hypot(v[1], v[2]);
      var angle = Math.atan2( v[1], v[2]);
      v[1] = d * Math.cos(angle + rt.y);
      v[2] = d * Math.sin(angle + rt.y);
    });
    mesh2.vertices.forEach(v => {
      var d = Math.hypot(v[2], v[0]);
      var angle = Math.atan2( v[2], v[0]);
      v[2] = d * Math.cos(angle + rt.z);
      v[0] = d * Math.sin(angle + rt.z);
    });

    // local to global coordinates
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