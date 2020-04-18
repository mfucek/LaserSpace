import { meshBuffer } from "../../networking/buffers/meshBuffer"

import { ParticleEntity } from "../Particle/particle"
import { Entity } from "../Entity/entity"

var particlePrefab = {

  collisionExplosion: {
    particleType: "explosion",
    duration: 200,
    mesh: meshBuffer.circle,
    look: {
      stroke: "#ffffff",
      lineWidth: 1
    }
  },

  zap: {
    particleType: "zap",
    x: 0,
    y: 0,
    duration: 200,
    mesh: meshBuffer.circle,
    look: {
      stroke: "#ffffff",
      closePath: false,
      lineWidth: 10,
      shadowColor: "#37CFFF",
      shadowBlur: 20
    }
  },

  create : function(obj, optional) {
    
    var r = new ParticleEntity( { ...this[obj], ...optional } );    
    r.initialTime = performance.now();

    // console.log("Particle created from prefab " + obj);
    
    return r
  }
}

// window.particlePrefab = particlePrefab;

export { particlePrefab };