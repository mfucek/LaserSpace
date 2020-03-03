
// Input Listener
var keys2 = {
  '1': false,
  '2': false,
  '3': false,
};

var Input = {}

Input.keyboard = {
  'w': false,
  's': false,
  'a': false,
  'd': false,
  '1': false,
  '2': false,
  '3': false  
}


document.addEventListener('keydown', function(event) {
  if (event.keyCode == 49) {
    Input.keyboard['2'] = true;
  }
  if (event.keyCode == 50) {
    Input.keyboard['3'] = true;
  }
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 49) {
    Input.keyboard['2'] = false;
  }
  if (event.keyCode == 50) {
    Input.keyboard['3'] = false;
  }
});