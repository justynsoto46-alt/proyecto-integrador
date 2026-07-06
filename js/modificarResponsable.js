// 1. Se obtienen los elementos del formulario
const formularioResponsable = document.getElementById("formularioResponsable");

const inputNombreCompleto = document.getElementById("nombreCompleto");
const inputTelefono = document.getElementById("telefono");
const inputInstitucion = document.getElementById("Institucion");
const inputArea = document.getElementById("Area");
const inputBiografia = document.getElementById("biografia");

const btnCancelar = document.getElementById("btnCancelar"); 

// 2. Función para validar todos los campos vacíos
function validarCamposVacios() {
    let error = false;
    
    // Agrupamos los campos en un arreglo (sin el correo)
    const camposObligatorios = [
        inputNombreCompleto, 
        inputTelefono, 
        inputInstitucion, 
        inputArea, 
        inputBiografia
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
function modificarResponsableRetorno() {
    // Ejecutamos las validaciones
    const errorCamposVacios = validarCamposVacios();
    const errorTelefono = validarTelefono();

    // Verificamos que no haya errores
    if (errorCamposVacios === false && errorTelefono === false) {
        
        Swal.fire({
            title: "Cambios guardados",
            text: "La información del Responsable fue actualizada correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {
            window.location.href = "/pages/Responsables/listarResponsables.html";
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
    window.location.href = "/pages/Responsables/listarResponsables.html";
}

// 6. Asignación de Eventos
if(formularioResponsable){
    formularioResponsable.addEventListener("submit", function(evento) {
        evento.preventDefault();
        modificarResponsableRetorno();
    });
}

if(btnCancelar){
    btnCancelar.addEventListener("click", cancelarModificacionRetorno);
}