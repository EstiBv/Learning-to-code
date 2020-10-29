"use strict";
const listKeys = document.querySelectorAll(".js-key");
const display = document.querySelector(".js-number");

/* el event es parámentro en la función showNumber pero es algurmento es el argumento del addEventListener. Están relacionados, lo que se ecucha es un clik en toooodos los botones.
 */
const showNumber = function (event) {
  console.log(event.currentTarget);
  const digit = event.currentTarget.value;
  display.value += digit;
};
/* aquí está el evento en cada uno de los inputs,buttons, en tosos los botones. CurrentTarget es el escuchador, y se escucha (acción/función) en la función
 Aqui está el sujeto (listKeys y el evento, con el segundo argumento se le indica qué hacer, cuál es el manejador , el handler que es la función Shownumber)*/
for (const keyButton of listKeys) {
  keyButton.addEventListener("click", showNumber);
}

// /* con esta parte del ejercicio, vamos a pintar botones directamente desde aquí, añadimos contenido desde el js, con inner */
// // const buttons = document.querySelector(".js-buttons");
// // for (let i = 0; i <= 9; i++) {
// //   buttons.innerHTML += '<input type ="button" id ="key"></input>';
// // }
// // otra manera de pintar:
// let contenido = " ";
// for (let i = 0; i < listKeys.length; i++) {
//   contenido += '<input type ="button" id ="key"></input>';
//   console.log(contenido);
// }
// buttons.innerHTML = contenido;
