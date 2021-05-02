# Delilah Resto
_Instalaciones que se hicieron en el proyecto:_
## instalar npm para gestion de proyectos y node para correr el servidor
_https://www.npmjs.com/get-npm_

## instalar xampp para correr apache y MySql para que funcione correctamente la base de datos en phpmyadmin
_https://www.apachefriends.org/es/download.html_

## nombre de la base de datos: delilahresto
_nombre que se le dio a la base de datos para el proyecto_

### Configuracion en xampp
_abrir xampp como administrador y ejecutar Apache y MySQL (hacer click en la accion Admin de MySQL desde xampp para abrir http://localhost/phpmyadmin/)_


### Una vez abierto phpmyadmin:
_importar el archivo delilahresto.sql (en la carpeta del proyecto) en http://localhost/phpmyadmin/_

### Visual studio code
_En la consola bash de visual studio code se inicializo npm init --yes, y se instalaron los siguientes paquetes:_
* npm i express
* npm i sequelize
* npm i mysql2
* npm i jsonwebtoken
* npm i swagger-ui-express
* npm i swagger-jsdoc

### Comando para ejecutar el servidor
_En la consola de visual studio code escribir: node .\server.js           -> para correr el servidor_

# Una vez corriendo el servidor, se utiliza swagger: 
_http://localhost:3000/delilahresto_
_Se utiliza swagger para realizar los end-points al servidor_

## Token JWS para que funcionen algunos end-points (en swagger):
_en swagger simplemente haciendo click en authorize, ingresar:_ 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU
```

_luego click en Authorize_


# o bien se puede utilizar postman para acceder a los end-points mediante post, put, get y delete.

## Token JWS para que funcionen algunos end-points (en postman):
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU
```
_en los siguientes endpoint:_
* http://localhost:3000/crear_pedido
* http://localhost:3000/plato/crear_plato
* http://localhost:3000/pedido
* http://localhost:3000/plato/actualizar_precio
* http://localhost:3000/usuario/update_password
* http://localhost:3000/plato/borrar_plato
* http://localhost:3000/plato/platos
* http://localhost:3000/pedido/actualizar_estado
