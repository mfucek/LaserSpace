
ambientObjects = []

ambientObjects.push(
  new Entity({
    x: 2000,
    y: 1500,
    z: -800,
    mesh: {
      vertices: [[0, 0, 0]],
      circles: [[1, 500]],
      fill: "#324ea810",
      stroke: "#324ea840"
    }
  })
);

ambientObjects.push(
  new Entity({
    x: 0,
    y: 0,
    z: -375*2,
    mesh: {
      vertices: [[0, 0, 0]],
      circles: [[1, 1000]],
      fill: "#101010",
      stroke: "#324ea880"
    }
  })
);

test = new Entity();
test.mesh = readJson('Assets/OBJ/spider.json');
test.mesh.stroke = "#ff0000";
test.mesh.fill = "#ff000020";
test.mesh.vertices.push([0,0,0]);
test.mesh.circles = [[253, 120]];
test.y = -200;
test.physics = {
  collisionRadius: 120,
  solid: true
}

ambientObjects.push( test );

ambientObjects.push( Player );