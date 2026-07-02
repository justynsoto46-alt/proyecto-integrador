// Se obtienen los elementos necesarios para buscar, modificar y eliminar administradores

// Se obtiene el campo para buscar administrador
const inputBuscarAdmin = document.getElementById("buscarAdmin");
// Se obtiene el botón de Buscar
const btnBuscarAdmin = document.getElementById("btnBuscarAdmin");
// Se obtienen todos los botones Modificar
const botonesModificar = document.querySelectorAll(".boton-modificar");
// Se obtienen todos los botones Eliminar
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla
const filasAdmin = document.querySelectorAll(".tabla-admin tbody tr");

// Funciones

// Función para redirigir al presionar modificar a la página modificarAdministrador.html
function modificarAdminRetorno(){
    window.location.href = "/pages/modificarAdministrador.html";
}

// Función para confirmar la eliminación de un administrador
function eliminarAdminRetorno(){

    Swal.fire({
        title: "¿Eliminar Administrador?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if(resultado.isConfirmed){

            Swal.fire({
                title: "Administrador eliminado",
                text: "El Administrador fue eliminado correctamente.",
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

// Función para buscar Administrador
function buscarAdminRetorno(){
    // Se corrigió para usar la variable correcta (inputBuscarAdmin)
    const textoBuscar = quitarTildes(inputBuscarAdmin.value.trim().toLowerCase());

    // Se corrigió para usar la variable correcta (filasAdmin)
    filasAdmin.forEach(function(fila){
        
        const textoFila = quitarTildes(fila.textContent.toLowerCase());

        if(textoFila.includes(textoBuscar)){
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
        
    }); 
}

// Agrega el evento click a todos los botones Eliminar
botonesEliminar.forEach(function(boton){
    boton.addEventListener("click", eliminarAdminRetorno); // Actualizado al nombre correcto
});


// Agrega el evento click a todos los botones Modificar
botonesModificar.forEach(function(boton){
    boton.addEventListener("click", modificarAdminRetorno); // Actualizado al nombre correcto
});


// Ejecuta la búsqueda cuando se presiona el botón Buscar
btnBuscarAdmin.addEventListener("click", buscarAdminRetorno); 