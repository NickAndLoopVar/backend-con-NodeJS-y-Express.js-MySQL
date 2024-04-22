import express from "express";
import cors from "cors";
//importamos la configuracion de la BD
import BD from "../config/db.js";
import Routes_Citas from "../routes/Routes_Citas.js";
//Importamos el archivo de las rutas

//definimos la variable app para trabajar con expres
const app = express();
app.use(cors());
app.use(express.json());
app.use("/citas", Routes_Citas);
//app.use("/citas",);

//Autenticacion BD
try {
  await BD.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//muestra mensaje en el navegador
app.get("/", (req, res) => {
  res.send("hola mundo");
});

//congiguracion
app.listen(5000, () => {
  console.log("El servidor esta corriendo en http://localhost:5000");
});
