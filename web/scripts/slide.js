const imagens = [
    "../img/slide1.webp",
    "../img/slide2.webp",
    "../img/slide3.webp",
    "../img/slide4.webp",
    "../img/slide5.webp",
    "../img/slide6.webp",
    "../img/slide7.webp"
];

let indice = 0;

function mostrarSlide() {
    document.getElementById("slide").src = imagens[indice];
}

function proximo() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarSlide();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    mostrarSlide();
}