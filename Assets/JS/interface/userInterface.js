import { keys } from "../input/keyboard";

var ui = {
  root: document.querySelector(".ui"),
  
  health: document.querySelector("#health-points"),
  name: document.querySelector("#name"),
  
  level: document.querySelector("#level"),
  experience: document.querySelector("#experience-points"),

  pointA: document.querySelector(".point#a"),
  pointB: document.querySelector(".point#b"),
  pointC: document.querySelector(".point#c"),

  timerFriendly: document.querySelector(".time#b"),
  timerEnemy: document.querySelector(".time#b"),

  overlay: document.querySelector('.overlay'),
  overlayClose: document.querySelector('.close')
}

window.ui = ui;

ui.health.innerHTML = 20 + " / 100 HP"
ui.experience.innerHTML = 20 + " / 100 XP"
ui.level.innerHTML = 6

console.log("User interface mapped.");

// make overlay closeable
ui.overlayClose.addEventListener("click", function(){
  ui.overlay.classList.add('hidden');
});

function updateInterface() {
  if (keys.openTalents) {
    ui.overlay.classList.remove('hidden');
  }
  if (keys.close) {
    ui.overlay.classList.add('hidden');
  }
}
  
export { ui, updateInterface };