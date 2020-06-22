var socket = io();

//detect backend changes
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdio la conexión al servidor');
});

socket.emit('enviarMensaje', {
    usuario: "Pablus",
    mensaje: '¡Hola mundo!'
}, function (resp) {
    console.log("Respuesta Servidor: ", resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});
