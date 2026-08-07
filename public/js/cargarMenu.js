document.addEventListener("DOMContentLoaded", () => {
    
    const navContainer = document.getElementById("nav-placeholder");

    if (navContainer) {
        // Hace la petición al archivo del menú
        // Asegúrate de que la ruta sea correcta dependiendo de dónde levantes tu servidor Node
        fetch('/pages/navbar.html')
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el menú");
                return response.text();
            })
            .then(data => {
                // Inserta el HTML en el contenedor
                navContainer.innerHTML = data;
                
                // Opcional pero recomendado: Resaltar la página actual
                marcarPaginaActiva();
            })
            .catch(error => console.error(error));
    }
});

function marcarPaginaActiva() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("activo"); // Asegúrate de tener una clase .activo en tu CSS
        }
    });
}