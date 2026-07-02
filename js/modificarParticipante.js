// Se obtienen los elementos del formulario de modificación de participante
const formularioParticipante = document.getElementById("formularioParticipante");

const inputNombreCompleto = document.getElementById("nombreCompleto");
const inputIdentificacion = document.getElementById("identificacion");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputEdad = document.getElementById("edad");
const inputProfesion = document.getElementById("profesion");

const btnCancelar = document.getElementById("btnCancelar");

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

    // Teléfono
    if(inputTelefono.value.trim() === ""){
        inputTelefono.classList.add("input-error");
        error = true;
    } else{
        inputTelefono.classList.remove("input-error");
    }

    return error;
}

// Función para validar el teléfono
function validarTelefono(){

    let error = false;
    let telefono = inputTelefono.value.trim();

    // Verifica que el teléfono contenga solo números
    if(isNaN(telefono)){
        error = true;
    }

    // Verifica que el teléfono tenga exactamente 8 dígitos
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