// Dirección base de la API de participantes
const URL_PARTICIPANTES = "/api/participantes";


// Función para registrar un participante
export async function registrarParticipante(participante){

    // Envía la información al backend
    const respuesta = await fetch(URL_PARTICIPANTES,{

        method: "POST",

        headers:{
            "Content-Type":"application/json"
        },

        // Convierte el objeto participante a formato JSON
        body: JSON.stringify(
            participante.obtenerDatosParaGuardar()
        )

    });

    // Convierte la respuesta del servidor a un objeto JavaScript
    const datosRespuesta = await respuesta.json();

    // Devuelve tanto la respuesta como la información recibida
    return{
        respuesta,
        datosRespuesta
    };

}

// Función para obtener todos los participantes
export async function obtenerParticipantes(){

    // Solicita al backend la lista de participantes
    const respuesta = await fetch(URL_PARTICIPANTES);

    // Convierte la respuesta a un objeto JavaScript
    const datosRespuesta =
        await respuesta.json();

    // Devuelve la respuesta y los datos obtenidos
    return{
        respuesta,
        datosRespuesta
    };

}

// Función para eliminar un participante por su identificador
export async function eliminarParticipante(idParticipante){

    // Envía la solicitud DELETE al backend
    const respuesta = await fetch(
        `${URL_PARTICIPANTES}/${idParticipante}`,
        {
            method: "DELETE"
        }
    );

    // Convierte la respuesta del servidor a un objeto JavaScript
    const datosRespuesta =
        await respuesta.json();

    // Devuelve la respuesta y los datos recibidos
    return{
        respuesta,
        datosRespuesta
    };
}

// Función para obtener un participante por su identificador
export async function obtenerParticipantePorId(idParticipante){

    // Solicita al backend la información del participante
    const respuesta = await fetch(
        `${URL_PARTICIPANTES}/${idParticipante}`
    );

    // Convierte la respuesta del servidor a un objeto JavaScript
    const datosRespuesta =
        await respuesta.json();

    // Devuelve la respuesta y los datos recibidos
    return{
        respuesta,
        datosRespuesta
    };
}


// Función para modificar un participante
export async function modificarParticipante(
    idParticipante,
    participante
){

    // Envía los cambios al backend
    const respuesta = await fetch(
        `${URL_PARTICIPANTES}/${idParticipante}`,
        {
            method: "PUT",

            headers:{
                "Content-Type":"application/json"
            },

            // Envía únicamente los datos permitidos para modificar
            body: JSON.stringify(
                participante.obtenerDatosParaModificar()
            )
        }
    );

    // Convierte la respuesta del servidor a un objeto JavaScript
    const datosRespuesta =
        await respuesta.json();

    // Devuelve la respuesta y los datos recibidos
    return{
        respuesta,
        datosRespuesta
    };
}