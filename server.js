const { request, response } = require('express');
let express = require('express');
let server = express();
const transactionHandler = require('./DBHandler.js');
const jwt = require("jsonwebtoken");
const jwtClave = "Cl4V3_J0t4D0bl3VT3$";
let token;

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

const autenticarUsuario = (request, response, next) => {
  try {
      const token = request.headers.authorization.split(' ')[1];
      const verificarToken = jwt.verify(token, jwtClave);
      if (verificarToken) {
        request.usuario = verificarToken;
        console.log(request.usuario);
        return next();
      }
  } catch (error){
      response.json({ error: "Error al validar usuario." }); 
  }
}

server.get('/usuario/loggin', (request, response) => {
    let usuario = request.body;
    transactionHandler.logginUsuario(usuario)
    .then(respuesta => { 
      token = jwt.sign({usuario: usuario.user, id: usuario.id}, jwtClave);
      response.status(200).send(respuesta); })
    .catch(respuesta => {response.status(401).send({ message: "Usuario o contraseña invalidos."})});

});

server.post('/crear_usuario', (request, response) => {
    let usuario = request.body;
    // console.log(usuario);
    // response.status(201).send({ message: "Usuario creado correctamente. "});
    token = jwt.sign({usuario: usuario.user, id: usuario.id}, jwtClave);
    transactionHandler.crearUsuario(usuario)
    .then(resultado => { response.status(201).send(resultado);})
    .catch(error => { console.error("Error: ", error)});
});


async function isAdmin(request, response, next){
  let idParams = request.query.idUser;
  let usuario = await transactionHandler.getUsuario(idParams);
  console.log(usuario[0]);
    if (!usuario[0].admin){
      let message = { message: "Tiene que ingresar como administrador para realizar la accion solicitada." }
      return response.status(403).send(message);
    }
  return next();
}

async function existeUsario(request, response, next){
  let idParams = request.query.idUser;
  let usuario = await transactionHandler.getUsuario(idParams);
  console.log("araerear");
  console.log(usuario[0]);
  if (usuario[0] == undefined){
    console.error("No existe el usuario.");
    let message =  { message : "El usuario no existe." };
    return response.status(404).send(message);
  }
  return next();
}

server.post('/crear_plato', autenticarUsuario, existeUsario, isAdmin, (request, response) => {
  let plato = request.body;
  transactionHandler.crearPlato(plato)
  .then(respuesta => response.status(201).send(respuesta))
  .catch(error => console.error("Error: " + error));
});

server.post('/actualizar_precio', autenticarUsuario, existeUsario, isAdmin, (request, response) => {
  let precio = request.body;
  transactionHandler.actualizarPrecio(precio)
  .then(respuesta => response.status(201).send(respuesta))
  .catch(error => console.error("Error: " + error));
});

server.post('/crear_pedido', autenticarUsuario, (request, response) => {
  let pedido = request.body;
  // console.log("Y el request????? " + pedido.platos.length);
  // console.log("a ver : " + pedido.platos[0] + ", "+ pedido.platos[1] + ", " + pedido.platos[2]);
  transactionHandler.crearPedido(pedido)
  .then(respuesta => response.status(200).send(respuesta))
  .catch(error => console.error("Error: ", error));
})

server.get('/pedido', autenticarUsuario, (request, response) => {
  let pedido = request.query.value;
  console.log("el pedido es: " + pedido);
  transactionHandler.getPedido(pedido)
  .then(respuesta => response.status(200).send(respuesta))
  .catch(error => console.error(error));
});