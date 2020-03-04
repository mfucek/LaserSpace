// http://172.20.10.3:3000
// http://192.168.8.101

const socket = io.connect("https://laserspaceserver.herokuapp.com/");

socket.on("connect", e => {
  console.log("connected", e);
});

var playerID = Math.floor(Math.random() * 100000);

interface.name.textContent = playerID;

socket.emit('Login', playerID);
socket.emit('Heartbeat', playerID)


var agg = setInterval(heartbeat, 1000);

function heartbeat() {
  socket.emit('Heartbeat', playerID)
}

socket.on("Disconnect", (msg) => {
  
  particleObjects.explosions.push(
    particlePrefab.create("collisionExplosion", {
      x: ( otherPlayers[msg].x ),
      y: ( otherPlayers[msg].y ),
      // later calculate actual point of collision!
    })
  );
  delete otherPlayers[msg]
  console.log("someone left 😢");
})


otherPlayers = {};

socket.on('Sync', (msg) => { 
  Object.entries(msg).forEach(p => {
    
    if (p[0] != playerID){
      if (otherPlayers[ p[0] ]) {
        otherPlayers[ p[0] ].x = p[1].x
        otherPlayers[ p[0] ].y = p[1].y
        
        // console.log( [p[1].direction, 0, 0] );       
        
        otherPlayers[ p[0] ].transform.rotation = [p[1].direction, 0, 0]

        // console.log( otherPlayers[ p[0] ].transform.rotation );  

      } else {
        otherPlayers[ p[0] ] = entityPrefab.create("ship", {
          x: p[1].x,
          y: p[1].y,
          label: p[1].name,
          direction: p[1].speed.direction,
          intensity: p[1].speed.intensity
        })
        otherPlayers[ p[0] ].transform.rotation = [p[1].direction, 0, 0]
      }
    }
  });
  
});

socket.on('Position', (msg) => {
  console.log('asd');
  
  if (otherPlayers[msg.playerID]) {
    otherPlayer[msg.playerID].x = msg.info.x;
    otherPlayer[msg.playerID].y = msg.info.y;
  } else {
    otherPlayers[msg.playerID] = entityPrefab.create("otherPlayer", {
      x: msg.info.x,
      y: msg.info.y,
      z: 0,
    });
  }
});