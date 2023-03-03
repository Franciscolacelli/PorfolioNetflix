// ---------carousel 1 --------

const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if (indicadorActivo) {
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});

flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector(".indicadores .activo");
    if (indicadorActivo) {
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
});


// ---------carousel 3  proyectos--------

const fila2 = document.querySelector(".contenedor-carousel3");
const peliculas2 = document.querySelectorAll(".pelicula3");

const flechaIzquierda2 = document.getElementById("flecha-izquierda3");
const flechaDerecha2 = document.getElementById("flecha-derecha3");

flechaDerecha2.addEventListener("click", () => {
    fila2.scrollLeft += fila2.offsetWidth;

    const indicadorActivo2 = document.querySelector(".indicadores3 .activo");
    if (indicadorActivo2) {
        indicadorActivo2.nextSibling.classList.add("activo");
        indicadorActivo2.classList.remove("activo");
    }
});

flechaIzquierda2.addEventListener("click", () => {
    fila2.scrollLeft -= fila2.offsetWidth;

    const indicadorActivo2 = document.querySelector(".indicadores3 .activo");
    if (indicadorActivo2) {
        indicadorActivo2.previousSibling.classList.add("activo");
        indicadorActivo2.classList.remove("activo");
    }
});



