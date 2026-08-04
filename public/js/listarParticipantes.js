// Se obtienen los elementos necesarios para buscar, modificar y eliminar participantes

// Se obtiene el campo para buscar participantes
const inputBuscarParticipante = document.getElementById("buscarParticipante");
// Se obtiene el botón de Buscar
const btnBuscarParticipante = document.getElementById("btnBuscarParticipante");
// Se obtienen todos los botones Modificar
const botonesModificar = document.querySelectorAll(".boton-modificar");
// Se obtienen todos los botones Eliminar
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla
const filasParticipantes = document.querySelectorAll(".tabla-participantes tbody tr");

// Funciones

// Función para redirigir al presionar modificar a la página modificarParticipante.html
function modificarParticipanteRetorno(){
    window.location.href = "/pages/Participantes/modificarParticipante.html";
}

// Función para confirmar la eliminación de un participante
function eliminarParticipanteRetorno(){

    Swal.fire({
        title: "¿Eliminar participante?",
        text: "El participante podría tener inscripciones activas. Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if(resultado.isConfirmed){

            Swal.fire({
                title: "Participante eliminado",
                text: "El participante fue eliminado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
    });
}

// Función para eliminar las tildes de un texto
function quitarTildes(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para buscar participantes
function buscarParticipanteRetorno(){

    const textoBuscar = quitarTildes(
    inputBuscarParticipante.value.trim().toLowerCase());

    // Si el campo está vacío, muestra nuevamente todos los participantes
    if(textoBuscar === ""){

        filasParticipantes.forEach(function(fila){
            fila.style.display = "";
        });

        return;
    }

    // Valida que el texto de búsqueda tenga al menos 3 caracteres
    if(textoBuscar.length < 3){

        Swal.fire({
            title: "Búsqueda inválida",
            text: "Ingrese al menos 3 caracteres para realizar la búsqueda.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    // Recorre todas las filas de la tabla
    filasParticipantes.forEach(function(fila){

        const textoFila = quitarTildes(
            fila.textContent.toLowerCase());

        // Verifica si el texto buscado se encuentra dentro de la fila
        if(textoFila.includes(textoBuscar)){

            // Hace que la fila permanezca visible
            fila.style.display = "";

        } else {

            // Oculta la fila
            fila.style.display = "none";
        }
    });
}


// Agrega el evento click a todos los botones Eliminar
botonesEliminar.forEach(function(boton){
    boton.addEventListener("click", eliminarParticipanteRetorno);
});


// Agrega el evento click a todos los botones Modificar
botonesModificar.forEach(function(boton){
    boton.addEventListener("click", modificarParticipanteRetorno);
});


// Ejecuta la búsqueda cuando se presiona el botón Buscar
btnBuscarParticipante.addEventListener("click", buscarParticipanteRetorno);