instalar npm para gestion de proyectos
instalar node para correr el servidor
instalar xampp para correr apache y MySql y que funcione correctamente la base de datos en: http://localhost/phpmyadmin/db_structure.php?server=1&db=delilahresto
nombre de la base de datos: delilahresto

abrir xampp y ejecutar Apache y MySQL (hacer click en la accion Admin de MySQL desde xampp para abrir http://localhost/phpmyadmin/)
importar delilahresto.sql en http://localhost/phpmyadmin/
En la consola bash de visual studio code se inicializo npm init --yes, y se instalaron los siguientes paquetes: 
    npm i express
    npm i sequelize
    npm i mysql2
    npm i jsonwebtoken
    npm i swagger-ui-express
    npm i swagger-jsdoc

Nombre de la base de datos: delilahresto

En la consola en visual studio code escribir: node .\server.js           -> para correr el servidor

Una vez corriendo el servidor, se utiliza postman para acceder a los end-points mediante post, put, get y delete o bien swagger: http://localhost:3000/delilahresto
Token JWS para que funcionen algunos end-points:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU en los siguientes:
http://localhost:3000/crear_pedido
http://localhost:3000/plato/crear_plato
http://localhost:3000/pedido
http://localhost:3000/plato/actualizar_precio
http://localhost:3000/usuario/update_password
http://localhost:3000/plato/borrar_plato
http://localhost:3000/plato/platos
http://localhost:3000/pedido/actualizar_estado

o en swagger simplemente haciendo click en authorize, ingresar: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU