"use strict";
// EJERCICIO 1

// // elemento HTML
// const button = document.querySelector(".alert");

// handler
// function changeText() {
//   const paragraph = document.querySelector(".text");
//   paragraph.innerHTML = "mi primer click. Ole yo y la madre que me parió";
// }
// // listerner
// button.addEventListener("click", changeText);

// EJERCICIO 2
/* escuchar un input y que en consola muestre lo que se escribe en input type text*/

// const button = document.querySelector(".btn");
// const btnListen = document.querySelector(".js-name");

// function inner() {
//   console.log(`Hola ${btnListen.value}`);
// }
// button.addEventListener("click", inner);

// EJERCICIO 3

// let addParagraph = document.querySelector(".js-text");

function addText(ev) {
  const addElement = addParagraph.classList.add ("js-text2");
  const addParagraphNew = document.querySelector (".js-text2");
  addParagraphNew.innerHTML = addParagraph.innerHTML +  "Lorem fistrum la caidita se calle ustée de la pradera."
}
addParagraph.addEventListener ("mouseover",addText);