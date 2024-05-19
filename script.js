//imagen de cabecera random al refrescar
const fotosBanner = [
    {src: 'Imagenes/1.jpg', alt: 'atardecer desde el mar'},
    {src: 'Imagenes/2.jpg', alt: 'glovos aerostaticos en altura'},
    {src: 'Imagenes/3.jpg', alt: 'atardecer desde el cielo'},
    {src: 'Imagenes/4.jpg', alt: 'glovos aerostaticos desde tierra'},
    {src: 'Imagenes/5.jpg', alt: 'luna llena en la noche'},
    {src: 'Imagenes/6.jpg', alt: 'montaña nevada'},
    {src: 'Imagenes/7.jpg', alt: 'pajaros volando en el atardecer'},
    {src: 'Imagenes/8.jpg', alt: 'dientes de leon'},
];

const fotoBanner = document.querySelector('#fotoBanner');

function FotoBannerRandom() {
    const i = Math.floor(Math.random() * fotosBanner.length);
    const fotoSeleccionada = fotosBanner[i];
    fotoBanner.src = fotoSeleccionada.src;
    fotoBanner.alt = fotoSeleccionada.alt;
};

window.addEventListener('load', FotoBannerRandom);

//imagenes de viajes random al refrescar
const fotosViajes = [
    {src: 'Imagenes/viajes-1.jpg', alt: 'mujer en hamaca en playa paradisíaca'},
    {src: 'Imagenes/viajes-2.jpg', alt: 'casas flotantes en las fidji'},
    {src: 'Imagenes/viajes-3.jpg', alt: 'poste de carteles indicando capitales del mundo'},
    {src: 'Imagenes/viajes-4.jpg', alt: 'plaza de España en Sevilla'},
    {src: 'Imagenes/viajes-5.jpg', alt: 'plaza de España en Sevilla 2'},
    {src: 'Imagenes/viajes-6.jpg', alt: 'paseo al lado del mar'},
    {src: 'Imagenes/viajes-7.jpg', alt: 'castillo en lo alto del pueblo'},
];

const fotoViajes1 = document.querySelector('#fotoViajes1');
const fotoViajes2 = document.querySelector('#fotoViajes2');
const fotoViajes3 = document.querySelector('#fotoViajes3');

function FotoViajes1Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes1.src = fotoSeleccionada.src;
    fotoViajes1.alt = fotoSeleccionada.alt;
};

function FotoViajes2Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes2.src = fotoSeleccionada.src;
    fotoViajes2.alt = fotoSeleccionada.alt;
};

function FotoViajes3Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes3.src = fotoSeleccionada.src;
    fotoViajes3.alt = fotoSeleccionada.alt;
};

window.addEventListener('load', FotoViajes1Random);
window.addEventListener('load', FotoViajes2Random);
window.addEventListener('load', FotoViajes3Random);