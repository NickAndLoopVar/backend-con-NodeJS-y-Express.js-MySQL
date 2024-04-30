//Importar el modelo
import Medicamentos from "../models/Medicamentos.js";
//metodos crud

//crear  una funcion para agregar medicamentos

export const recetarMedicamentos = async (req, res) => {
  try {
    await Medicamentos.create(req.body);
    res.json({ msg: "Receta creada con exito" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para mostrar todas los medicamentos

export const getAllMedicamentos = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findAll();
    res.json(medicamento);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para mostar un medicamento

export const getMedicamento = async (req, res) => {
  try {
    const medicamento = await Medicamentos.findAll({
      where: { id: req.params.id },
    });
    res.json(medicamento[0]);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para modificar medicamento

export const modificarMedicamento = async (req, res) => {
  try {
    await Medicamentos.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ msg: "Se modifico una receta" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para eliminar medicamentos

export const deleteMedicamento = async (req, res) => {
  try {
    await Medicamentos.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: "Se elimino un medicamento" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
