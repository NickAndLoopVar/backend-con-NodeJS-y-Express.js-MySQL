//Importar el modelo
import Citas from "../models/Citas.js";

//metodos crud

//crear  una funcion para agregar citas

export const agregarCitas = async (req, res) => {
  try {
    await Citas.create(req.body);
    res.json({ msg: "cita creada con exito" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para mostrar todas las citas

export const getAllCitas = async (req, res) => {
  try {
    const citas = await Citas.findAll();
    res.json(citas);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para mostar una cita

export const getCita = async (req, res) => {
  try {
    const cita = await Citas.findAll({
      where: { id: req.params.id },
    });
    res.json(cita[0]);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para modificar cita

export const modificarCita = async (req, res) => {
  try {
    await Citas.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ msg: "Se modifico una cita" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//funcion para eliminar citas

export const deleteCitas = async (req, res) => {
  try {
    await Citas.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: "Se elimino una cita" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
