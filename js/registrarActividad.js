console.log("JS cargado correctamente");

const formulario = document.getElementById("formularioActividad");

const inputNombre = document.getElementById("nombreActividad");
const inputEvento = document.getElementById("eventoAsociado");
const inputCategoria = document.getElementById("categoria");
const inputHoraInicio = document.getElementById("horaInicio");
const inputHoraFin = document.getElementById("horaFin");
const inputUbicacion = document.getElementById("ubicacion");
const inputCupo = document.getElementById("cupo");
const inputResponsable = document.getElementById("responsable");
const inputEstado = document.getElementById("estado");


function validarNombre(){

    if(inputNombre.value.trim().length < 5){

        Swal.fire({
            icon:"error",
            title:"Nombre inválido",
            text:"Ingrese el nombre de la actividad. (Mínimo 5 caracteres)."
        });

        return false;
    }

    return true;
}


function validarEvento(){

    if(inputEvento.value.trim().length < 5){

        Swal.fire({
            icon:"error",
            title:"Evento inválido",
            text:"Ingrese el evento asociado. (Mínimo 5 caracteres)."
        });

        return false;
    }

    return true;
}


function validarCategoria(){

    if(inputCategoria.value === ""){

        Swal.fire({
            icon:"error",
            title:"Categoría requerida",
            text:"Seleccione una categoría."
        });

        return false;
    }

    return true;
}


function validarHoraInicio(){

    if(inputHoraInicio.value === ""){

        Swal.fire({
            icon:"error",
            title:"Hora requerida",
            text:"Seleccione la hora de inicio."
        });

        return false;
    }

    return true;
}


function validarHoraFin(){

    if(inputHoraFin.value === ""){

        Swal.fire({
            icon:"error",
            title:"Hora requerida",
            text:"Seleccione la hora de finalización."
        });

        return false;
    }

    if(inputHoraFin.value <= inputHoraInicio.value){

        Swal.fire({
            icon:"error",
            title:"Horario inválido",
            text:"La hora de finalización debe ser posterior a la hora de inicio."
        });

        return false;
    }

    return true;
}


function validarUbicacion(){

    if(inputUbicacion.value === ""){

        Swal.fire({
            icon:"error",
            title:"Ubicación requerida",
            text:"Seleccione la ubicación."
        });

        return false;
    }

    return true;
}


function validarResponsable(){

    if(inputResponsable.value === ""){

        Swal.fire({
            icon:"error",
            title:"Responsable requerido",
            text:"Seleccione un responsable."
        });

        return false;
    }

    return true;
}


function validarCupo(){

    if(inputCupo.value === "" || Number(inputCupo.value) <= 0){

        Swal.fire({
            icon:"error",
            title:"Cupo inválido",
            text:"Ingrese un cupo máximo mayor a 0."
        });

        return false;
    }

    return true;
}


function validarEstado(){

    if(inputEstado.value === ""){

        Swal.fire({
            icon:"error",
            title:"Estado requerido",
            text:"Seleccione un estado."
        });

        return false;
    }

    return true;
}


function limpiarFormulario(){

    formulario.reset();

}


function registrarActividad(){

    if(
        validarNombre() &&
        validarEvento() &&
        validarCategoria() &&
        validarHoraInicio() &&
        validarHoraFin() &&
        validarUbicacion() &&
        validarResponsable() &&
        validarCupo() &&
        validarEstado()
    ){

        Swal.fire({

            icon:"success",

            title:"Actividad registrada",

            text:"La actividad fue registrada correctamente.",

            confirmButtonText:"Aceptar"

        });

        limpiarFormulario();

    }

}

formulario.addEventListener("submit", function(evento){

    evento.preventDefault();

    registrarActividad();

});