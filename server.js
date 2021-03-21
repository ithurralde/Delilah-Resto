let express = require('express');
let server = express();
const transactionHandler = require('./DBHandler.js');

server.listen(3000, function () {
    console.log('Estamos conectados al puerto 3000');
});

server.use(express.json());

//middleware global
server.use((error, request, response, next) => {
    if (error) {
      response.status(500).send('Error');
    } else {
      next();
    }
  });

//middleware local
function interceptar(request, response, next){
    response.json("Acceso denegado");
    return next();
}
server.get('/test_middleware', interceptar, (request, response) => {

});


server.get('/ingresar_usuario', (request, response) => {

});

server.post('/crear_usuario', (request, response) => {

});