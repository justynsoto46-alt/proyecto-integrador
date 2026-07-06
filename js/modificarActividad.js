const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    Swal.fire({

        icon: "success",
        title: "¡Actividad modificada!",
        text: "Los cambios se guardaron correctamente.",
        confirmButtonColor: "#164a98"

    });

});