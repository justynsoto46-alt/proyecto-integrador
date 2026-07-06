
const formularioStand = document.getElementById('formularioStand');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const inputTelefono = document.getElementById('telefono');

// Textarea
const textareaDescripcion = document.getElementById('descripcion');

const selectEvento = document.getElementById('evento');
const selectResponsable = document.getElementById('responsable');

function validarCamposVacios(){
    let error = false;

    if (inputNombre.value.trim() === ""){
        inputNombre.classList.add("input-error");
        error = true;
    } else {
        inputNombre.classList.remove("input-error");
    }

    if (inputCorreo.value.trim() === ""){
        inputCorreo.classList.add("input-error");
        error = true;
    } else {
        inputCorreo.classList.remove("input-error")
    }

    if (inputTelefono.value.trim() ===""){
        inputTelefono.classList.add("input-error")
        error = true;
    } else {
        inputTelefono.classList.remove("input-error");
    }

    return error;
}

function validarTelefono(){
    const telefono = inputTelefono.value.trim();

    // Debe ser exactamente 8 dígitos (solo números)
    const error = !/^\d{8}$/.test(telefono);

    if(error){
        inputTelefono.classList.add("input-error");
    } else {
        inputTelefono.classList.remove("input-error");
    }

    return error;
}

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

// Función principal
function registrarStandRetorno(){

    if(validarCamposVacios() === false &&
       validarCorreo() === false &&
       validarTelefono() === false){

        Swal.fire({
            title: "Registro exitoso",
            text: "Su Registro de Stand fue registrada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {

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
    inputNombre.value = "";
    inputCorreo.value = "";
    inputTelefono.value = "";


    // Elimina el estilo de error de los campos
    inputNombre.classList.remove("input-error");
    inputCorreo.classList.remove("input-error");
    inputTelefono.classList.remove("input-error");
}

// Evento que se ejecuta cuando el usuario intenta registrar el participante
formularioStand.addEventListener("submit", function(evento){

    // Evita que el formulario se envíe automáticamente
    evento.preventDefault();

    // Ejecuta la función principal
    registrarStandRetorno();

});