function giveInfo(info) {
  info = {
    x: Player.x,
    y: Player.y,
    direction: looking.direction
  }
  socket.emit('Position', {
    playerID,
    info
  })
}