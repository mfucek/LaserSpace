var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var offset = {
  x: c.width/2,
  y: c.height/2,
}

var initialWidth = window.innerWidth;
var initialHeight = window.innerHeight;

c.oncontextmenu = new Function("return false;");

console.log("Canvas initialized.")

export { c, ctx, offset, initialHeight, initialWidth };