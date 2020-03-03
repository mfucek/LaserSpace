var interface = {
  health: document.querySelector("#health-points"),
  name: document.querySelector("#name"),
  level: document.querySelector("#level"),
  experience: document.querySelector("#experience-points"),
  pointA: document.querySelector(".point#a"),
  pointB: document.querySelector(".point#b"),
  pointC: document.querySelector(".point#c"),
  timerFriendly: document.querySelector(".time#b"),
  timerEnemy: document.querySelector(".time#b"),
}



interface.health.innerHTML = 20 + " / 100 HP"
interface.experience.innerHTML = 20 + " / 100 XP"
interface.level.innerHTML = 6