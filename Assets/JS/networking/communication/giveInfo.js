function giveInfo(info) {
  info = {
    x: Player.x,
    y: Player.y,
    direction: looking.direction,
    name: playerID
  }
  socket.emit('Position', {
    playerID,
    info
  })
}