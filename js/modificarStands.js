// 1. Se obtienen los elementos del formulario
const formularioStand = document.getElementById("formularioStand");

const inputEvento = document.getElementById("evento");
const inputNombre = document.getElementById("Nombre");
const inputEncargado = document.getElementById("encargado");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");

const btnCancelar = document.getElementById("btnCancelar"); 

// 2. Función para validar todos los campos vacíos
function validarCamposVacios() {
    let error = false;
    
    // Agrupamos los campos del Stand en un arreglo
    const camposObligatorios = [
        inputEvento, 
        inputNombre, 
        inputEncargado, 
        inputCorreo, 
        inputTelefono
    ];

    camposObligatorios.forEach(campo => {
        if (campo) {
            if (campo.value.trim() === "") {
                campo.classList.add("input-error");
                error = true;
            } else {
                campo.classList.remove("input-error");
            }
        }
    });

    return error;
}

// 3. Función para validar el teléfono
function validarTelefono() {
    let error = false;
    const telefono = inputTelefono.value.trim();

    // Verifica que el teléfono contenga solo números o que no tenga exactamente 8 dígitos
    if (isNaN(telefono) || telefono.length !== 8) {
        inputTelefono.classList.add("input-error");
        error = true;
    } else {
        inputTelefono.classList.remove("input-error");
    }
    
    return error;
}

// 4. Función Principal
function modificarStandRetorno() {
    // Ejecutamos las validaciones
    const errorCamposVacios = validarCamposVacios();
    const errorTelefono = validarTelefono();

    // Verificamos que no haya errores
    if (errorCamposVacios === false && errorTelefono === false) {
        
        Swal.fire({
            title: "Cambios guardados",
            text: "La información del Stand fue actualizada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            // Redirige a la lista de stands
            window.location.href = "/pages/Stands/listarStands.html";
        });

    } else {
        Swal.fire({
            title: "No se pueden guardar los cambios",
            text: "Por favor revise los campos marcados en rojo.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// 5. Función para cancelar la modificación y volver al listado
function cancelarModificacionRetorno() {
    // Redirige a la lista de stands
    window.location.href = "/pages/Stands/listarStands.html";
}

// 6. Asignación de Eventos
if(formularioStand){
    formularioStand.addEventListener("submit", function(evento) {
        evento.preventDefault();
        modificarStandRetorno();
    });
}

if(btnCancelar){
    btnCancelar.addEventListener("click", cancelarModificacionRetorno);
}