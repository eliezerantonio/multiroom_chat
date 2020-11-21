/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(8080, function () {
    console.log('Servidor online');
})



var io = require('socket.io').listen(server);
//criar conexao por webscoket

io.on('connection', function (socket) {
    console.log("usuario conectado");

});

//express-validator@3.2.1