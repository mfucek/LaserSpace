
entityPrefab = {

  meteor: {
    mesh: meshBuffer.meteor,
    look: {
      stroke: "#ffffff08",
      fill: "#ffffff08"
    },
    physics: {
      collisionRadius: 120,
      solid: true
    },
    spin: true
  },
  
  ship: {
    mesh: meshBuffer.ship,
    look: {
      stroke: "#ffffff",
      fill: "#ffffff20"
    },
    transform: {
      scale: 0.5,
      rotation: [0, 0, 0]
    }
  },

  create : function(obj, optional) {
    var r = new Entity( { ...this[obj], ...optional } );    
    return r
  }
}