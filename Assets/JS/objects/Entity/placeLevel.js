import { entityPrefab } from "./entityPrefabs";
import { particlePrefab } from "../Particle/particlePrefabs";

import { Entity } from "./entity";

import { meshBuffer } from "../../networking/buffers/meshBuffer"

function placeLevel() {
  
  // Planets
  entityHierarchy.push(
    new Entity({
      x: 2000,
      y: 1500,
      z: -60000,
      mesh: {
        vertices: [[0, 0, 0]],
        circles: [[1, 500]],
      },
      look: {
        fill: "#324ea810",
        stroke: "#324ea840"
      }
    })
  );
  entityHierarchy.push(
    new Entity({
      x: 0,
      y: 0,
      z: -20000,
      mesh: {
        vertices: [[0, 0, 0]],
        circles: [[1, 1000]],
      },
      look: {
        fill: "#101010",
        stroke: "#324ea880"
      }
    })
  );

  // Wreck
  entityHierarchy.push(
    new Entity({
      z: -100,
      x: 2000,
      y: -1000,
      mesh: meshBuffer.wreck,
      look: {
        stroke: "#ffffff04",
        fill: "#00000020"
      },
      transform: {
        scale: 20,
        rotation: [0, 0, 0]
      },
      physics: {
        collisionRadius: 120,
        solid: false
      }
    })
  );

  // Meteors
  entityHierarchy.push(
    entityPrefab.create("meteor", {
      x: 0, 
      y: -200
    })
  );
  entityHierarchy.push(
    entityPrefab.create("meteor", {
      x: 400, 
      y: 200
    })
  );
  entityHierarchy.push(
    entityPrefab.create("meteor", {
      x: -200, 
      y: 200
    })
  );
  entityHierarchy.push(
    entityPrefab.create("meteor", {
      x: -510, 
      y: 430
    })
  );
  entityHierarchy.push(
    entityPrefab.create("meteor", {
      x: 500, 
      y: -600
    })
  );

  // Capture Points
  entityHierarchy.push(
    entityPrefab.create("capture", {
      x: -1000, 
      y: 0,
      look: {
        stroke: "#ff0000",
        fill: "#ff000020"
      }
    })
  );
  entityHierarchy.push(
    entityPrefab.create("capture", {
      x: 0, 
      y: 0,
      animations: {
        phase: true
      }
    })
  );
  entityHierarchy.push(
    entityPrefab.create("capture", {
      x: 1000, 
      y: 0,
      look: {
        stroke: "#37CFFF",
        fill: "#37CFFF20"
      }
    })
  );
  
};


export { placeLevel };