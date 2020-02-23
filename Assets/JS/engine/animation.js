// animation states

function animation(objects) {
  objects.forEach(element => {
    aniList = element.animations
    if (aniList != undefined) {
      if ("pulse" in aniList) {
        // Do something
      }
    }
  });
}