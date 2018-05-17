const express = require('express')
const http = require('http')
const WebSocket = require('ws')

// let sendJSON =require('./productionJSON')
let sendJSON =require('./test')
var intervalListener

sendJSON=JSON.stringify(sendJSON)


const app = express()

//initialize a simple http server
const server = http.createServer(app)

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    })
	
	ws.send(`${sendJSON}`)

    intervalListener=setInterval(
	    () => {
	    	console.log("polling...")

	    	if (ws.readyState != WebSocket.CLOSED) { 
				ws.send(`${sendJSON}`)
	    	}
	    	
	    },
	    1000
    )
})

wss.on('close', function close() {
  console.log('disconnected');

  clearInterval(intervalListener)
})

//start our server
server.listen(1984, () => {
    console.log(`Server started on port ${server.address().port} :)`);
})
