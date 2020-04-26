import {Player} from "../../objects/Player/player";
import {socket, playerID} from "./socket"
import {getCursor} from "../../input/mouse";
import {showAbility} from "../../interface/abilities";

function requestSpell(spellID) {
  
  socket.emit('Request', {
    "playerID": playerID,
    "spellID": spellID,
    "cursor": getCursor()
  }) 

}


socket.on("Spell", (msg) => {
  showAbility(msg.spellID, msg.args)
})


export {requestSpell}