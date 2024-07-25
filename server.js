const app = require("./app");

let express = require('express');
let app2 = express();


let http = require('http');
let server = http.Server(app2);

let socketIO = require('socket.io');
let io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  log: true,
});

console.log('herehere')
io.on('connection', (socket) => {
    socket.on('join', (data) => {
        console.log(data)
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message});
    });
});




const port = 3000;



// Your routes and other server configurations go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

