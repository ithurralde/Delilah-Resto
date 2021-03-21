let express = require('express');
let server = express();
const transactionHandler = require('./DBHandler.js');

server.listen(3000, function () {
    console.log('Estamos conectados al puerto 3000');
});

server.use(express.json());

server.use((error, require, response, next) => {
    if (error) {
      response.status(500).send('Error');
    } else {
      next();
    }
  });

server.get('/mi_ruta', (require, response) => {

});