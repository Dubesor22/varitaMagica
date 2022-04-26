//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let noClick = document.querySelector("HTML");
noClick.addEventListener("click", preventClick);

function preventClick(noClick) {
  noClick.preventDefault();
}

//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
let imagen = document.querySelector("img");
imagen.addEventListener("click", cambiaImagen);
function cambiaImagen() {
  // imagen.setAttribute("src", "assets/magic-1.gif");
  imagen.setAttribute("src", getRandom(selectGif));
}
// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let parrafo = document.querySelector("p");
parrafo.addEventListener("click", cambiaParrafo);
function cambiaParrafo() {
  parrafo.style.color = getRandom(paleta);
  parrafo.style.background = getRandom(paleta);
}
// 2.3 Bloques de article o section: Cambia el color de fondo.

let seccion = document.getElementsByTagName("section");

for (let i = 0; i < seccion.length; i++) {
  seccion[i].addEventListener("click", function () {
    seccion[i].style.background = getRandom(paleta);
  });
}

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
let imagen2 = document.querySelector("img");
imagen2.addEventListener("mouseover", ratonOver);
imagen2.addEventListener("mouseleave", ratonLeave);
function ratonOver() {
  // imagen2.setAttribute("src", "assets/abracadabra.gif");
  imagen2.setAttribute("src", getRandom(selectGif));
}
function ratonLeave() {
  // imagen2.setAttribute("src", "index_files/codinghorror-app-icon.png");
  imagen2.setAttribute("src", getRandom(selectGif));
}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

parrafo.addEventListener("mouseenter", parrafoColorIn);

parrafo.addEventListener("mouseleave", parrafoColorOut);

function parrafoColorIn() {
  parrafo.style.background = getRandom(paleta);
}
function parrafoColorOut() {
  parrafo.style.background = getRandom(paleta);
}
// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < seccion.length; i++) {
  seccion[i].addEventListener("mouseenter", function () {
    seccion[i].style.background = getRandom(paleta);
  });
}
for (let i = 0; i < seccion.length; i++) {
  seccion[i].addEventListener("mouseleave", function () {
    seccion[i].style.background = getRandom(paleta);
  });
}

//4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ["red", "blue", "green"];

let randomValue = [];

const getRandom = (array) => {
  for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * array.length);

    randomValue = array[random] + " ";
  }
  return randomValue;
};

console.log(getRandom(colors));
// imprime 'red', 'blue' o 'green'

//5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas# escogido de coolors.co en los apartados anteriores.

const paleta = [
  "#CB997E",
  "#DDBEA9",
  "#FFE8D6",
  "#B7B7A4",
  "#A5A58D",
  "#6B705C",
];

//6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const selectGif = [
  "assets/magic-1.gif",
  "assets/magic-2.gif",
  "assets/magic-3.gif",
  "assets/magic-4.gif",
  "assets/magic-5.gif",
  "assets/magic-6.gif",
];
