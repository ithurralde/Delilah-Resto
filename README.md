instalar npm para gestion de proyectos
instalar node para correr el servidor
instalar xampp, correr apache y MySql para que funcione correctamente la base de datos en: http://localhost/phpmyadmin/db_structure.php?server=1&db=delilahresto

abrir consola en visual studio code en la carpeta del proyecto y escribir: node .\server.js

Se utiliza postman para hacer acceder a los end-points mediante post, put, get y delete.
Token JWS para que funcionen algunos end-points:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pPblodGgwKxB3YDA5LHdYsx3LYiGjUUEjTkeIHUKKsU en los siguientes:
http://localhost:3000/crear_pedido
http://localhost:3000/plato/crear_plato
http://localhost:3000/pedido
http://localhost:3000/plato/actualizar_precio
http://localhost:3000/usuario/update_password