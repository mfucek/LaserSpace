// http://172.20.10.3:3000
// http://192.168.8.101

import {giveInfo} from "./update";
import {entityPrefab} from "../../objects/Entity/entityPrefabs";

import {ui} from "../../interface/userInterface";
import { entityHierarchy } from "../../objects/entityHierarchy";
import { particlePrefab } from "../../objects/Particle/particlePrefabs";
import { Player } from "../../objects/Player/player";
import { Entity } from "../../objects/Entity/entity";


// const socket = io.connect("https://laserspaceserver.herokuapp.com/");
const socket = io.connect("192.168.8.100:3000");


var playerID = Math.floor(Math.random() * 100000);
var nickname = "Guest" + playerID

// var spawnPoint = entityPrefab.create("spawnPoint", {
//   x: Player.spawnCoordinates.x,
//   y: Player.spawnCoordinates.y
// });
// entityHierarchy.push(spawnPoint);;


socket.on("connect", e => {
  console.log("connected", e);
  ui.name.innerHTML = nickname

  socket.emit('Login', playerID);
  socket.emit('Heartbeat', playerID)
  
  setInterval(heartbeat, 1000);
  function heartbeat() {
    socket.emit('Heartbeat', playerID);
    giveInfo();
  }
});


function changeName(newName) {
  nickname = newName
  ui.name.innerHTML = nickname
  Player.nickname = nickname    
}


var playerList = {};








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

setInterval(function () {
  // console.log(socket.disconnected);
  
  if (socket.disconnected) {
    ui.name.innerHTML = "Disconnected..."
  }
}, 1000)

socket.on('CommandSync', (msg) => {  
  if (msg.playerID == playerID) {    
    msg.attrs.forEach( attr => {
      Player[attr] = msg.objectInfo[attr]
    })
  }
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
        playerList[ p[0] ].label = p[1].name + "(" + p[1].health + " /\n " + p[1].maxHealth + ")"
        
        // // console.log( [p[1].direction, 0, 0] );       
        
        playerList[ p[0] ].transform.rotation = [p[1].direction, 0, 0]

        // // console.log( playerList[ p[0] ].transform.rotation );  

      } else {    
        playerList[ p[0] ] = entityPrefab.create("ship", {
          x: p[1].x,
          y: p[1].y,
          label: p[1].name,
          physics: {
            solid: true,
            collisionRadius: 200
          }
          // direction: p[1].velocity.direction,
          // intensity: p[1].velocity.intensity,
        })
        playerList[ p[0] ].transform.rotation = [p[1].direction, 0, 0]
        console.log( playerList );
        
      }
    } else {
      // Sync this player

      // console.log(p[1].info);
      // console.log(p[1]);
      
      ui.name.innerHTML = nickname + " (team" + Player.team + ")"
      ui.health.innerHTML = Player.health + " / " + Player.maxHealth + " HP"

      // spawnPoint.x = Player.spawnCoordinates.x,
      // spawnPoint.y = Player.spawnCoordinates.y
          
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

export { socket, playerID, playerList, nickname, changeName }