import {Player} from "../../objects/Player/player";
import {socket, playerID, nickname} from "./socket"

function giveInfo() {  

  var info = {
    x: Player.x,
    y: Player.y,
    direction: Player.looking.direction,
    name: nickname,
    velocity: { direction: Player.direction, intensity: Player.intensity }
  } 

  socket.emit('Update', {
    playerID,
    info
  }) 
  
}

export {giveInfo}