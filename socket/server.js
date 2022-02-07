//This would need to be added to server.js file for demo
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 

const server= app.listen(port, ()=>console.log(`Listening on port: ${port}`));
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server

let connectedClients = 0;

//initializing socket.io
const io = socket.io(server, { 
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: ["*"]
        }

     });
     
     console.log('io is----', io)


     //when a client connects to our app, this io.on("connection") listener will be triggered
     io.on("connection", socket=>{
        connectedClients++
        console.log(`New client has joined us ${connectedClients} connected. Here is the particular client socket id ${socket.id}`);
        io.emit("new_connection", {msg: "someone new has joined us"}) //send a message to all the connected clients
        // socket.broadcast.emit ("new connection", {msg:"someone joined"}) //send a message to others to let all know a new person joined

        //when the socket recieved an alert about the new ninja being added from the client we will be in the socket.on (added_new_ninja) listener
        
        socket.on("added_new_ninja", ninjaInfo =>{
            console.log("recieved ninja info", ninjaInfo)

            //when the server is aware that a new ninja got added, the server will send a message to all the other connected clients that new ninja got added so that other clients DOM will update in real time. 
            socket.broadcast.emit("update_list_of_ninjas", ninjaInfo)

        })


     })
