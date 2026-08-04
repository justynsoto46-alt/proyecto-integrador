//Aquí irá toda la lógica para:
// insertar
// buscar
// modificar
// eliminar

// Su trabajo será hablar con MongoDB.

// Nombre de la colección
const COLECCION = "participantes";

// Inserta un participante en MongoDB
async function insertarParticipante(baseDatos, participante){

    const coleccionParticipantes = baseDatos.collection(COLECCION);

    const resultado = await coleccionParticipantes.insertOne(participante);

    return resultado;
}

module.exports = {
    insertarParticipante
};