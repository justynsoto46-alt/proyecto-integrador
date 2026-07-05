console.log("JS cargado correctamente");

const formulario = document.getElementById("formularioModificarEvento");

const inputNombre = document.getElementById("nombreEvento");
const inputDescripcion = document.getElementById("descripcion");
const inputFechaInicio = document.getElementById("fechaInicio");
const inputFechaFinal = document.getElementById("fechaFinal");
const inputUbicacion = document.getElementById("ubicacion");
const inputEstado = document.getElementById("estado");


function validarFechas(){

    if(inputFechaFinal.value < inputFechaInicio.value){

        Swal.fire({
            icon:"error",
            title:"Fechas inválidas",
            text:"La fecha de finalización no puede ser menor que la fecha de inicio."
        });

        return false;
    }

    return true;
}


function guardarCambios(){

    if(validarFechas()){

        Swal.fire({

            icon:"success",

            title:"Cambios guardados",

            text:"El evento fue modificado correctamente.",

            confirmButtonText:"Aceptar"

        });

    }

}

formulario.addEventListener("submit", function(evento){

    evento.preventDefault();

    guardarCambios();

});