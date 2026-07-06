// Se obtienen los elementos necesarios para buscar, modificar y eliminar stands

// Se obtiene el campo para buscar stands (ahora sí coincide con el HTML)
const inputBuscarStand = document.getElementById("buscarStand");
// Se obtiene el botón de Buscar
const btnBuscarStand = document.getElementById("btnBuscarStand");
// Se obtienen todos los botones Modificar
const botonesModificar = document.querySelectorAll(".boton-modificar");
// Se obtienen todos los botones Eliminar
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla (ahora coincide con la clase de la tabla)
const filasStands = document.querySelectorAll(".tabla-Stands tbody tr");

// --- Funciones ---

// Función para redirigir al presionar modificar a la página de modificación
function modificarStandRetorno() {
    // Te debe llevar a la pantalla de modificar, no a la de listar
    window.location.href = "/pages/Stands/modificarStands.html";
}

// Función para confirmar la eliminación de un stand
function eliminarStandRetorno() {
    Swal.fire({
        title: "¿Eliminar Stand?", // Corregido "Stabd"
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
            // Nota: Aquí a futuro deberías agregar la lógica para borrar la fila visualmente o de la base de datos
        }
    });
}

// Función para eliminar las tildes de un texto (ideal para búsquedas)
function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para buscar Stand
function buscarStandRetorno() {
    const textoBuscar = quitarTildes(inputBuscarStand.value.trim().toLowerCase());

    filasStands.forEach(function(fila) {
        const textoFila = quitarTildes(fila.textContent.toLowerCase());

        if (textoFila.includes(textoBuscar)) {
            fila.style.display = ""; // Muestra la fila
        } else {
            fila.style.display = "none"; // Oculta la fila
        }
    }); 
}

// --- Asignación de Eventos ---

// Solo agregamos eventos si los botones existen en el DOM
if (botonesEliminar.length > 0) {
    botonesEliminar.forEach(function(boton) {
        boton.addEventListener("click", eliminarStandRetorno);
    });
}

if (botonesModificar.length > 0) {
    botonesModificar.forEach(function(boton) {
        boton.addEventListener("click", modificarStandRetorno);
    });
}

if (btnBuscarStand) {
    // Ejecuta la búsqueda cuando se presiona el botón Buscar
    btnBuscarStand.addEventListener("click", buscarStandRetorno);
    

}
