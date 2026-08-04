const express = require("express");

// Crea el enrutador de participantes
const router = express.Router();

// Importa el controlador
const {
    registrarParticipante
} = require("../controllers/participanteController");


// Ruta para registrar un participante
router.post("/", registrarParticipante);


// Exporta el router
module.exports = router;