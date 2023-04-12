"use strict";

// importamos los elementos necesarios del archivo main.js

import {
  title,
  h1,
  p,
  img,
  button,
  a,
  pFinal,
  pFooter,
  aFooter,
} from "./main.js";

// importamos el contenido del array de bromas y la función que genera números aleatorios para el index.
import { arrayJokes } from "./array-jokes.js";
import { generateRandomNumbers } from "./generateRandomNumbers.js";

// Nos traemos el indexJokes que genera la función generateRadomNumbers
const { indexJokes } = generateRandomNumbers();

// Elaboramos la función que se ejecuta al hacer clic en el botón
export function generateJoke() {
  // el contenido del alert se genera de forma aleatoria, en base a las frases contenidas en el arrayJokes.
  alert(arrayJokes[indexJokes].congratulations);
  let respuesta;
  do {
    // ese ciclo "do - while" se repite hasta que el usuario no inserte la frase "ni loco". Se espera que el usuario entienda que es una broma y que le estamos dando una pista del que hay que insertar para salir del ciclo. Obviamente si insertara algún número de tarjeta, ese número no quedaría guardado en ningún lado y tampoco saldría del ciclo.
    respuesta = prompt(
      `Inserte la contraseña de la tarjeta de tu banco para conseguir el ${arrayJokes[indexJokes].award} que has ganado (ni loco)`
    );
    if (respuesta === "ni loco") {
      alert("muy bien 😎");
    } else {
      alert("muy mal 😔 sigue intentando");
    }
  } while (respuesta != "ni loco");
  confirm("Vamos a robar todo el dinero de tu cuenta! 😂 😛");

  //   Pintamos el nuevo contenido de la página
  title.textContent = arrayJokes[indexJokes].congratulations;
  h1.textContent = "😛QUE ES UNA BROMA😛";
  p.textContent = `y lo siento...pero no has ganado ningún ${arrayJokes[indexJokes].award}.`;
  pFinal.textContent =
    "Si has llegado hasta aquí...vigila por donde vas haciendo clic 😅";
  // Vaciamos el contenido de <img> y escondemos el botón.
  img.src = "";
  img.alt = "";
  button.className = "hidden";

  a.textContent =
    "¿Quieres jugar otra vez y probar a ver que broma engañosa sale esa vez?";
  a.href = "index.html";

  pFooter.textContent = "Contenido desarrollado por ";
  pFooter.appendChild(aFooter);
  aFooter.href = "https://paolotroni.vercel.app/";
  aFooter.textContent = "Paolo Troni";
  pFooter.insertAdjacentHTML(
    "beforeend",
    " (aquí sí, puedes hacer clic sin miedo 🥲)."
  );
}
