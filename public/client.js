/* Since we included the socket.io client code (socket-io.js) 
   and executed it BEFORE this client.js file, we have now access to socket.io here and can 
   just use the io() constructor to establish a connection between client and server
   Socket.io is smart enough to handle the connection process (choosing port etc.) on its own
*/
const socket = io();

let playbutton = document.getElementById('playbutton');

playbutton.addEventListener('click', () => {
   socket.emit('play');
});

