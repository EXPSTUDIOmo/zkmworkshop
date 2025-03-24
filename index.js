const Max = require('max-api');
const PORT = 5005;


Max.addHandler('hello', () => {
    // this code runs, when max sends hello
    Max.outlet(5);
});

const express = require('express');
const http = require('http');
const path = require('path');

const { Server } = require('socket.io');

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