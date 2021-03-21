let express = require('express');
let server = express();
const transactionHandler = require('./DBHandler.js');

server.listen(3000, function () {
    console.log('Servidor conectado en el puerto 3000');
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


server.get('/usuario', (request, response) => {
    let usuario = request.body;
    transactionHandler.getUsuario(usuario)
    .then(respuesta => { response.status(200).send(respuesta)})
    .catch(error => console.error("Error: ", error));
});

server.post('/crear_usuario', (request, response) => {
    let usuario = request.body;
    transactionHandler.crearUsuario(usuario)
    .then(resultado => { response.status(201).send(resultado);})
    .catch(error => { console.error("Error: ", error)});
});