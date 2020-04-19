
abilityList = require("../../OBJ/Abilities/abilities.json");
talentList = require("../../OBJ/Abilities/talents.json");


var skillTree = document.querySelector('.skill-tree');


function createRow(ids) {
  var row = document.createElement("div");
  row.classList.add('row');
  
  var a = ""
  ids.forEach(id => {
    a += '<div class="ability-slot">'
    if (id != "") {
      a += `<div class="ability"> <i class="fas fa-` + abilityList[id].icon + `"> </i> </div>`
    }
    a += `</div>
    `
  }); 
  row.innerHTML = a;
  
  return row
}

// <!-- <div class="tooltip">
//   <div class="title"> ARMOR PLATING </div>
//   <div class="subtitle"> REQUIRES PLASMA CORE </div>
//   <div class="description"> Your damage weakens the target, increasing physical damage taken by 5%. </div>
// </div> -->


Object.keys(talentList).forEach(row => {

  var a = []
  for (let col = 1; col <= 8; col++) {
    if (talentList[row][col] != undefined) {
      a.push(talentList[row][col].abilityID);
    } else {
      a.push("");
    }
    
  }skillTree.appendChild(createRow(a));

  // Object.keys(talentList[row]).forEach(col => {
  //   console.log(row, col);
    
  // });  
});

console.log(skillTree);
