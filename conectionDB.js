const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/delilahresto';
const myDataBase = new Sequelize(path);

myDataBase
  .authenticate()
  .then(() => {
    console.log('Estamos conectado a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexion con la base de datos', error);
  });

module.exports = myDataBase;
