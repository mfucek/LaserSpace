
ambientObjects = []

// Planets
ambientObjects.push(
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
ambientObjects.push(
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
ambientObjects.push(
  new Entity({
    z: 0,
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
ambientObjects.push(
  entityPrefab.create("meteor", {
    z: 0,  
    x: 0, 
    y: -200
  })
);
ambientObjects.push(
  entityPrefab.create("meteor", {
    z: 0,  
    x: 400, 
    y: 200
  })
);
ambientObjects.push(
  entityPrefab.create("meteor", {
    z: 0,  
    x: -200, 
    y: 200
  })
);

// Capture Points
ambientObjects.push(
  new Entity({
    x: 0, 
    y: 0,  
    z: -100,  
    mesh: meshBuffer.capture,
    look: {
      stroke: "#ff0000",
      fill: "#ff000020"
    },
    transform: {
      scale: 1,
      rotation: [0,0,0]
    }
  })
);

ambientObjects.push( Player );