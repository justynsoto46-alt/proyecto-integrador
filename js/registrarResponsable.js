const formularioResponsable = document.getElementById("formularioResponsable");
const inputNombre = document.getElementById("Nombre");
const inputCorreo = document.getElementById("correo");
const inputInstitucion = document.getElementById("institucion");
const inputBiografia = document.getElementById("biografia");

const btnAgregarTelefono = document.getElementById("btn-mastef");
const contenedorTelefonos = document.getElementById("contenedor-telefonos");

function validarCamposVacios() {
    let error = false;
    // Agrupamos los campos fijos en un arreglo para validarlos más rápido
    const campos = [inputNombre, inputCorreo, inputInstitucion, inputBiografia];

    campos.forEach(function(campo) {
        if(campo.value.trim() === "") {
            campo.classList.add("input-error");
            error = true;
        } else {
            campo.classList.remove("input-error");
        }
    });

    return error;
}

function validarTelefonos() {
    let error = false;
    // Seleccionamos TODOS los inputs de teléfono (los originales y los creados dinámicamente)
    const inputsTelefonos = document.querySelectorAll("input[type='tel']");

    inputsTelefonos.forEach(function(inputTel) {
        if(inputTel.value.trim() === "") {
            inputTel.classList.add("input-error");
            error = true;
        } else {
            inputTel.classList.remove("input-error");
        }
    });

    return error;
}

function validarCorreo() {
    let error = false;
    let correo = inputCorreo.value.trim();

    if(correo.includes("@") && correo.includes(".")) {
        inputCorreo.classList.remove("input-error");
    } else {
        inputCorreo.classList.add("input-error");
        error = true;
    }
    return error;
}

function registrarResponsableRetorno() {
    // Ejecutamos todas las validaciones y guardamos sus resultados
    let errorVacios = validarCamposVacios();
    let errorTelefonos = validarTelefonos();
    let errorCorreo = validarCorreo();

    // Si ALGUNA de las validaciones devuelve 'true' (hay error), detenemos el proceso
    if(errorVacios || errorTelefonos || errorCorreo) {
        
        Swal.fire({
            title: "Datos incompletos o inválidos",
            text: "Por favor revise los datos requeridos.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });

    } else {
        // Si todo está bien (ninguna función devolvió error)
        Swal.fire({
            title: "¡Responsable Creado!",
            text: "El usuario ha sido registrado exitosamente.",
            icon: "success",
            confirmButtonText: "Ir a la lista"
        }).then((resultado) => {
            if(resultado.isConfirmed) {
                window.location.href = "/pages/listarResponsables.html";
            }
        });
    }
}

// Escuchamos el evento de enviar del formulario
formularioResponsable.addEventListener("submit", function(evento) {
    evento.preventDefault(); 
    registrarResponsableRetorno();
});

btnAgregarTelefono.addEventListener("click", function() {
    // a. Creamos la nueva etiqueta <label>
    const nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = "Teléfono Adicional ";

    // b. Creamos el nuevo campo <input>
    const nuevoInput = document.createElement("input");
    nuevoInput.type = "tel";
    nuevoInput.name = "telefono[]"; // Usamos [] por si el backend necesita un array
    nuevoInput.placeholder = "8888-8888";
    
    // c. (Opcional) Podemos hacer que los adicionales no sean estrictamente obligatorios
    // Si quieres que sí lo sean, descomenta la siguiente línea:
    // nuevoInput.required = true; 

    // d. Metemos el <input> dentro del <label> (para mantener tu estilo CSS actual)
    nuevoLabel.appendChild(nuevoInput);

    // e. Insertamos el <label> completo dentro de nuestro contenedor de teléfonos
    contenedorTelefonos.appendChild(nuevoLabel);
});