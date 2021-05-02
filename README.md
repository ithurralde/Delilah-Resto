# Delilah Resto
_Instalaciones que se hicieron en el proyecto:_
## instalar npm para gestion de proyectos
## instalar node para correr el servidor
## instalar xampp para correr apache y MySql y que funcione correctamente la base de datos en: http://localhost/phpmyadmin/db_structure.php?server=1&db=delilahresto
## nombre de la base de datos: delilahresto


### Configuracion en xampp
_abrir xampp y ejecutar Apache y MySQL (hacer click en la accion Admin de MySQL desde xampp para abrir http://localhost/phpmyadmin/)_

### Una vez abierto phpmyadmin:
_importar el archivo delilahresto.sql (del proyecto) en http://localhost/phpmyadmin/_

### Visual studio code
_En la consola bash de visual studio code se inicializo npm init --yes, y se instalaron los siguientes paquetes:_
    _npm i express_
    _npm i sequelize_
    _npm i mysql2_
    _npm i jsonwebtoken_
    _npm i swagger-ui-express_
    _npm i swagger-jsdoc_

### Comando para ejecutar el servidor
_En la consola en visual studio code escribir: node .\server.js           -> para correr el servidor_

# Una vez corriendo el servidor, se utiliza swagger: http://localhost:3000/delilahresto 

## Token JWS para que funcionen algunos end-points (en swagger):
_en swagger simplemente haciendo click en authorize, ingresar: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU_
_luego click en Authorize_

# o bien se puede utilizar postman para acceder a los end-points mediante post, put, get y delete.

## Token JWS para que funcionen algunos end-points (en postman):
_Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU en los siguientes:_
* http://localhost:3000/crear_pedido
* http://localhost:3000/plato/crear_plato
* http://localhost:3000/pedido
* http://localhost:3000/plato/actualizar_precio
* http://localhost:3000/usuario/update_password
* http://localhost:3000/plato/borrar_plato
* http://localhost:3000/plato/platos
* http://localhost:3000/pedido/actualizar_estado
