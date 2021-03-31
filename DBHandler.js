const { response } = require('express');
const { QueryTypes } = require('sequelize');
const myDataBase = require('./conectionDB');

async function crearUsuario(usuario) {
    await myDataBase.query('INSERT INTO usuarios (user, password, name, email) VALUES (?, ?, ?, ?)', {
      replacements: [usuario.user, usuario.password, usuario.name, usuario.email],
    });
    return { message: 'Usuario registrado exitosamente' };
  }
  
async function getUsuario(usuario) {
    let resultado = await myDataBase.query('SELECT * FROM usuarios WHERE user = ? AND password = ?', {
        replacements: [usuario.user, usuario.password],
        type: QueryTypes.SELECT
    });
    if (resultado.length == 0)
      return { message: "Usuario o contraseña invalidos."};
    else
      return resultado;
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
  while (i < pedido.platos.length){
    await rellenarFormaParte(pedido, pedido.platos[i]);
    i++;
  }
  return { message: "Numero pedido realizado " + pedido.numeroPedido };
}

async function rellenarFormaParte(pedido, plato){
  await myDataBase.query('INSERT INTO forma_parte (id_pedido, id_plato) VALUES (?, ?)', {
    replacements: [pedido.id, plato],
  });
  return { message: "Plato agregado exitosamente: " + plato};
}

async function getPedido(numeroPedido){
  let platos = await myDataBase.query('SELECT id_plato FROM forma_parte WHERE id_pedido = ?', {
    replacements: [numeroPedido],
    type: QueryTypes.SELECT
  });

  let resultado = [];
  for (let i = 0; i < platos.length; i++){
    resultado[i] = await myDataBase.query('SELECT nombre_plato FROM platos WHERE id = ?', {
      replacements: [platos[i].id_plato],
      type: QueryTypes.SELECT
    });
  }

  let respuesta = "";
  resultado.forEach(plato => respuesta += plato[0].nombre_plato + ", ");
  return { message: respuesta }
}

module.exports = { crearUsuario, getUsuario, crearPlato, crearPedido, getPedido };