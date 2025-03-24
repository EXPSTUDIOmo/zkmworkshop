// The Max npm package to communicate with our maxpatch
const Max = require('max-api'); 
const PORT = 5005; // Port that our server will run on. Default HTTP : Port 80, Default HTTPS: Port 443

Max.addHandler('hello', () => {
    // this code runs, when max sends hello
    Max.outlet(5);
});

const express = require('express'); // express package that handles most of serverside-routing and data handling
const http = require('http'); // module to work with the HTTP protocol to send / receive Hyper-Text
const path = require('path'); // to access filepaths and directories on the server

const { Server } = require('socket.io'); // socket.io for a bidirectional communication via websockets 

let app = express();
app.use(express.static('public'));

let httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    Max.outlet("WEB-Server is running");
});

let socketIO = new Server(httpServer);

socketIO.on('connection', (socket) => {
    
    socket.on('play', () => {
        Max.outlet('play');
    });

});