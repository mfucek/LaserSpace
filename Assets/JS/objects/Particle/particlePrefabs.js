import { meshBuffer } from "../../networking/buffers/meshBuffer"

import { ParticleEntity } from "../Particle/particle"
import { Entity } from "../Entity/entity"

var particlePrefab = {
  create : function(obj, optional) {
    
    var r = new ParticleEntity( JSON.parse(JSON.stringify({ ...this[obj], ...optional })) );    
    r.initialTime = performance.now();

    // console.log("Particle created from prefab " + obj);
    
    return r
  }
}

function createParticlePrefabs() {
  particlePrefab.collisionExplosion = {
    particleType: "explosion",
    duration: 200,
    mesh: meshBuffer.circle,
    look: {
      stroke: "#ffffff",
      lineWidth: 1
    }
  }

  particlePrefab.zap = {
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
  }

  particlePrefab.areaOfEffectFriendly = {
    z: -15,
    duration: 10000,
    mesh: meshBuffer.circle,
    look: {
      stroke: "#ffffff",
      fill: "#37CFFF20",
      lineWidth: 4,
      shadowColor: "#37CFFF",
      shadowBlur: 20
    },
    transform: {
      scale: 4,
      rotation: [0,0,0]
    },
    animations: {
      pop: [1000, 100]
    }
  }
}


// window.particlePrefab = particlePrefab;

export { particlePrefab, createParticlePrefabs };