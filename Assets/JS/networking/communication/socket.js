
var socket = io.connect('http://localhost:3000');

var playerID = Math.floor(Math.random() * 100000);

socket.emit('Login', playerID);



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
          label: p[1].name
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