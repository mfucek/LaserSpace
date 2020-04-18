
abilityList = require("../../OBJ/Abilities/abilities.json");


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
//                 <div class="title"> ARMOR PLATING </div>
//                 <div class="subtitle"> REQUIRES PLASMA CORE </div>
//                 <div class="description"> Your damage weakens the target, increasing physical damage taken by 5%. </div>
//               </div> -->



skillTree.appendChild(createRow(["0", "1", "0", "", "0", "1", "0"]));
skillTree.appendChild(createRow(["", "", "", "1", "", "", ""]));
skillTree.appendChild(createRow(["", "", "0", "", "0", "", ""]));
skillTree.appendChild(createRow(["", "", "", "1", "", "", ""]));

console.log(skillTree);
