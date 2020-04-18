import { keys } from "../input/keyboard";
import { mouseButtons } from "../input/mouse";
import { entityHierarchy } from "../objects/entityHierarchy";
import { particlePrefab } from "../objects/Particle/particlePrefabs";

import { getCursor } from "../input/mouse"
import { Player } from "../objects/Player/player"

// var cooldowns = {
//   '1': false
// }
// abilities = document.querySelectorAll('.ability')
// console.log(abilities);


// function checkAbilities() {
//   n = 0;
//   abilities.forEach(ab => {
//     n += 1;
//     // CSS activation
//     if (Input.keyboard[n]) {ab.classList.add('pressed')} else {ab.classList.remove('pressed')}
//     if (cooldowns[n]) {ab.classList.add('cooldown')} else {ab.classList.remove('cooldown')}
//   });

  
//   if (Input.keyboard['1']) {
//     if (cooldowns['1'] == false) {

//       var angle = - Math.atan2( Player.y - Cursor.y, Player.x - Cursor.x )
//       // console.log(angle);
      

//       
      
//       cooldowns['1'] = true;
//       setTimeout( () => {
//         cooldowns['1'] = false;
//       }, 500);

//     }
//   }  
// }

function showAbility(id) {
  if (id == "0") {
    let Cursor = getCursor();
    
      var angle = - Math.atan2( Player.y - Cursor.y, Player.x - Cursor.x )

    entityHierarchy.push(
      particlePrefab.create("zap", {
        mesh: {
          vertices: [ [-Player.x, Player.y ,0], [-Player.x + Math.cos(angle) * 1000, Player.y + Math.sin(angle) * 1000, 0] ],
          faces: [ [0,1] ]
        }
      })
    );

  }
}


// per ability, not slot
var cooldowns = [];

// stores IDs of abilities
var slots = [
  '0',
  '1',
  '2',
  '3'
]

var selectedSlot = 0;

var Abilities = require("../../OBJ/Abilities/abilities.json");

function useSelectedSlot() {
  
  // check if cooldown doesn't exist or is expired
  if ( cooldowns[slots[selectedSlot]] == undefined || performance.now() > cooldowns[slots[selectedSlot]] ) {
    
    // request network to perform spell
    console.log('Requesting to perform', Abilities[slots[selectedSlot]].name);
    
    // (will happen after network confirms - outside of this function)
    console.log('Server request, render', Abilities[slots[selectedSlot]].name);
    
    showAbility(slots[selectedSlot]);

    // set cooldown 
    cooldowns[slots[selectedSlot]] = performance.now() + 500//parseInt(Abilities[slots[selectedSlot]].cooldown);

  }
};

function updateAbilities() {
  if (keys.a1) { selectedSlot = 0 };
  if (keys.a2) { selectedSlot = 1 };
  if (keys.a3) { selectedSlot = 2 };
  if (keys.a4) { selectedSlot = 3 };

  if (mouseButtons.left) {
    useSelectedSlot();
  }  
}

export { updateAbilities }