const { QueryTypes } = require('sequelize');
const myDataBase = require('./conectionDB');

async function crearUsuario(usuario) {
    await myDataBase.query('INSERT INTO usuarios (user, password, name, email) VALUES (?, ?, ?, ?)', {
      replacements: [usuario.user, usuario.password, usuario.name, usuario.email],
    });
    return { message: 'Usuario registrado exitosamente' };
  }
  
async function getUsuario(usuario) {
    await myDataBase.query('SELECT * FROM usuarios WHERE user = ? AND password = ?', {
        replacements: [usuario.user, usuario.password],
        type: QueryTypes.SELECT
    });
    return { message: "Usuario ingresado correctamente: " + usuario.user };
}

async function crearPlato(plato){
  await myDataBase.query('INSERT INTO platos (nombre_plato, descripcion) VALUES (?, ?)', {
    replacements: [plato.nombrePlato, plato.descripcion],
  });
  return { message: 'Plato creado'};
}

async function crearPedido(pedido) {
  await myDataBase.query('INSERT INTO pedidos (id, numero_pedido, id_usuario) VALUES (?, ?, ?)', {
    replacements: [pedido.id, pedido.numeroPedido, pedido.idUsuario],
  });
  let i = 0;
  console.log("Cuanto vale i? " + i);
  console.log("y la cantidad de plato? " + pedido.platos.lenght);
  while (i <= pedido.platos.lenght){
    await rellenarFormaParte(pedido, pedidos.platos[i]);
    i++;
  }
  return { message: "Numero pedido realizado " + pedido.numeroPedido };
}

async function rellenarFormaParte(pedido, plato){
  await myDataBase.query('INSERT INTO forma_parte (id_pedido, id_plato) VALUES (?, ?)', {
    replacements: [pedido.id, plato],
  });
  return { message: "Plato agregado exitosamente: " + pedidos.plato[i]};
}

module.exports = { crearUsuario, getUsuario, crearPlato, crearPedido };