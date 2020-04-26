// http://172.20.10.3:3000
// http://192.168.8.101

import {giveInfo} from "./update";
import {entityPrefab} from "../../objects/Entity/entityPrefabs";

import {ui} from "../../interface/userInterface";
import { entityHierarchy } from "../../objects/entityHierarchy";
import { particlePrefab } from "../../objects/Particle/particlePrefabs";


// const socket = io.connect("https://laserspaceserver.herokuapp.com/");
const socket = io.connect("192.168.8.100:3000");

socket.on("connect", e => {
  console.log("connected", e);
});


var playerID = Math.floor(Math.random() * 100000);
var nickname = playerID + "NICK"

ui.name.innerHTML = nickname

var playerList = {};






socket.emit('Login', playerID);
socket.emit('Heartbeat', playerID)

var agg = setInterval(heartbeat, 1000);
function heartbeat() {
  socket.emit('Heartbeat', playerID);
  giveInfo();
}


socket.on("Disconnect", (id) => {
 
  entityHierarchy.push(
    particlePrefab.create("collisionExplosion", {
      x: ( playerList[id].x ),
      y: ( playerList[id].y ),
      // later calculate actual point of collision!
    })
  );
  delete playerList[id]
  console.log(id + " left 😢");
  console.log( playerList );
})



socket.on('Sync', (msg) => { 
  
  Object.entries(msg).forEach(p => {

    // console.log(playerList);
    
    

    // p[0] => id    
    
    if (p[0] != playerID){
      // Sync other players
      if ( playerList[p[0]] != undefined ) {
        
        playerList[ p[0] ].x = p[1].x
        playerList[ p[0] ].y = p[1].y
        
        // // console.log( [p[1].direction, 0, 0] );       
        
        playerList[ p[0] ].transform.rotation = [p[1].direction, 0, 0]

        // // console.log( playerList[ p[0] ].transform.rotation );  

      } else {    
        playerList[ p[0] ] = entityPrefab.create("ship", {
          x: p[1].x,
          y: p[1].y,
          label: p[1].name,
          // direction: p[1].velocity.direction,
          // intensity: p[1].velocity.intensity,
        })
        playerList[ p[0] ].transform.rotation = [p[1].direction, 0, 0]
        console.log( playerList );
        
      }
    } else {
      // Sync this player

      // console.log(p[1].info);

      ui.health.innerHTML = p[1].info.health + " / 100 HP"
      
    }
  });


  
});

// socket.on('Position', (msg) => {
//   console.log('asd');
  
//   if (playerList[msg.playerID]) {
//     otherPlayer[msg.playerID].x = msg.info.x;
//     otherPlayer[msg.playerID].y = msg.info.y;
//   } else {
//     playerList[msg.playerID] = entityPrefab.create("otherPlayer", {
//       x: msg.info.x,
//       y: msg.info.y,
//       z: 0,
//     });
//   }
// });

export { socket, playerID, playerList, nickname }