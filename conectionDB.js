const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/delilahresto';
const myDataBase = new Sequelize(path);

myDataBase
  .authenticate()
  .then(() => {
    console.log('Estamos conectado');
  })
  .catch((error) => {
    console.error('Error de conexion', error);
  });

module.exports = myDataBase;
