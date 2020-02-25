
particlePrefab = {

  collisionExplosion: {
    duration: 20,
    mesh: meshBuffer['circle'],
    look: {
      stroke: "#ffffff"
    }
  },

  zap: {
    x: 0,
    y: 0,
    duration: 10,
    mesh: meshBuffer['circle'],
    look: {
      stroke: "#ffffff",
      closePath: false,
      lineWidth: 5
    }
  },

  create : function(obj, optional) {
    var r = new ParticleEntity( { ...this[obj], ...optional } );    
    r.initialTime = time;
    return r
  }
}