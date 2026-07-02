// Se obtienen los elementos necesarios para consultar participantes por actividad
const selectActividad = document.getElementById("actividad");
const btnConsultar = document.getElementById("btnConsultar");
const tablaParticipantes = document.getElementById("tablaParticipantes");
const filasParticipantes = document.querySelectorAll(".fila-actividad");


// Función para consultar los participantes según la actividad seleccionada
function consultarParticipantesRetorno(){

    let actividadSeleccionada = selectActividad.value;

    if(actividadSeleccionada === ""){

        // Oculta la tabla si no se selecciona ninguna actividad
        tablaParticipantes.style.display = "none";

        Swal.fire({
            title: "Seleccione una actividad",
            text: "Debe seleccionar una actividad para consultar los participantes inscritos.",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
        return;
    }

    // Muestra la tabla
    tablaParticipantes.style.display = "table";

    filasParticipantes.forEach(function(fila){

        if(fila.classList.contains(actividadSeleccionada)){
            fila.style.display = "";
        }else{
            fila.style.display = "none";
        }
    });
}

// Oculta la tabla al cargar la página
tablaParticipantes.style.display = "none";

// Evento que ejecuta la consulta de participantes
btnConsultar.addEventListener("click", function(){
    consultarParticipantesRetorno();
});