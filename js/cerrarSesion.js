// Verifica si existe una sesión activa
if(sessionStorage.getItem("sesionActiva") !== "true"){
    window.location.href = "/pages/iniciarSesion.html";
}

// Se obtiene el enlace de cerrar sesión
const cerrarSesion = document.getElementById("cerrarSesion");

// Función para cerrar la sesión del administrador
function cerrarSesionRetorno(){

    Swal.fire({
        title: "Cerrar sesión",
        text: "¿Está seguro que desea cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if(resultado.isConfirmed){

            // Elimina la sesión activa
            sessionStorage.removeItem("sesionActiva");

            // Redirige al inicio de sesión
            window.location.href = "/pages/iniciarSesion.html";
        }

    });
}

// Evento que ejecuta el cierre de sesión
cerrarSesion.addEventListener("click", function(evento){
    evento.preventDefault();
    cerrarSesionRetorno();
});