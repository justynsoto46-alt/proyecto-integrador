console.log("JS cargado correctamente");

const inputBuscar = document.getElementById("buscarEvento");
const selectEstado = document.getElementById("filtroEstado");
const filasEventos = document.querySelectorAll("#tablaEventos tbody tr");
const mensajeSinResultados = document.getElementById("sinResultados");


function aplicarFiltros(){

    const texto = inputBuscar.value.trim().toLowerCase();
    const estado = selectEstado.value;
    let coincidencias = 0;

    filasEventos.forEach(function(fila){

        const nombre = fila.children[0].textContent.toLowerCase();
        const coincide = nombre.includes(texto) && (estado === "" || fila.dataset.estado === estado);

        fila.style.display = coincide ? "" : "none";

        if(coincide){
            coincidencias++;
        }

    });

    mensajeSinResultados.style.display = coincidencias === 0 ? "block" : "none";

}

function cancelarEvento(boton){

    const fila = boton.closest("tr");
    const nombreEvento = fila.children[0].textContent;

    Swal.fire({
        icon:"warning",
        title:"¿Cancelar evento?",
        text:"Se cancelará \"" + nombreEvento + "\" y no se permitirán nuevas inscripciones.",
        showCancelButton:true,
        confirmButtonText:"Sí, cancelar",
        cancelButtonText:"Volver"
    }).then(function(resultado){

        if(resultado.isConfirmed){

            const celdaEstado = fila.querySelector("td:nth-child(5) span");

            fila.dataset.estado = "Cancelado";
            celdaEstado.textContent = "Cancelado";
            celdaEstado.className = "badge badge-cancelado";
            boton.disabled = true;

            Swal.fire({icon:"success", title:"Evento cancelado", text:"El evento fue cancelado correctamente."});

        }

    });

}


inputBuscar.addEventListener("input", aplicarFiltros);
selectEstado.addEventListener("change", aplicarFiltros);

document.querySelectorAll(".btn-cancelar").forEach(function(boton){
    boton.addEventListener("click", function(){ cancelarEvento(boton); });
});