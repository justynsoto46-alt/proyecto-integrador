// Se obtienen los elementos necesarios para buscar, modificar y eliminar participantes

// Se obtiene el campo para buscar participantes
let inputBuscarResponsable = document.getElementById("buscarResponsable");
// Se obtiene el botón de Buscar
let btnBuscarResponsable = document.getElementById("btnBuscarResponsable");
// Se obtienen todos los botones Modificar
let botonesModificar = document.querySelectorAll(".boton-modificar");
// Se obtienen todos los botones Eliminar
let botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla
let filasResponsables = document.querySelectorAll(".tabla-responsables tbody tr");

// Funciones

// Función para redirigir al presionar modificar a la página modificarResponsable.html
function modificarResponsableRetorno(){
    window.location.href = "/pages/modificarResponsable.html";
}

//eFunción para confirmar la eliminación de un participante
function eliminarResponsableRetorno(){

    Swal.fire({
        title: "¿Eliminar Responsable?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if(resultado.isConfirmed){

            Swal.fire({
                title: "Responsable eliminado",
                text: "El Responsable fue eliminado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
    });
}

// Función para buscar Responsable
function buscarResponsableRetorno(){
    let textoBuscar = inputBuscarResponsable.value.trim().toLowerCase();

    filasResponsables.forEach(function(fila){
        
        let textoFila = fila.textContent.toLowerCase();

        if(textoFila.includes(textoBuscar)){
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
        
    }); 
}



// Agrega el evento click a todos los botones Eliminar
botonesEliminar.forEach(function(boton){
    boton.addEventListener("click", eliminarResponsableRetorno);
});


// Agrega el evento click a todos los botones Modificar
botonesModificar.forEach(function(boton){
    boton.addEventListener("click", modificarResponsableRetorno);
});


// Ejecuta la búsqueda cuando se presiona el botón Buscar
btnBuscarResponsable.addEventListener("click", buscarResponsableRetorno);