import { keys } from "../input/keyboard";
import { changeName } from "../networking/communication/socket"

var ui = {
  root: document.querySelector(".ui"),
  
  health: document.querySelector("#health-points"),
  name: document.querySelector("#name"),
  
  level: document.querySelector("#level"),
  experience: document.querySelector("#experience-points"),

  pointA: document.querySelector(".point#a"),
  pointB: document.querySelector(".point#b"),
  pointC: document.querySelector(".point#c"),

  timerFriendly: document.querySelector(".time#a"),
  timerEnemy: document.querySelector(".time#b"),

  overlay: document.querySelector('.overlay'),
  overlayClose: document.querySelector('.close')
}

window.ui = ui;

ui.health.innerHTML = 20 + " / 100 HP"
ui.experience.innerHTML = "press F2 to change name"// 20 + " / 100 XP"
ui.level.innerHTML = 6

console.log("User interface mapped.");

// make overlay closeable
ui.overlayClose.addEventListener("click", function(){
  ui.overlay.classList.add('hidden');
});

var disableInput = false;

function updateInterface() {
  if (!disableInput) {

    if (keys.openTalents) {
      ui.overlay.classList.remove('hidden');
    }
    if (keys.close) {
      ui.overlay.classList.add('hidden');
      document.querySelector("#nameModal").classList.add('hidden');
    }
    if (keys.changeName) {
      keys.changeName = false;

      disableInput = true
      
      var field = document.querySelector("#nameField")      
      document.querySelector("#nameModal").classList.toggle('hidden');      
      field.focus();
      field.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          disableInput = false
          console.log(field.value);
          changeName(field.value);
          field.value = "";
          document.querySelector("#nameModal").classList.toggle('hidden');
        }
      });
      
    }
  }

  var time = 240 - performance.now() / 1000
  ui.timerFriendly.innerHTML = Math.floor(time/60) + ":" + Math.round(time%60);
  ui.timerEnemy.innerHTML = Math.floor((480-time)/60) + ":" + Math.round((240-time)%60);
  
}
  
export { ui, updateInterface };