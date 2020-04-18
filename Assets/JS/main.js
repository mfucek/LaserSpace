import { } from "./interface/canvas";
import { } from "./interface/userInterface";
import { updateTooltip, initAbilityFunctions } from "./interface/tooltip"

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


function update(deltaTime) {
  // console.log( deltaTime );

  updateAbilities();
  updateInterface();

  updatePlayer(deltaTime);
  updatePhysics();
  Camera.adjust();

  
  updateAnimations();

  updateParticles();
  
}

function loop(timestamp) {
  var deltaTime = performance.now() - lastTime;

  // console.log( 1000 / deltaTime);
  

  update(deltaTime);

  render();

  lastTime = performance.now();
  window.requestAnimationFrame(loop);
}

initPlayer();
placeLevel();

initMouse();

var lastTime = 0;
window.requestAnimationFrame(loop);



//

// TODO
// - canvas resize
//   - https://www.sitepoint.com/quick-tip-game-loop-in-javascript/