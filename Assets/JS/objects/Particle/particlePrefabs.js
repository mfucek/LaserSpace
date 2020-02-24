
particlePrefab = {

  collisionExplosion: {
    duration: 20,
    mesh: meshBuffer['circle'],
    look: {
      stroke: "#ff0000"
    }
  },

  create : function(obj, optional) {
    var r = new ParticleEntity( { ...this[obj], ...optional } );
    console.log(this[obj]);
    
    r.initialTime = time;
    return r
  }
}