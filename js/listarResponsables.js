// Se obtienen los elementos necesarios para buscar, modificar y eliminar participantes

// Se obtiene el campo para buscar participantes
const inputBuscarResponsable = document.getElementById("buscarResponsable");
// Se obtiene el botón de Buscar
const btnBuscarResponsable = document.getElementById("btnBuscarResponsable");
// Se obtienen todos los botones Modificar
const botonesModificar = document.querySelectorAll(".boton-modificar");
// Se obtienen todos los botones Eliminar
const botonesEliminar = document.querySelectorAll(".boton-eliminar");
// Se obtienen todas las filas de la tabla
const filasResponsables = document.querySelectorAll(".tabla-responsables tbody tr");

// Funciones

// Función para redirigir al presionar modificar a la página modificarResponsable.html
function modificarResponsableRetorno(){
    window.location.href = "/pages/modificarResponsable.html";
}

//Función para confirmar la eliminación de un responsable
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

// Función para eliminar las tildes de un texto
function quitarTildes(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para buscar Responsable
function buscarResponsableRetorno(){
    const textoBuscar = quitarTildes(inputBuscarResponsable.value.trim().toLowerCase());

    filasResponsables.forEach(function(fila){
        
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
    boton.addEventListener("click", eliminarResponsableRetorno);
});


// Agrega el evento click a todos los botones Modificar
botonesModificar.forEach(function(boton){
    boton.addEventListener("click", modificarResponsableRetorno);
});


// Ejecuta la búsqueda cuando se presiona el botón Buscar
btnBuscarResponsable.addEventListener("click", buscarResponsableRetorno);
