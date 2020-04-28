
var meshBuffer = {}
window.meshBuffer = meshBuffer;

function loadBuffers() {
  console.log("loading models");
  
  // meshbuffer

  // fetch("http://localhost:8080/getModels?name=circle").then(res => res.json()).then((...props) => meshBuffer.circle=props[0])
  // fetch("http://localhost:8080/getModels?name=meteor").then(res => res.json()).then((...props) => meshBuffer.meteor=props[0])
  // fetch("http://localhost:8080/getModels?name=wreck").then(res => res.json()).then((...props) => meshBuffer.wreck=props[0])
  // fetch("http://localhost:8080/getModels?name=capture").then(res => res.json()).then((...props) => meshBuffer.capture=props[0])
  // fetch("http://localhost:8080/getModels?name=spider").then(res => res.json()).then((...props) => meshBuffer.spider=props[0])
  // fetch("http://localhost:8080/getModels?name=ship").then(res => res.json()).then((...props) => meshBuffer.ship=props[0])

  meshBuffer.circle = require('../../../OBJ/circle.json');
  meshBuffer.meteor = require('../../../OBJ/meteor.json');
  meshBuffer.wreck = require('../../../OBJ/wreck.json');
  meshBuffer.mothership = require('../../../OBJ/mothership.json');
  meshBuffer.capture = require('../../../OBJ/capture.json');
  meshBuffer.spider = require('../../../OBJ/spider.json');
  meshBuffer.ship = require('../../../OBJ/ship.json');
}


export { meshBuffer, loadBuffers }