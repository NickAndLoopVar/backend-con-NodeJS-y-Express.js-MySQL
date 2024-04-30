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

<img src="https://i.ibb.co/RHBvMXd/index3.png" alt="index.js" width="70%">

### La carpeta config tendra un archivo llamado db.js donde se crara la conexion con la base de datos:

<img src="https://i.ibb.co/4ZHbHX6/db2.png" alt="db.js" width="70%">

### La carpeta models contendra los esquemas que seran almacenados en la base de datos:

#### Citas.js

<img src="https://i.ibb.co/RBCzx7y/citas.png" alt="Cliente.js" width="70%">

#### Medicamentos.js

<img src="https://i.ibb.co/ChdGhXv/medicamentos.png" alt="Cliente.js" width="70%">

### En la carpeta controllers se crean los archivos que contendran las funciones del CRUD:

#### CitasController.js

<img src="https://i.ibb.co/px0SQ9H/controllercitas.png" alt="ClienteController.js" width="70%">

#### MedicamentoController.js

<img src="https://i.ibb.co/djyfwT0/medicamentoscontroller.png" alt="ClienteController.js" width="70%">

### En la carpeta routes se crean los archivos que contendran las rutas para probar las funciones en Postman

#### Routes_Citas.js

<img src="https://i.ibb.co/jTCzfp8/routescitas.png" alt="RutasClientes.js" width="70%">

#### Routes_Medicamentos.js

<img src="https://i.ibb.co/D7Zjcwz/routesmedicamentos.png" alt="RutasClientes.js" width="70%">

### Se crea la base de datos por medio de el software XAMPP

<img src="https://i.ibb.co/z7xkSyR/db3.png" alt="MySQL" width="80%">

### Se realizan las pruebas de los metodos CRUD en Postman

### Metodo POST

![Metodo POST](https://i.ibb.co/2yTc1gs/postmedicamento.png)

### Metodo GET

![Metodo GET](https://i.ibb.co/0sJ5VR2/getallmedicamentos.png)

### Metodo GET Id

![Metodo GET id](https://i.ibb.co/JRsTw1F/getidmedicamentos.png)

### Metodo DELETE

![Metodo DELETE](https://i.ibb.co/PWLwfwT/deletecitas.png)

### Metodo PATCH

![Metodo PATCH](https://i.ibb.co/T2DZk4w/patchmedicamentos.png)

## Links

- [Github @NickAndLoopVar](https://github.com/NickAndLoopVar)

- [Repositorio](https://github.com/NickAndLoopVar/backend-con-NodeJS-y-Express.js-MySQL)
