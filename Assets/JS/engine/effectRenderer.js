function traces(Player) {
  offsetX = Math.sin(-Player.direction) * 10 * Camera.zoom * 0.15;
  offsetY = Math.cos(-Player.direction) * 10 * Camera.zoom * 0.15;
  ctx.beginPath();
  ctx.moveTo(
    project(Player, Camera).x - offsetX,
    project(Player, Camera).y - offsetY,
  );
  ctx.lineTo(
    project(Player, Camera).x + Math.cos( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 - offsetX,
    project(Player, Camera).y + Math.sin( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 - offsetY
  );
  ctx.strokeStyle = "#6accfc";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(
    project(Player, Camera).x + offsetX,
    project(Player, Camera).y + offsetY,
  );
  ctx.lineTo(
    project(Player, Camera).x + Math.cos( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 + offsetX,
    project(Player, Camera).y + Math.sin( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 + offsetY
  );
  ctx.strokeStyle = "#6accfc";
  ctx.stroke();

  
  offsetX = Math.sin(-Player.direction) * 10 * Camera.zoom * 0.15;
  offsetY = Math.cos(-Player.direction) * 10 * Camera.zoom * 0.15;
  ctx.beginPath();
  ctx.moveTo(
    project(Player, Camera).x - offsetX,
    project(Player, Camera).y - offsetY,
  );
  ctx.lineTo(
    project(Player, Camera).x + Math.cos( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 - offsetX,
    project(Player, Camera).y + Math.sin( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 - offsetY
  );
  ctx.strokeStyle = "#6accfc10";
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(
    project(Player, Camera).x + offsetX,
    project(Player, Camera).y + offsetY,
  );
  ctx.lineTo(
    project(Player, Camera).x + Math.cos( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 + offsetX,
    project(Player, Camera).y + Math.sin( Player.direction + Math.PI ) * Player.intensity * scale * Camera.zoom / 10 + offsetY
  );
  ctx.strokeStyle = "#6accfc10";
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.lineWidth = 1;
}

  // RANGE
  // ctx.beginPath();
  // ctx.arc(
  //   project(Player, Camera).x,
  //   project(Player, Camera).y,
  //   maxSpeed * scale * Camera.zoom / 10, 
  //   0, 
  //   2 * Math.PI);
  // ctx.strokeStyle = "#FFFFFF20";
  // ctx.stroke();  
  
  // // SHEILD
  // ctx.beginPath();
  // ctx.arc(
  //   project(Player, Camera).x,
  //   project(Player, Camera).y,
  //   maxSpeed * scale * Camera.zoom / 10 + 10, 
  //   -0.1 * Math.PI * Math.sin(time/20) - 0.3 * Math.PI + Player.direction, 
  //   0.1 * Math.PI * Math.sin(time/20) + 0.3 * Math.PI + Player.direction
    
  //   // -0.5 * Math.PI * (1.5-Player.intensity/Player.maxSpeed) + Player.direction, 
  //   // 0.5 * Math.PI * (1.5-Player.intensity/Player.maxSpeed)  + Player.direction
  // );
  // ctx.strokeStyle = "#6accfc";
  // ctx.stroke(); 

function zap(v1, v2) {  // U PATH PRETVORITI
    ctx.moveTo(
      projectVertex(v1, Camera).x,
      projectVertex(v1, Camera).y,
    );

    ctx.lineTo(
      projectVertex(v2, Camera).x,
      projectVertex(v2, Camera).y,
    );

    ctx.closePath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
}

// traces must equal to mvmt_keypress direction, not to Player.direction