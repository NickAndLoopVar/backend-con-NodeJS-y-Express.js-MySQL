//Importar express
import express from "express";
//Importamos nuestro controlador
import {
  agregarCitas,
  deleteCitas,
  getAllCitas,
  getCita,
  modificarCita,
} from "../controllers/CitasController.js";

const router = express.Router();

router.post("/", agregarCitas);
router.get("/", getAllCitas);
router.get("/:id", getCita);
router.patch("/:id", modificarCita);
router.delete("/:id", deleteCitas);

export default router;
