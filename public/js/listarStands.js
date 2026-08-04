// Se obtiene el campo para buscar stands
const inputBuscarStand = document.getElementById("buscarStand");
// Se obtienen todos los botones Eliminar
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla (ahora coincide con la clase real: tabla-admin)
const filasStands = document.querySelectorAll(".tabla-admin tbody tr");

// --- Funciones ---

// Función para confirmar la eliminación de un stand
function eliminarStandRetorno() {
    Swal.fire({
        title: "¿Eliminar Stand?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            Swal.fire({
                title: "Stand eliminado",
                text: "El Stand fue eliminado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
    });
}

// Función para eliminar las tildes de un texto (ideal para búsquedas)
function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para buscar Stand en vivo, mientras se escribe
function buscarStandRetorno() {
    const textoBuscar = quitarTildes(inputBuscarStand.value.trim().toLowerCase());

    filasStands.forEach(function(fila) {
        const textoFila = quitarTildes(fila.textContent.toLowerCase());
        fila.style.display = textoFila.includes(textoBuscar) ? "" : "none";
    });
}

// --- Asignación de Eventos ---

if (botonesEliminar.length > 0) {
    botonesEliminar.forEach(function(boton) {
        boton.addEventListener("click", eliminarStandRetorno);
    });
}

// El lápiz de Modificar ya NO necesita JS: su navegación la maneja
// el atributo href="modificarStand.html" directamente en el HTML.

if (inputBuscarStand) {
    // Búsqueda en vivo mientras el usuario escribe (ya no hay botón "Buscar" aparte)
    inputBuscarStand.addEventListener("input", buscarStandRetorno);
}