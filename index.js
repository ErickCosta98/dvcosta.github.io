// Cuando el documento está listo
document.addEventListener('DOMContentLoaded', function() {
    scrollanimation()
});




function scrollanimation()
{
    // Obtenemos todos los enlaces del menú
    const links = document.querySelectorAll('a');

    // Agregamos un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevenimos el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtenemos el atributo href del enlace para encontrar la sección objetivo
            const targetId = this.getAttribute('href');

            // Obtenemos la posición vertical de la sección objetivo
            const targetPosition = document.querySelector(targetId).offsetTop;

            // Realizamos el scroll suave a la posición de la sección objetivo
            window.scroll({
                top: targetPosition,
                behavior: 'smooth'
                
            });
        });
    });
}
