"use strict";

const name = document.querySelector(".js-name");
const surname = document.querySelector(".js-surname");
const mail = document.querySelector(".js-mail");
const tel = document.querySelector(".js-tel");

const name1 = document.querySelector(".js-name1");
const surname1 = document.querySelector(".js-surname1");
const mail1 = document.querySelector(".js-mail1");
const tel1 = document.querySelector(".js-tel1");

// para recorrer cada uno de estos arrays tienen que tener la misma clase, guardarlos todos en una constant, esa constante va a ser un array, y así podemos recorrerlo y ahora podemos sborrar las constantes del inicio
const listData = document.querySelectorAll(".arr");
const listData1 = document.querySelectorAll(".arr1");

function paint() {
  // con estas dos líneas se imprime solo un input sobre un párrafo, con lo siguiente, es igual pero para todos (son dos arrays, tienen las mismas posiciones)
  // let nameValue = name.value;
  // name1.innerHTML = nameValue;

  /* Aquí : localStorage.setItem("name", nameValue); se guarda (porque es setItem) el valor de name con el dato recogido, el localStorge.*/

  /* setItem es para guardar, en los parámetros se indica el nombre del valor y su propiedada(que está ya impreso). Hay que abrir la ventana Application/Storage/Local Strage/ http://...*/

  // localStorage.setItem("name", nameValue);
  for (let i = 0; i < listData.length; i++) {
    listData1[i].innerHTML = listData[i].value;
  }
}


// objeto vacío con clave, sin valor. Para guardar lo que se graba en storageLocal y meterlo a este objeto y que guardados la usuaria la pueda reutilizar // hacemos un objeto vacío con los datos del input y ese objeto guargarlo en el locarStorage,
const dataInputs = {
  name = "",
  surname = "",
  mail = "",
  tel = "",
}


function saveData(ev) {
  // con este código se dice, que el evento que escucha el atributo name del input del html, si es igual al name que se ingresa, en el objeto vació , en la propiedad name, lo imprima. Para econocminar código, se aplican las líneas de abajo, de la 54 y 55

//   if (ev.currentTarget.name === "name")
//   dataInput.name = ev.currentTarget.value;
// } else if (ev.currentTarget.name === "surname") {
//   dataInput.surName = ev.currentTarget.value;
// } else if (ev.currentTarget.name === "mail") {
//   dataInput.mail = ev.currentTarget.value;
// } else if (ev.currentTarget.name === "tel") {
//   dataInput.tel = ev.currentTarget.value;
//   paint();
// }
  let currentTarget = ev.currentTarget.name;
  dataInput[currentTarget] = ev.currentTarget.value;
   
  paint();
}
  for (let i = 0; i < listData.length; i++) {
    listData[i].addEventListener("keyup", saveData);

console.log("hello");

/*Si le borras la info del localStorage, da error. Lo que hay que hace es poner estas instrucciones en un condicional, diciendo que si existe, haga estas cosas si no, no. */

/* (Como se supone que vamos a saber s si hay o no datos guardados en el localStorage, lo meteremos despues es un condicional para que no de errores .GetItem solo tiene un parámetro, no dos. Es decir la instruccion es: cógeme del localStorage el name, si es que hay)*/

if (!!localStorage.getItem("name")) {
  name.value = localStorage.getItem("name");
  name1.innerHTML = localStorage.getItem("name");
}
