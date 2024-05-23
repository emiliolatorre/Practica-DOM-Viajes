// VERSION 2

document.addEventListener('DOMContentLoaded', () => {

//VARIABLES (Variables > Objetos > Arrays)
const containerBanner = document.querySelector('#containerBanner');
const containerCards = document.querySelector('#containerCards');
const containerOfertas = document.querySelector('#containerOfertas');
const containerCardGrande = document.querySelector('#containerCardGrande');
const containerDestinos = document.querySelector('#containerDestinos');

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
        alt: 'mujer en hamaca en playa paradisíaca',
        textContent: 'textContent Viaje 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 2',
        src: 'Imagenes/viajes-2.jpg',
        title: 'Viaje 2',
        alt: 'casas flotantes en las fidji',
        textContent: 'textContent Viaje 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 3',
        src: 'Imagenes/viajes-3.jpg',
        title: 'Viaje 3',
        alt: 'poste de carteles indicando capitales del mundo',
        textContent: 'textContent Viaje 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 4',
        src: 'Imagenes/viajes-4.jpg',
        title: 'Viaje 4',
        alt: 'plaza de España en Sevilla',
        textContent: 'textContent Viaje 4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 5',
        src: 'Imagenes/viajes-5.jpg',
        title: 'Viaje 5',
        alt: 'plaza de España en Sevilla 2',
        textContent: 'textContent Viaje 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
   
];
const fotosOfertas = [
   
    {
        id: 'Viaje 5',
        src: 'Imagenes/viajes-5.jpg',
        title: 'Viaje 5',
        alt: 'plaza de España en Sevilla 2',
        textContent: 'textContent Viaje 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 6',
        src: 'Imagenes/viajes-6.jpg',
        title: 'Viaje 6',
        alt: 'paseo al lado del mar',
        textContent: 'textContent Viaje 6: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    },
    {
        id: 'Viaje 7',
        src: 'Imagenes/viajes-7.jpg',
        title: 'Viaje 7',
        alt: 'castillo en lo alto del pueblo',
        textContent: 'textContent Viaje 7: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non eveniet ea alias dignissimos fugit iure esse, fuga voluptatibus eum suscipit perspiciatis neque id mollitia est labore possimus accusamus totam?'
    }
];

const destinos = [
    {
        value: 'Burgos',
        text: 'Burgos',
    },
    {
        value: 'Costa Rica',
        text: 'Costa Rica',
    },
    {
        value: 'Bali',
        text: 'Bali',
    },
    {
        value: 'Fidji',
        text: 'Fidji',
    },
    {
        value: 'Maldivas',
        text: 'Maldivas',
    },
    {
        value: 'Almeria',
        text: 'Almeria',
    },
    {
        value: 'Ibiza',
        text: 'Ibiza',
    }
];

// EVENTOS

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const id = event.target.id;
        limpiar(containerCardGrande);
        imprimirCardGrande(id)
    }
});

// FUNCIONES
// juntas fotoViajesRandom en una. crear una funcion para crear cards.

function imprimirBanner () {
    const i = Math.floor(Math.random() * fotosBanner.length);
    const fotoSeleccionada = fotosBanner[i];
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.src = fotoSeleccionada.src;
    newImg.alt = fotoSeleccionada.alt;
    newImg.classList.add('Banner');
    newDiv.appendChild(newImg);
    containerBanner.appendChild(newDiv);
}

function crearCards (array) {
    for (let i=0; i<array.length; i++) {
      //  const randomi = Math.floor(Math.random() * fotosViajes.length);
        const fotoSeleccionada = array[i];
        const {id, src, alt, title, textContent} = fotoSeleccionada;

        const newDiv = document.createElement('div');
        newDiv.classList.add('caja');

        const newImg = document.createElement('img');
        newImg.src = src;
        newImg.alt = alt;

        const newTitle = document.createElement('h3');
        newTitle.innerHTML = title;

        const newText = document.createElement('p');
        newText.innerHTML = textContent;

        const newBtn = document.createElement('button');
        newBtn.id = id;
        newBtn.textContent = 'Ampliar información';
        
        newDiv.append(newImg, newTitle, newText, newBtn);
        fragment.append(newDiv);
    }

    return fragment
}
function imprimirCards(){

    containerCards.append(crearCards(fotosViajes))
    


}

function imprimirOfertas(){
    containerOfertas.append(crearCards(fotosOfertas))

}

const imprimirCardGrande = (id) => {
    const fotoEncontrada = fotosViajes.find((elemento) => elemento.id === id);
    if (fotoEncontrada) {
        const {src, alt, title, textContent} = fotoEncontrada;
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        const newTitle = document.createElement('h3');
        const newText = document.createElement('p');
        newDiv.classList.add('cardGrande')
        newImg.src = src;
        newImg.alt = alt;
        newTitle.innerHTML = title;
        newText.innerHTML = textContent;
        newDiv.append(newImg, newTitle, newText);
        containerCardGrande.appendChild(newDiv);
    } else {
        alert('La fotoEncontrada de referencia no existe');
    }
}

function imprimirDestinos () {
    const newForm = document.createElement('form');
    newForm.action = '';
    newForm.mehotd = 'post';
    const newSelect = document.createElement('select');
    newSelect.classList.add('destinos');
    destinos.forEach((destino) => {
        const newOption = document.createElement('option');
        newOption.value = destino.value;
        newOption.innerHTML = destino.text;
        newSelect.appendChild(newOption);
    });
    newForm.appendChild(newSelect);
    containerDestinos.appendChild(newForm);
};

//ahora si es escalable
function limpiar(elemento) {
    elemento.innerHTML = '';
}

imprimirBanner();
imprimirCards();
imprimirOfertas()
imprimirDestinos();

});