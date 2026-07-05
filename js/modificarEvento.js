console.log("JS cargado correctamente");

const formulario = document.getElementById("formularioModificarEvento");

const inputNombre = document.getElementById("nombreEvento");
const inputDescripcion = document.getElementById("descripcion");
const inputFechaInicio = document.getElementById("fechaInicio");
const inputFechaFinal = document.getElementById("fechaFinal");
const inputUbicacion = document.getElementById("ubicacion");
const inputEstado = document.getElementById("estado");
const inputImagen = document.getElementById("imagenEvento");


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


function validarImagen(){

    if(inputImagen.files.length === 0){

        return true;

    }

    const nombreArchivo = inputImagen.files[0].name.toLowerCase();

    console.log("Archivo seleccionado:", nombreArchivo);

    const formatosValidos = [".jpg", ".jpeg", ".png"];

    const esValido = formatosValidos.some(function(formato){
        return nombreArchivo.endsWith(formato);
    });

    console.log("¿Es válido?:", esValido);

    if(!esValido){

        Swal.fire({
            icon:"error",
            title:"Formato inválido",
            text:"Seleccione una imagen en formato JPG, JPEG o PNG."
        });

        return false;
    }

    return true;
}


function guardarCambios(){

    if(validarFechas() && validarImagen()){

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