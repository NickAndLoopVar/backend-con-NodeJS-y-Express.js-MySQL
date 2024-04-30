//importamos la configuracion de la BD
import BD from "../config/db.js";
import { DataTypes } from "sequelize";

const Medicamentos = BD.define("medicamentos", {
  nombre_medicamento: { type: DataTypes.STRING, allowNull: false },
  cantidad: { type: DataTypes.STRING, allowNull: false },
  fecha_vencimiento: { type: DataTypes.STRING, allowNull: false },
  duracion_toma: { type: DataTypes.STRING, allowNull: false },
});

export default Medicamentos;
