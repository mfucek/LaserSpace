
ambientObjects = []

ambientObjects.push(
  new Entity({
    x: 2000,
    y: 1500,
    z: -5000,
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
    z: -3000,
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

test = new Entity();
test.y = -200;
test.mesh = readJson('Assets/OBJ/spider.json');
test.mesh.vertices.push([0,0,0]);
test.mesh.circles = [[253, 120]];
test.look = {
  stroke: "#ff0000",
  fill: "#ff000020"
}
test.physics = {
  collisionRadius: 120,
  solid: true
}

ambientObjects.push( test );

ambientObjects.push( Player );