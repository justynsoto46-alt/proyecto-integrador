// Será quien reciba la petición del navegador.

// Importa la función del servicio de participantes
const {
    insertarParticipante
} = require("../services/participanteService");

// Importa la función para crear el modelo de participante
const {
    crearParticipante
} = require("../models/participante");


// Función para registrar un participante
async function registrarParticipante(req, res){

    try{

        // Obtiene la base de datos guardada en Express
        const baseDatos = req.app.locals.baseDatos;

        // Crea el participante utilizando la estructura del modelo
        const datosParticipante = crearParticipante(req.body);

        // Envía los datos al servicio para guardarlos en MongoDB
        const resultado = await insertarParticipante(
            baseDatos,
            datosParticipante
        );

        // Responde al navegador indicando que el registro fue exitoso
        res.status(201).json({
            mensaje: "Participante registrado correctamente.",
            idParticipante: resultado.insertedId
        });

    } catch(error){

        console.error("Error al registrar participante:", error);

        res.status(500).json({
            mensaje: "No se pudo registrar el participante."
        });
    }
}


// Exporta las funciones del controlador
module.exports = {
    registrarParticipante
};