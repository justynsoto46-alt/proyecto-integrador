console.log("JS cargado correctamente");

const inputBuscar = document.getElementById("buscarActividad");
const selectEstado = document.getElementById("filtroEstado");
const filasActividades = document.querySelectorAll("#tablaActividades tbody tr");
const mensajeSinResultados = document.getElementById("sinResultados");

function aplicarFiltros() {

    const texto = inputBuscar.value.trim().toLowerCase();
    const estado = selectEstado.value;

    let coincidencias = 0;

    filasActividades.forEach(function (fila) {

        const nombre = fila.children[0].textContent.toLowerCase();
        const responsable = fila.children[4].textContent.toLowerCase();
        const descripcion = fila.dataset.descripcion.toLowerCase();

        const cumpleTexto =
            texto === "" ||
            nombre.includes(texto) ||
            responsable.includes(texto) ||
            descripcion.includes(texto);

        const cumpleEstado =
            estado === "" ||
            fila.dataset.estado === estado;

        if (cumpleTexto && cumpleEstado) {

            fila.style.display = "";
            coincidencias++;

        } else {

            fila.style.display = "none";

        }

    });

    mensajeSinResultados.style.display =
        coincidencias === 0 ? "block" : "none";
}

inputBuscar.addEventListener("input", aplicarFiltros);
selectEstado.addEventListener("change", aplicarFiltros);

const botonesEditar = document.querySelectorAll(".btn-editar");

botonesEditar.forEach(function (boton) {

    boton.addEventListener("click", function (event) {

        const fila = boton.closest("tr");
        const estado = fila.dataset.estado;

        if (estado === "Finalizada" || estado === "Cancelada") {

            event.preventDefault();

            Swal.fire({
                icon: "error",
                title: "No permitido",
                text: "No se pueden modificar actividades finalizadas o canceladas."
            });

        }

    });

});

const botonesEliminar = document.querySelectorAll(".btn-eliminar");

botonesEliminar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        Swal.fire({
            icon: "warning",
            title: "Eliminar actividad",
            text: "¿Desea eliminar esta actividad?",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar"

        }).then((resultado) => {

            if (resultado.isConfirmed) {

                boton.closest("tr").remove();

                aplicarFiltros();

                Swal.fire({
                    icon: "success",
                    title: "Actividad eliminada",
                    timer: 1500,
                    showConfirmButton: false
                });

            }

        });

    });

});