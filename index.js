// Cuando el documento está listo
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', (ev1) => {
        // y a todos los elementos con la clase paused...
        document.querySelectorAll(".paused").forEach(elm => {
            if (isElementVisible(elm)){// que sean visibles...
                elm.classList.remove("paused"); // les quitamos la clase paused
                elm.classList.add("on_screen");
            } 
        })

        document.querySelectorAll(".on_screen").forEach(elm => {
            if (!isElementVisible(elm)){// que sean visibles...
                elm.classList.remove("on_screen"); // les quitamos la clase paused
                elm.classList.add("paused");
            } 
        })
        
    });
    
    scrollanimation()
});




function scrollanimation() {
    // Obtenemos todos los enlaces del menú
    const links = document.querySelectorAll('a');


    // Agregamos un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function (event) {
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


//funcion para ver si un elmento es visible en la pantalla
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}