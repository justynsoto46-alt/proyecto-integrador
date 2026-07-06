// Se obtienen los elementos del formulario de modificación de participante
const formularioAdministrador = document.getElementById("formularioAdministrador");

const inputNombreCompleto = document.getElementById("nombreCompleto");
const inputCorreo = document.getElementById("correo");


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
    

    if(inputCorreo.value.trim() === ""){
        inputCorreo.classList.add("input-error");
        error = true;
    } else{
        inputCorreo.classList.remove("input-error");
    }


    return error;
}




// Función Principal
function modificarAdministradorRetorno(){

    if(validarCamposVacios() === false){

        Swal.fire({
            title: "Cambios guardados",
            text: "La información del Administrador fue actualizada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {

            window.location.href = "/pages/Administrador/listarAdmin.html";
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
    window.location.href = "/pages/Administrador/listarAdmin.html";
}

// Evento que se ejecuta al enviar el formulario
formularioAdministrador.addEventListener("submit", function(evento){
    evento.preventDefault();
    modificarAdministradorRetorno();
});

// Evento que se ejecuta al presionar cancelar
btnCancelar.addEventListener("click", cancelarModificacionRetorno);