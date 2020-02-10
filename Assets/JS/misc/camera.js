// CAMERA OBJECT
var Camera = {
  x: 0,
  y: 0,

  zoom: 10,
  tryzoom: 10,

  followRate: 10,
  zoomRate: 5,
  FOV: 100,

  adjust : function(target) {
    this.x = ( this.x * (this.followRate - 1) + target.x ) / this.followRate;
    this.y = ( this.y * (this.followRate - 1) + target.y ) / this.followRate;
    this.zoom = ( this.zoom * (this.zoomRate - 1) + this.tryzoom ) / this.zoomRate;
    // this.FOV = 100 + 100 / 20 * this.zoom;
  },
}

// ZOOM
lastScroll = 0;
window.addEventListener('wheel', function(event) {
  if (time - lastScroll > 0 ) {
    if (event.deltaY < 0) {
      if (Camera.tryzoom < 20) {
        Camera.tryzoom += 2;
      }
      lastScroll = time;
    }
    else if (event.deltaY > 0) {
      if (Camera.tryzoom > 3) {
        Camera.tryzoom -= 2;
      }
      lastScroll = time;
    }
  }
});