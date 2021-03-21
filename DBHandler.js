const myDataBase = require('./conectionDB');

async function insertarUsuario(usuario) {
    await myDataBase.query('user, password, name, email) VALUES (?, ?, ?, ?)', {
      replacements: [usuario.user, usuario.password, usuario.name, usuario.email],
    });
    return { message: 'Usuario registrado exitosamente' };
  }
  

module.exports = { insertarUsuario };