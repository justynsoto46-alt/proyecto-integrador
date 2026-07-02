// Verifica si existe una sesión activa al cargar la página
if(sessionStorage.getItem("sesionActiva") !== "true"){
    window.location.replace("/pages/DashBoard/iniciarSesion.html");
}

// Verifica sesión cuando se vuelve con la flecha atrás del navegador
window.addEventListener("pageshow", function(){
    if(sessionStorage.getItem("sesionActiva") !== "true"){
        window.location.replace("/pages/DashBoard/iniciarSesion.html");
    }
});

// Se obtiene el enlace de cerrar sesión
const cerrarSesion = document.getElementById("cerrarSesion");
console.log(cerrarSesion);

if(cerrarSesion !== null){

// Evento que ejecuta el cierre de sesión
cerrarSesion.addEventListener("click", function(evento){
    evento.preventDefault();
    Swal.fire({
            title: "Cerrar sesión",
            text: "¿Está seguro que desea cerrar sesión?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí, cerrar sesión",
            cancelButtonText: "Cancelar"
        }).then((resultado) => {

            if(resultado.isConfirmed){
                sessionStorage.removeItem("sesionActiva");
                window.location.replace("/pages/DashBoard/iniciarSesion.html");
            }

        });
    });

}