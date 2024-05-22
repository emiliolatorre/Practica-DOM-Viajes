document.addEventListener('DOMContentLoaded', () => {

//VARIABLES (Variables > Objetos > Arrays)
const fotoBanner = document.querySelector('#fotoBanner');

const fotoViajes1 = document.querySelector('#fotoViajes1');
const fotoViajes2 = document.querySelector('#fotoViajes2');
const fotoViajes3 = document.querySelector('#fotoViajes3');

const titulo1 = document.querySelector('#titulo1')
const titulo2 = document.querySelector('#titulo2')
const titulo3 = document.querySelector('#titulo3')

const containerFlex = document.querySelector('#containerflex');
const container2 = document.querySelector('#container2');

const cajas = document.querySelectorAll('.caja');

const fragment = document.createDocumentFragment();

const fotosBanner = [
    {
        id: 'Banner1',
        src: 'Imagenes/1.jpg',
        title: 'Banner 1',
        alt: 'atardecer desde el mar'
    },
    {
        id: 'Banner2',
        src: 'Imagenes/2.jpg',
        title: 'Banner 2',
        alt: 'glovos aerostaticos en altura'
    },
    {
        id: 'Banner 3',
        src: 'Imagenes/3.jpg',
        title: 'Banner 3',
        alt: 'atardecer desde el cielo'
    },
    {
        id: 'Banner 4',
        src: 'Imagenes/4.jpg',
        title: 'Banner 4',
        alt: 'glovos aerostaticos desde tierra'
    },
    {
        id: 'Banner 5',
        src: 'Imagenes/5.jpg',
        title: 'Banner 5',
        alt: 'luna llena en la noche'
    },
    {
        id: 'Banner 6',
        src: 'Imagenes/6.jpg',
        title: 'Banner 6',
        alt: 'montaña nevada'
    },
    {
        id: 'Banner 7',
        src: 'Imagenes/7.jpg',
        title: 'Banner 7',
        alt: 'pajaros volando en el atardecer'
    },
    {
        id: 'Banner 8',
        src: 'Imagenes/8.jpg',
        title: 'Banner 8',
        alt: 'dientes de leon'
    },
];

const fotosViajes = [
    {
        id: 'Viaje 1',
        src: 'Imagenes/viajes-1.jpg',
        title: 'Viaje 1',
        alt: 'mujer en hamaca en playa paradisíaca'
    },
    {
        id: 'Viaje 2',
        src: 'Imagenes/viajes-2.jpg',
        title: 'Viaje 2',
        alt: 'casas flotantes en las fidji'
    },
    {
        id: 'Viaje 3',
        src: 'Imagenes/viajes-3.jpg',
        title: 'Viaje 3',
        alt: 'poste de carteles indicando capitales del mundo'
    },
    {
        id: 'Viaje 4',
        src: 'Imagenes/viajes-4.jpg',
        title: 'Viaje 4',
        alt: 'plaza de España en Sevilla'
    },
    {
        id: 'Viaje 5',
        src: 'Imagenes/viajes-5.jpg',
        title: 'Viaje 5',
        alt: 'plaza de España en Sevilla 2'
    },
    {
        id: 'Viaje 6',
        src: 'Imagenes/viajes-6.jpg',
        title: 'Viaje 6',
        alt: 'paseo al lado del mar'
    },
    {
        id: 'Viaje 7',
        src: 'Imagenes/viajes-7.jpg',
        title: 'Viaje 7',
        alt: 'castillo en lo alto del pueblo'
    }
];

// EVENTOS
//document. 'content loaded'


    // FotoBannerRandom();
    // const foto1 = FotoViajes1Random();
    // const foto2 = FotoViajes2Random();
    // const foto3 = FotoViajes3Random();
    // crearBotones([foto1, foto2, foto3]);


document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const id = event.target.id;
        limpiar(container2);
        imprimirCardGrande(id)
    }
});

// FUNCIONES

function FotoBannerRandom() {
    const i = Math.floor(Math.random() * fotosBanner.length);
    const fotoSeleccionada = fotosBanner[i];
    fotoBanner.src = fotoSeleccionada.src;
    fotoBanner.alt = fotoSeleccionada.alt;
};

// juntas fotoViajesRandom en una. crear una funcion para crear cards.
function FotoViajes1Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes1.src = fotoSeleccionada.src;
    fotoViajes1.alt = fotoSeleccionada.alt;
    titulo1.innerHTML = fotoSeleccionada.title;
    return fotoSeleccionada
};

function FotoViajes2Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes2.src = fotoSeleccionada.src;
    fotoViajes2.alt = fotoSeleccionada.alt;
    titulo2.innerHTML = fotoSeleccionada.title;
    return fotoSeleccionada
};

function FotoViajes3Random() {
    const i = Math.floor(Math.random() * fotosViajes.length);
    const fotoSeleccionada = fotosViajes[i];
    fotoViajes3.src = fotoSeleccionada.src;
    fotoViajes3.alt = fotoSeleccionada.alt;
    titulo3.innerHTML = fotoSeleccionada.title;
    return fotoSeleccionada
};

function crearBotones(fotoSeleccionada) {
    cajas.forEach((caja, index) => {
        let button = document.createElement('button');
        button.id = fotoSeleccionada[index].id;
        button.textContent = 'Ampliar';
        caja.appendChild(button);
    })
}

const imprimirCardGrande = (id) => {
    const fotoEncontrada = fotosViajes.find((elemento) => elemento.id === id);
    if (fotoEncontrada) {
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        const newTitle = document.createElement('p');
        newImg.src = fotoEncontrada.src;
        newImg.alt = fotoEncontrada.alt;
        newTitle.innerHTML = fotoEncontrada.title;
        newDiv.appendChild(newImg);
        newDiv.appendChild(newTitle);
        container2.appendChild(newDiv);
    } else {
        alert('La fotoEncontrada de referencia no existe');
    }
}

//ahora si es escalable
function limpiar(elemento) {
    elemento.innerHTML = '';
}

FotoBannerRandom();

});