// Se obtienen los elementos del formulario de registro de participante
const formulario = document.getElementById("formulario");
const inputNombreCompleto = document.getElementById("nombreCompleto");
const inputIdentificacion = document.getElementById("identificacion");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputEdad = document.getElementById("edad");
const inputProfesion = document.getElementById("profesion");

// Función para validar los campos obligatorios
function validarCamposVacios(){

    let error = false;

    // Nombre completo
    if(inputNombreCompleto.value.trim() === ""){
        inputNombreCompleto.classList.add("input-error");
        error = true;
    } else{
        inputNombreCompleto.classList.remove("input-error");
    }

    // Identificación
    if(inputIdentificacion.value.trim() === ""){
        inputIdentificacion.classList.add("input-error");
        error = true;
    } else{
        inputIdentificacion.classList.remove("input-error");
    }

    // Correo electrónico
    if(inputCorreo.value.trim() === ""){
        inputCorreo.classList.add("input-error");
        error = true;
    } else{
        inputCorreo.classList.remove("input-error");
    }

    // Teléfono
    if(inputTelefono.value.trim() === ""){
        inputTelefono.classList.add("input-error");
        error = true;
    } else{
        inputTelefono.classList.remove("input-error");
    }

    return error;
}

// Función para validar el formato del correo electrónico
function validarCorreo(){

    let error = false;
    const correo = inputCorreo.value.trim();

    if(correo.includes("@") && correo.includes(".")){
        inputCorreo.classList.remove("input-error");
    } else{
        inputCorreo.classList.add("input-error");
        error = true;
    }

    return error;
}

// Función para validar el teléfono
function validarTelefono(){

    let error = false;
    const telefono = inputTelefono.value.trim();

    // Debe contener únicamente números
    if(isNaN(telefono)){
        error = true;
    }

    // Debe contener exactamente 8 dígitos
    if(telefono.length !== 8){
        error = true;
    }

    if(error){
        inputTelefono.classList.add("input-error");
    } else{
        inputTelefono.classList.remove("input-error");
    }

    return error;
}

// Función para validar la edad mínima del participante
function validarEdad(){

    let error = false;
    const edad = inputEdad.value.trim();

    // La edad es opcional, pero si se ingresa debe ser válida
    if(edad !== ""){

        if(isNaN(edad) || Number(edad) < 16){
            inputEdad.classList.add("input-error");
            error = true;
        } else{
            inputEdad.classList.remove("input-error");
        }

    } else{
        inputEdad.classList.remove("input-error");
    }

    return error;

}

// Función principal
function registrarParticipanteRetorno(){

    if(validarCamposVacios() === false &&
       validarCorreo() === false &&
       validarTelefono() === false &&
       validarEdad() === false){

        Swal.fire({
            title: "Datos registrados correctamente.",
            text: "Ahora seleccione las actividades a las que desea inscribirse.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            window.location.href = "/pages/Inscripciones/gestionarInscripcionUsuario.html";

        limpiarFormulario();

        });
    }
    else{
        Swal.fire({
            title: "No se puede realizar el registro",
            text: "Por favor revise los campos marcados",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Función para limpiar el formulario
function limpiarFormulario(){

    // Limpia los campos de texto
    inputNombreCompleto.value = "";
    inputIdentificacion.value = "";
    inputCorreo.value = "";
    inputTelefono.value = "";
    inputEdad.value = "";
    inputProfesion.value = "";


    // Elimina el estilo de error de los campos
    inputNombreCompleto.classList.remove("input-error");
    inputIdentificacion.classList.remove("input-error");
    inputCorreo.classList.remove("input-error");
    inputTelefono.classList.remove("input-error");
}

// Evento que se ejecuta cuando el usuario intenta registrar el participante
formulario.addEventListener("submit", function(evento){

    // Evita que el formulario se envíe automáticamente
    evento.preventDefault();

    // Ejecuta la función principal
    registrarParticipanteRetorno();

});