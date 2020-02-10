// CAMERA OBJECT
var Camera = {
  x: 0,
  y: 0,

  zoom: 10,
  zoomTarget: 10,
  zoomRate: 5,

  followTarget: undefined,
  followRate: 10,
  FOV: 100,

  adjust : function() {
    if (this.target) {
      this.x = ( this.x * (this.followRate - 1) + this.target.x ) / this.followRate;
      this.y = ( this.y * (this.followRate - 1) + this.target.y ) / this.followRate;
    }
    this.zoom = ( this.zoom * (this.zoomRate - 1) + this.zoomTarget ) / this.zoomRate;
    // this.FOV = 100 + 100 / 20 * this.zoom;
  },
}

// ZOOM
lastScroll = 0;
window.addEventListener('wheel', function(event) {
  if (time - lastScroll > 0 ) {
    if (event.deltaY < 0) {
      if (Camera.zoomTarget < 20) {
        Camera.zoomTarget += 2;
      }
      lastScroll = time;
    }
    else if (event.deltaY > 0) {
      if (Camera.zoomTarget > 3) {
        Camera.zoomTarget -= 2;
      }
      lastScroll = time;
    }
  }
});