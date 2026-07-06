console.log("JS cargado correctamente");

const inputBuscar = document.getElementById("buscarActividad");
const selectEstado = document.getElementById("filtroEstado");
const filasActividades = document.querySelectorAll("#tablaActividades tbody tr");
const mensajeSinResultados = document.getElementById("sinResultados");


function aplicarFiltros(){

    const texto = inputBuscar.value.trim().toLowerCase();

    const estado = selectEstado.value;
    let coincidencias = 0;

    filasActividades.forEach(function(fila){

        const nombre = fila.children[0].textContent.toLowerCase();
        const responsable = fila.children[4].textContent.toLowerCase();
        const descripcion = fila.dataset.descripcion.toLowerCase();

        const cumpleTexto =
            texto.length === 0 ||
            nombre.includes(texto) ||
            responsable.includes(texto) ||
            descripcion.includes(texto);

        const cumpleEstado = estado === "" || fila.dataset.estado === estado;

        if(cumpleTexto && cumpleEstado){

            fila.style.display = "";
            coincidencias++;

        } else {

            fila.style.display = "none";

        }

    });

    mensajeSinResultados.style.display = coincidencias === 0 ? "block" : "none";

}


inputBuscar.addEventListener("input", aplicarFiltros);
selectEstado.addEventListener("change", aplicarFiltros);