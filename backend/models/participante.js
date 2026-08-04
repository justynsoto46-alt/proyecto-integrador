// Aquí definiremos cómo luce un participante.

// Función para crear un participante con la estructura definida
function crearParticipante(datos){

    return {
        nombreCompleto: datos.nombreCompleto,
        identificacion: datos.identificacion,
        correoElectronico: datos.correoElectronico,
        telefono: datos.telefono,
        edad: datos.edad,
        profesion: datos.profesion,
        fechaRegistro: new Date()
    };
}

// Exporta la función del modelo
module.exports = {
    crearParticipante
};