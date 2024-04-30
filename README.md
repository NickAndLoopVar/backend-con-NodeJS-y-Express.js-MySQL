# Backend con Node.js y Express.js para MySQL

_Este proyecto es un backend desarrollado en Node.js con Express.js, diseñado para interactuar con una base de datos MySQL. Proporciona una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en la base de datos._

## Capturas

### Se configura el package.json agregando las dependencias y modificando el script para levantar el servidor:

<img src="https://i.ibb.co/WKWXjgn/packjson.png" alt="Package.json" width="50%">

### Se crean 5 carpetas:

- src
- config
- models
- controllers
- routes

<img src="https://i.ibb.co/1LR9S2K/carpetas2.png" alt="carpetas" width="30%">

### En la carpeta src se crea el archivo index.js y se configura el servidor:

<img src="https://i.ibb.co/1036JFW/index2.png" alt="index.js" width="70%">

### La carpeta config tendra un archivo llamado db.js donde se crara la conexion con la base de datos:

<img src="https://i.ibb.co/4ZHbHX6/db2.png" alt="db.js" width="70%">

### La carpeta models contendra el esquema que sera almacenado en la base de datos:

#### Citas.js

<img src="https://i.ibb.co/RBCzx7y/citas.png" alt="Cliente.js" width="70%">

### En la carpeta controllers se crea el archivo que contendra las funciones del CRUD:

#### CitasController.js

<img src="https://i.ibb.co/px0SQ9H/controllercitas.png" alt="ClienteController.js" width="70%">

### En la carpeta routes se crea el archivo que contendra las rutas para probar las funciones en Postman

#### RoutesCitas.js

<img src="https://i.ibb.co/jTCzfp8/routescitas.png" alt="RutasClientes.js" width="70%">

### Se crea la base de datos por medio de el software XAMPP

<img src="https://i.ibb.co/gMtqgh1/basededatos2.png" alt="MongoDB" width="80%">

### Se realizan las pruebas de los metodos CRUD en Postman

### Metodo POST

![Metodo POST](https://i.ibb.co/h9937g6/Postcitas.png)

### Metodo GET

![Metodo GET](https://i.ibb.co/vzc7gzR/getallcitas.png)

### Metodo GET Id

![Metodo GET id](https://i.ibb.co/q7VTDxJ/getidcitas.png)

### Metodo DELETE

![Metodo DELETE](https://i.ibb.co/yVJtJ8X/deletecitas.png)

### Metodo PATCH

![Metodo PATCH](https://i.ibb.co/hBP0256/patchcitas.png)

## Links

- [Github @NickAndLoopVar](https://github.com/NickAndLoopVar)

- [Repositorio](https://github.com/NickAndLoopVar/backend-con-NodeJS-y-Express.js-MySQL)
