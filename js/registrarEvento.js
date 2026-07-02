console.log("JS cargado correctamente");

const formulario = document.getElementById("formularioEvento");

const inputNombre = document.getElementById("nombreEvento");
const inputDescripcion = document.getElementById("descripcion");
const inputFechaInicio = document.getElementById("fechaInicio");
const inputFechaFin = document.getElementById("fechaFin");
const inputUbicacion = document.getElementById("ubicacion");
const inputEstado = document.getElementById("estado");


function validarFechas(){

    if(inputFechaFin.value < inputFechaInicio.value){

        Swal.fire({
            icon:"error",
            title:"Fechas inválidas",
            text:"La fecha de finalización no puede ser menor que la fecha de inicio."
        });

        return false;
    }

    return true;
}


function limpiarFormulario(){

    formulario.reset();

}

function registrarEvento(){

    if(validarFechas()){

        Swal.fire({

            icon:"success",

            title:"Evento registrado",

            text:"El evento fue registrado correctamente.",

            confirmButtonText:"Aceptar"

        });

        limpiarFormulario();

    }

}

formulario.addEventListener("submit", function(evento){

    evento.preventDefault();

    registrarEvento();

});