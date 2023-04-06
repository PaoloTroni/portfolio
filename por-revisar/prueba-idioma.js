"use strict";

// Seleccionar todos los enlaces de idioma
const enlacesIdioma = document.querySelectorAll("a");

// Para cada enlace de idioma
enlacesIdioma.forEach((enlace) => {
  // Agregar un evento click
  enlace.addEventListener("click", (evento) => {
    // Evitar que el navegador cargue la página correspondiente al hacer click
    evento.preventDefault();

    // Obtener el idioma del enlace (a partir del href) y quitar la extensión ".html"
    const idioma = evento.target.getAttribute("href").replace(".html", "");

    // Obtener el elemento del DOM que va a contener el contenido traducido
    const contenido = document.getElementById("contenido");

    // Establecer el atributo lang en el elemento del DOM para cambiar el idioma de la página principal
    contenido.lang = idioma;

    // Obtener el contenido traducido usando fetch() y reemplazarlo en la página principal
    fetch(`${idioma}.html`)
      .then((response) => response.text()) // Convertir la respuesta en texto
      .then((data) => {
        contenido.innerHTML = data; // Reemplazar el contenido en el elemento del DOM correspondiente
      });
  });
});
