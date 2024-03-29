
// Cuando el documento está listo
document.addEventListener('DOMContentLoaded', function () {
    toggleLanguage()
    onScreenAnimation()
    window.addEventListener('scroll', (ev1) => {

        onScreenAnimation()
    });

    //cambiar idioma 
    const lang = document.getElementById("lang");
    lang.addEventListener('click', (ev1) => {
        toggleLanguage()
    });

    scrollanimation()

});

function toggleLanguage() {
    const langElement = document.getElementById("lang");
    const isEnglish = langElement.innerText === "EN";

    if (isEnglish) {
        langElement.innerText = "ES";
        // Mostrar los elementos en español con la clase "spanish"
        document.querySelectorAll(".spanish").forEach(elm => {
            elm.classList.remove("hidden");
        });
        // Ocultar los elementos en inglés con la clase "english"
        document.querySelectorAll(".english").forEach(elm => {
            elm.classList.add("hidden");
        });
    } else {
        langElement.innerText = "EN";
        // Mostrar los elementos en inglés con la clase "english"
        document.querySelectorAll(".english").forEach(elm => {
            elm.classList.remove("hidden");
        });
        // Ocultar los elementos en español con la clase "spanish"
        document.querySelectorAll(".spanish").forEach(elm => {
            elm.classList.add("hidden");
        });
    }
}

function onScreenAnimation() {
    // y a todos los elementos con la clase paused...
    document.querySelectorAll(".paused").forEach(elm => {
        if (isElementVisible(elm)) {// que sean visibles...
            elm.classList.remove("paused"); // les quitamos la clase paused
            elm.classList.add("on_screen");
        }
    })

    document.querySelectorAll(".on_screen").forEach(elm => {
        if (!isElementVisible(elm)) {// que sean visibles...
            elm.classList.remove("on_screen"); // les quitamos la clase paused
            elm.classList.add("paused");

            elm.querySelectorAll(".anim").forEach(elm2 => {
                //obtenemos todas las clases que contengan anim , se las quitamos y se las volvemos a poner para que se reinicie la animacion
                var classes = elm2.classList;
                var classesArray = Array.from(classes);
                classesArray.forEach(element => {
                    if (element.includes("anim")) {
                        elm2.classList.remove(element);
                        elm2.classList.add(element);
                    }
                }
                );
            })
        }
    })
}



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

            if (targetId.includes("#")) {
                // Obtenemos la posición vertical de la sección objetivo
                const targetPosition = document.querySelector(targetId).offsetTop;
                // Realizamos el scroll suave a la posición de la sección objetivo
                window.scroll({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                return
            }

            const target = this.getAttribute('target');
            if (target) {
                window.open(targetId, target);
                return
            }
            window.open(targetId, '_self');

            //navegar al link si no es un link interno




        });
    });

}


//funcion para ver si un elmento es visible en la pantalla
function isElementVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


function textAnimationRandom(elm) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    elm.onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
}

