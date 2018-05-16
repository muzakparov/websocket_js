var express = require('express')
// var sendJSON =require('./productionJSON')
var sendJSON =require('./test')

var WebSocketServer = require('ws').Server,
    wss             = new WebSocketServer({port: 1984, path: "/api/settler/ws"})

sendJSON=JSON.stringify(sendJSON)

var intervalListener

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  intervalListener=setInterval(
    () => {
    	console.log("polling...")
    	
    	ws.send(`${sendJSON}`)
    },
    1000
  )
})

wss.on('close', function close() {
  console.log('disconnected');

  clearInterval(intervalListener)
})


// var app = express()

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/ws.html');
// })

// app.listen(1234, function () {
//   console.log('Example app listening on port 1234!')
// })

