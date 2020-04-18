
function decToHex(dec) {
  var hex = ( 255  - Math.round(dec * 255) ).toString(16).pad()
  return hex
}

String.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

export { decToHex };