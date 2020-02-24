
particlePrefab = {

  collisionExplosion: {
    duration: 20,
    mesh: meshBuffer['circle'],
  },

  create : function(obj, optional) {
    var r = new ParticleEntity( { ...this[obj], ...optional } );

    r.initialTime = time;
    return r
  }
}