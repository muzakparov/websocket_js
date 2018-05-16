//not used anymore

var sendJSON =require('./test')

var WebSocketServer = require('ws').Server,
    wss             = new WebSocketServer({port: 40510})

sendJSON=JSON.stringify(sendJSON)

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(`${sendJSON}`),
    1000
  )
})
