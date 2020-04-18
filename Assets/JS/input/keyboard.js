
// KEYBOARD

var keys = {
};

var keyMap = {
  'up': 87,
  'down': 83,
  'left': 65,
  'right': 68,
  'space': 32,
  'a1': 49,
  'a2': 50,
  'a3': 51,
  'a4': 52,
  's1': 16,
  'openTalents': 84,
  'close': 27
};


document.addEventListener('keydown', function(event) {
  Object.keys(keyMap).forEach( key => {
    if (event.keyCode == keyMap[key]) {
      keys[key] = true;
    }
  });
});
document.addEventListener('keyup', function(event) {
  Object.keys(keyMap).forEach( key => {
    if (event.keyCode == keyMap[key]) {
      keys[key] = false;
    }
  });
});


export { keys }