var mouseDown = false;

c.addEventListener('touchstart', function(e) {
  mouseDown = true
})
c.addEventListener('touchend', function(e) {
  mouseDown = false
})

var Touch = {
  x: 0,
  y: 0,
  angle: 0
}

c.addEventListener('touchmove', (e) => {
  Touch.x = e.touches[0].clientX;
  Touch.y = e.touches[0].clientY;
});

var joystickPadding = 200;

var joystick = {
  anchor: {
    x: joystickPadding,
    y: c.height - joystickPadding,
  },
  drag: {
    x: Touch.x,
    y: Touch.y
  },
  radius: {
    inner: 50,
    outer: 80,
  }
}
function updateJoystick(g) {
  
  a = Math.atan2(Touch.y - joystick.anchor.y, Touch.x - joystick.anchor.x)
  
  Touch.angle = a;
  
  if (Math.hypot(Touch.y - joystick.anchor.y, Touch.x - joystick.anchor.x) > 80) {
    joystick.drag = {
      x: Math.cos(a) * 80,
      y: Math.sin(a) * 80
    }
  } else {
    joystick.drag = {
      x: Touch.x - joystick.anchor.x,
      y: Touch.y - joystick.anchor.y, 
    }
  }
  
  if (mouseDown) {
    
    ctx.beginPath();
    ctx.arc(
      joystick.anchor.x,
      joystick.anchor.y,
      joystick.radius.outer,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#ffffff20";
    ctx.strokeStyle = "#ffffff";
    ctx.fill()
    ctx.stroke();  

    ctx.beginPath();
    ctx.arc(
      joystick.drag.x + joystick.anchor.x,
      joystick.drag.y + joystick.anchor.y,
      joystick.radius.inner,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#ffffff20";
    ctx.strokeStyle = "#ffffff";
    ctx.fill()
    ctx.stroke(); 

    if (
      a > -Math.PI * 7/8 &&
      a < -Math.PI * 1/8
      ) { keys['w'] = true; } else { keys['w'] = false }
    
    if (
      a < Math.PI * 7/8 &&
      a > Math.PI * 1/8)
      { keys['s'] = true; } else { keys['s'] = false }

    if (
      Math.abs(a) < Math.PI * 3/8
      ) { keys['d'] = true; } else { keys['d'] = false }

    if (
      Math.abs(a) < Math.PI * 1/1 &&
      Math.abs(a) > Math.PI * 5/8
      ) { keys['a'] = true; } else { keys['a'] = false }
    
    
  } else {
    keys['w'] = 0;
    keys['s'] = 0;
    keys['a'] = 0;
    keys['d'] = 0;
  };
  
}