
ambientObjects = []

meshBuffer = {
  meteor: readJson('Assets/OBJ/meteor.json'),
  wreck: readJson('Assets/OBJ/wreck.json'),
  ship: readJson('Assets/OBJ/ship.json')
}

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


ambientObjects.push(
  new Entity({
    z: 0,  
    x: 0, 
    y: -200,  
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
  })
);

ambientObjects.push( Player );