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
    const telefono = inputTelefono.value.trim();

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

// Función para validar la edad mínima del participante
function validarEdad(){

    let error = false;
    const edad = inputEdad.value.trim();

    // La edad es opcional, pero si se ingresa debe cumplir la edad mínima
    if(edad !== ""){

        if(isNaN(edad) || Number(edad) < 15){
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

// Función Principal
function modificarParticipanteRetorno(){

    if(validarCamposVacios() === false &&
       validarTelefono() === false &&
       validarEdad() === false){

        Swal.fire({
            title: "Cambios guardados",
            text: "La información del participante fue actualizada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {

            window.location.href = "/pages/Participantes/listarParticipantes.html";
        });

    } else{

        Swal.fire({
            title: "No se pueden guardar los cambios",
            text: "Por favor revise los campos marcados.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Función para cancelar la modificación y volver al listado
function cancelarModificacionRetorno(){
    window.location.href = "/pages/Participantes/listarParticipantes.html";
}

// Evento que se ejecuta al enviar el formulario
formularioParticipante.addEventListener("submit", function(evento){
    evento.preventDefault();
    modificarParticipanteRetorno();
});

// Evento que se ejecuta al presionar cancelar
btnCancelar.addEventListener("click", cancelarModificacionRetorno);