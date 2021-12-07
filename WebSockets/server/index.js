const WebSocket = require("ws");

const wss= new WebSocket.Server({ port: 8082 });

wss.on("connection", ws =>{
        console.log("new client connected");

        ws.on("message",data=>{
            console.log(`Client has sent us ${data}`);
            ws.send(data.toString().toUpperCase());
        });

       // ws.send("Hey How is it going");

        ws.on("close",()=>{
            console.log("client was disconnected");
        });
});