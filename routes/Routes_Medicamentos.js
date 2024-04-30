//Importar express
import express from "express";
//Importamos nuestro controlador
import {
  recetarMedicamentos,
  deleteMedicamento,
  getAllMedicamentos,
  getMedicamento,
  modificarMedicamento,
} from "../controllers/MedicamentosController.js";

const router = express.Router();

router.post("/", recetarMedicamentos);
router.get("/", getAllMedicamentos);
router.get("/:id", getMedicamento);
router.patch("/:id", modificarMedicamento);
router.delete("/:id", deleteMedicamento);

export default router;
