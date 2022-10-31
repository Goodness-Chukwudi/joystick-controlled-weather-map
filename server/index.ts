import WebSocket from "ws";
import express from "express";
const app = express()
import path from "path";

app.use("/", express.static(path.resolve(__dirname, "../client")))
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

const wsServer = new WebSocket.Server({
    noServer: true
})                                      

wsServer.on("connection", (ws) => { 
  console.log("Connected to web socket")
    ws.on("message", (msg) => { 
      const data = JSON.parse(msg.toString()) ;
      
        wsServer.clients.forEach( client => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(data));
            }
        })
    })
})

server.on('upgrade', (request, socket, head) => {
  
    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit('connection', ws, request);
    });
});