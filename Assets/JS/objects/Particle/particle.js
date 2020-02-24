
class ParticleEntity extends Entity {
  constructor() {
    super();
    this.initialTime = 0;
    this.duration = 50;

    this.mesh = meshBuffer["circle"]
  }
}


particlePrefab = {

  collisionExplosion: {
    // mesh: meshBuffer["circle"],
    duration: 20,
  },

  create : function(obj, optional) {
    var r = new ParticleEntity( this[obj] );
    r.x = optional.x || 0;
    r.y = optional.y || 0;
    r.z = optional.z || 0;
    r.duration = this[obj].duration
    r.initialTime = time;
    return r
  }
}