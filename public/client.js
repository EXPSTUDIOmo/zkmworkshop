const socket = io();

let playbutton = document.getElementById('playbutton');

playbutton.addEventListener('click', () => {
   socket.emit('play');
});

