//imagen de cabecera random al refrescar

const fotosBanner = [
    'Imagenes/1.jpg',
    'Imagenes/2.jpg',
    'Imagenes/3.jpg',
    'Imagenes/4.jpg',
    'Imagenes/5.jpg',
    'Imagenes/6.jpg',
    'Imagenes/7.jpg',
    'Imagenes/8.jpg'
];

function getFotoBannerRandom() {
    const i = Math.floor(Math.random() * fotosBanner.length);
    return fotosBanner[i]
};

const fotoBanner = document.querySelector('#fotoBanner');

function pushFotoBannerRandom() {
    fotoBanner.src = getFotoBannerRandom();
};

window.addEventListener('load', pushFotoBannerRandom);

//imagenes de viajes random al refrescar
const fotosViajes = [
    'Imagenes/viajes-1.jpg',
    'Imagenes/viajes-2.jpg',
    'Imagenes/viajes-3.jpg',
    'Imagenes/viajes-4.jpg',
    'Imagenes/viajes-5.jpg',
    'Imagenes/viajes-6.jpg',
    'Imagenes/viajes-7.jpg'
];

function getFotoViajesRandom() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    return fotosViajes[i]
};

const fotoViajes1 = document.querySelector('#fotoViajes1');
const fotoViajes2 = document.querySelector('#fotoViajes2');
const fotoViajes3 = document.querySelector('#fotoViajes3');

function pushFotoViajesRandom() {
    fotoViajes1.src = getFotoViajesRandom();
    fotoViajes2.src = getFotoViajesRandom();
    fotoViajes3.src = getFotoViajesRandom();
};

window.addEventListener('load', pushFotoViajesRandom);