
import { loadBuffers } from "./networking/buffers/meshBuffer"
import { createEntityPrefabs } from "./objects/Entity/entityPrefabs"
import { createParticlePrefabs } from "./objects/Particle/particlePrefabs"

import { } from "./interface/canvas";
import { } from "./interface/userInterface";
// import { updateTooltip, initAbilityFunctions } from "./interface/tooltip"

import { render } from "./engine/renderer";
import { Camera } from "./camera/camera";
import { updatePlayer, initPlayer } from "./objects/Player/player";
import { placeLevel } from "./objects/Entity/placeLevel";

import { initMouse } from "./input/mouse";

import { updateAbilities } from "./interface/abilities"
import { } from "./interface/skilltree"
import { updateInterface } from "./interface/userInterface"

import { updatePhysics } from "./objects/Player/physics";
import { updateParticles } from "./objects/Particle/particle";
import { updateAnimations } from "./engine/effectRenderer";

import { } from "./networking/communication/socket"
import { giveInfo } from "./networking/communication/update";


function update(deltaTime) {
  // console.log( deltaTime );

  updateAbilities();
  updateInterface();

  updatePlayer(deltaTime);
  updatePhysics();
  Camera.adjust();
  
  updateAnimations();
  updateParticles();
  
  if (Player.intensity != 0) {
    giveInfo();
  }
}

function loop(timestamp) {
  var deltaTime = performance.now() - lastTime;

  // console.log( "FPS: " + 1000 / deltaTime);
  update(deltaTime);

  render();

  lastTime = performance.now();
  window.requestAnimationFrame(loop);
}

var lastTime = 0;

loadBuffers();

setTimeout(() => {
  console.log(meshBuffer.circle,
    meshBuffer.meteor,
    meshBuffer.wreck,
    meshBuffer.capture,
    meshBuffer.spider,
    meshBuffer.ship);
  
  initPlayer();
  createEntityPrefabs();
  createParticlePrefabs();
  placeLevel();
  
  initMouse();
  
  giveInfo();
  window.requestAnimationFrame(loop);
}, 0);







//

// TODO
// - canvas resize
//   - https://www.sitepoint.com/quick-tip-game-loop-in-javascript/