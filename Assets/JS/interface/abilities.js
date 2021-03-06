import { keys } from "../input/keyboard";
import { mouseButtons } from "../input/mouse";
import { entityHierarchy } from "../objects/entityHierarchy";
import { Entity } from "../objects/Entity/entity";
import { particlePrefab } from "../objects/Particle/particlePrefabs";
import { meshBuffer } from "../networking/buffers/meshBuffer";

import {requestSpell} from "../networking/communication/socketRequest"

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

function showAbility(spellID, args) {
  
  if (spellID == "0") {
    

    entityHierarchy.push(
      particlePrefab.create("zap", {
        mesh: {
          vertices: [ [-args.x1, args.y1 ,0], [-args.x2, args.y2, 0] ],
          faces: [ [0,1] ]
        }
      })
    );

  }

  if (spellID == "1") {
    entityHierarchy.push(
      particlePrefab.create("areaOfEffectFriendly", {
        x: args.x2, 
        y: args.y2
      })
    );
  }

  if (spellID == "2") {
    let Cursor = getCursor();
    
    entityHierarchy.push(
      new Entity({
        z: 0,
        x: Cursor.x,
        y: Cursor.y,
        mesh: meshBuffer.spider,
        look: {
          stroke: "#ff0000",
          fill: "#ff000020"
        },
        transform: {
          scale: 1,
          rotation: [0, 0, 0]
        },
        physics: {
          collisionRadius: 120,
          solid: false
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
    requestSpell(slots[selectedSlot]);

    // set cooldown 
    cooldowns[slots[selectedSlot]] = performance.now() + 500//parseInt(Abilities[slots[selectedSlot]].cooldown);
    // show the cooldown in UI
    document.querySelector('#slot-3').classList.add('cooldown')
    document.querySelector('#slot-2').classList.add('cooldown')
    document.querySelector('#slot-1').classList.add('cooldown')
    setTimeout(function () {      
      document.querySelector('#slot-3').classList.remove('cooldown')
      document.querySelector('#slot-2').classList.remove('cooldown')
      document.querySelector('#slot-1').classList.remove('cooldown')
    }, 500)

  }
};

function updateAbilities() {
  if (keys.a1) {
    selectedSlot = 0
    document.querySelector('#slot-1').classList.add('pressed')
    document.querySelector('#slot-2').classList.remove('pressed')
    document.querySelector('#slot-3').classList.remove('pressed')
  };
  if (keys.a2) {
    selectedSlot = 1
    document.querySelector('#slot-2').classList.add('pressed')
    document.querySelector('#slot-1').classList.remove('pressed')
    document.querySelector('#slot-3').classList.remove('pressed')
  };
  if (keys.a3) {
    selectedSlot = 2
    document.querySelector('#slot-3').classList.add('pressed')
    document.querySelector('#slot-2').classList.remove('pressed')
    document.querySelector('#slot-1').classList.remove('pressed')
  };
  // if (keys.a4) { selectedSlot = 3 };

  if (mouseButtons.left) {
    useSelectedSlot();
  }  
}

export { updateAbilities, showAbility }