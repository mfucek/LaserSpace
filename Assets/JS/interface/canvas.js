
var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var offset = {
  x: c.width/2,
  y: c.height/2,
}

// NE RADI :(
window.addEventListener('resize', () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  
  var offset = {
    x: c.width/2,
    y: c.height/2,
  }
});
