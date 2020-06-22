const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a está aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit("enviarMensaje", data);

        // if (mensaje.usuario) {
        //     callback({
        //         res: "¡TODO SALIO BIEN!"
        //     })
        // } else {
        //     callback({
        //         res: "¡TODO SALIO MAL!"
        //     });
        // }

    });
});