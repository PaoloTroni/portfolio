// Importamos desde otros archivos el array de contenidos, la función que genera número aleatórios y la función que genera aleatoriamente los mensajes de broma.

import { pageContents } from "./page-contents.js";
import { generateRandomNumbers } from "./generateRandomNumbers.js";
import { generateJoke } from "./generateJoke.js";

("use strict");

// Nos traemos el indexContents que genera la función generateRadomNumbers
const { indexContents } = generateRandomNumbers();

// Creamos las constantes y los elementos HTML
const title = document.querySelector("title");
const main = document.querySelector("main");
const button = document.createElement("button");
const body = document.createElement("body");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const pFinal = document.createElement("p");
const img = document.createElement("img");
const a = document.createElement("a");
const footer = document.createElement("footer");
const pFooter = document.createElement("p");
const aFooter = document.createElement("a");

// Hacemos la estructura del body con .appendChild()
document.body.appendChild(main);
main.appendChild(img);
main.appendChild(h1);
main.appendChild(p);
main.appendChild(pFinal);
main.appendChild(button);
main.appendChild(a);
main.appendChild(footer);
footer.appendChild(pFooter);

// Ponemos el contenido en los elementos usando el array de contenidos (pageContents) y usando un número aleatorio como index.

title.textContent = pageContents[indexContents].title;
body.className = "white";
h1.textContent = pageContents[indexContents].title;
p.textContent = pageContents[indexContents].par;
button.textContent = "Haz clic aquí";
img.src = pageContents[indexContents].imgSrc;
img.alt = pageContents[indexContents].imgAlt;

// Al hacer click se llama a la función generateJoke() que hace "la broma" de forma aleatoria.
button.addEventListener("click", () => {
  generateJoke();
});

// Exportamos los elementos de ese archivo que nos harán falta en generateJoke.js
export { title, h1, p, img, button, a, pFinal, pFooter, aFooter };
