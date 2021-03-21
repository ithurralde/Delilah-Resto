const { QueryTypes } = require('sequelize/types');
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

module.exports = { crearUsuario, getUsuario };