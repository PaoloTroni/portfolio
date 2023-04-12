"use strict";

// Importamos los archivos con los arrays, dado que necesitamos conocer la longitud de ellos.

import { pageContents } from "./page-contents.js";
import { arrayJokes } from "./array-jokes.js";

// función que genera dos números aleatorios diferentes, que serán usados como index de los contenidos que se mostrarán
export function generateRandomNumbers() {
  const lengthContents = pageContents.length;

  //  Generamos un número aleatorio para seleccionar el contenido principal que se mostrará en la página.
  //  El número generado es un índice válido para el array de contenidos.
  const indexContents = Math.floor(Math.random() * lengthContents);

  // Guardamos la longitud del array de las bromas (arrayJokes) que hemos importado, para poder calcular el número aleatorio
  const lengthArrayJokes = arrayJokes.length;

  //
  //  Generamos un número aleatorio para seleccionar el contenido de las bromas que se mostrará en la página.
  // El número generado es un índice válido para e array de las bromas (arrayJokes).
  const indexJokes = Math.floor(Math.random() * lengthArrayJokes);

  return { indexContents, indexJokes };
}
