// CAMERA OBJECT
var Camera = {
  x: 0,
  y: 0,

  zoom: 10,

  followRate: 10,

  adjust : function(target) {
    this.x = ( this.x * (this.followRate - 1) + target.x ) / this.followRate;
    this.y = ( this.y * (this.followRate - 1) + target.y ) / this.followRate;
  }
}

// ZOOM
lastScroll = 0;
window.addEventListener('wheel', function(event) {
  if (time - lastScroll > 0 ) {
    if (event.deltaY < 0) {
      if (Camera.zoom < 20) {
        Camera.zoom += 2;
      }
      lastScroll = time;
    }
    else if (event.deltaY > 0) {
      if (Camera.zoom > 3) {
        Camera.zoom -= 2;
      }
      lastScroll = time;
    }
  }
});