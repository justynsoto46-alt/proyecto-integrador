// Función para crear un objeto participante en el frontend
export function crearParticipante(
    nombreCompleto,
    identificacion,
    correoElectronico,
    telefono,
    edad,
    profesion,
    id = ""
) {

    // Devuelve un objeto con la información del participante
    return {

        // Datos personales
        nombreCompleto,
        identificacion,
        correoElectronico,
        telefono,

        // Convierte la edad a número. Si no se ingresa, guarda null.
        edad: edad === "" ? null : Number(edad),

        profesion,

        // Identificador utilizado cuando el participante ya existe
        id,

        // Función que devuelve únicamente los datos
        // necesarios para enviarlos al backend
        obtenerDatosParaGuardar: function () {

            return {

                nombreCompleto: this.nombreCompleto,
                identificacion: this.identificacion,
                correoElectronico: this.correoElectronico,
                telefono: this.telefono,
                edad: this.edad,
                profesion: this.profesion

            };

        },

        // Función que devuelve únicamente los datos
        // permitidos para modificar
        obtenerDatosParaModificar: function () {

            return {
                nombreCompleto: this.nombreCompleto,
                telefono: this.telefono,
                edad: this.edad,
                profesion: this.profesion
            };

        }

    };

}