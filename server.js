const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html' )
})

// app.get('/Assets/CSS/style.css', (req, res) => {
//   res.sendFile( __dirname + '/Assets/CSS/style.css' )
// })

// app.get('/Assets/JS/', (req, res) => {
//   res.sendFile( __dirname + '/Assets/JS/' )
// })

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log("Listening on " + PORT);  
})


