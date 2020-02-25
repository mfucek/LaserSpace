function giveInfo(info) {
  info = {
    x: Player.x,
    y: Player.y,
    direction: looking.direction,
    name: playerID,
    speed: { direction: Player.direction, intensity: Player.intensity }
  }
  socket.emit('Position', {
    playerID,
    info
  })
}