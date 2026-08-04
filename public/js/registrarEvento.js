console.log("JS cargado correctamente");

const formulario = document.getElementById("formularioEvento");

const inputNombre = document.getElementById("nombreEvento");
const inputDescripcion = document.getElementById("descripcion");
const inputFechaInicio = document.getElementById("fechaInicio");
const inputFechaFin = document.getElementById("fechaFin");
const inputUbicacion = document.getElementById("ubicacion");
const inputEstado = document.getElementById("estado");


function validarNombre(){

    console.log("Validando nombre:", inputNombre.value, "longitud:", inputNombre.value.trim().length);

    if(inputNombre.value.trim().length < 5){

        Swal.fire({
            icon:"error",
            title:"Nombre inválido",
            text:"Ingrese el nombre del evento. (Mínimo 5 caracteres)."
        });

        return false;
    }

    return true;
}


function validarDescripcion(){

    const longitud = inputDescripcion.value.trim().length;

    if(longitud < 10 || longitud > 1000){

        Swal.fire({
            icon:"error",
            title:"Descripción inválida",
            text:"La descripción debe contener entre 10 y 1000 caracteres."
        });

        return false;
    }

    return true;
}


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

    if(validarNombre() && validarDescripcion() && validarFechas()){

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