"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
/* import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080});
wss.on("connection",function(socket){
   socket.send("hello");
   socket.on("message",(e)=>{
       console.log(e.toString());
   })
}) */ 
