import WebSocket, { WebSocketServer } from 'ws';

const wss=new WebSocketServer({ port:8080});

wss.on("connection",function(socket){
 socket.on("message",(e)=>{
    if(e.toString()==="ping"){
        socket.send("pong");
    }
 })
}) 

 /* import { WebSocketServer } from "ws";
 const wss=new WebSocketServer({port:8080});
 wss.on("connection",function(socket){
    socket.send("hello");
    socket.on("message",(e)=>{
        console.log(e.toString());
    })
 }) */