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

// // EJERCICIO 2
/* escuchar un input y que en consola muestre lo que se escribe en input type text*/

// const button = document.querySelector(".btn");
// const btnListen = document.querySelector(".js-name");

// function inner() {
//   console.log(`Hola ${btnListen.value}`);
// }
// button.addEventListener("click", inner);

// EJERCICIO 3

// let addParagraph = document.querySelector(".js-text");

// function addText(ev) {
//   const addElement = addParagraph.classList.add ("js-text2");
//   const addParagraphNew = document.querySelector (".js-text2");
//   addParagraphNew.innerHTML = addParagraph.innerHTML +  "Lorem fistrum la caidita se calle ustée de la pradera."
// }
// addParagraph.addEventListener ("mouseover",addText);

// EJERCICIO 4

/*evento escuchador del ratón con una función if else dentro*/
//  const containerText = document.querySelector (".js-paragraphs");
//  function colorScroll(ev) {
//    let minPositionWindow = window.scrollY;
//    if (minPositionWindow < 250) {
//      containerText.classList.remove("orange");
//     } else if (minPositionWindow = 250) {
//      containerText.classList.add("orange");
//     }
//   }
//   window.addEventListener('scroll', colorScroll);

// EJERCICIO 5 = cambiar color según tecla
// const viewport = document.querySelector ("body");
// function pressLetter (event) {
//   if (event.key === "r") {
//     viewport.classList.toggle ("red");
//   } else if (event.key === "m") {
//     viewport.classList.remove ("red");
//     viewport.classList.toggle ("purple");
//   } else {
//     viewport.classList.remove ("purple");
//     viewport.classList.toggle ("black");
//   }
// }
// viewport.addEventListener ("keydown", pressLetter);


// EJERCICIO 6 = imprimir lo que se teclea en input
// let boxText = document.querySelector (".js-fillText");
// let copyText = document.querySelector (".js-copyText");

// function autoCopy(event) {
//   boxText = event.currentTarget;
//   copyText.innerHTML = boxText.value;
// }
// boxText.addEventListener ("keydown", autoCopy)

// EJERCICIO 7 y 8
// const btnA = document.querySelector(".btnA");
// const btnB = document.querySelector(".btnB");
// function pressButton(event) {
//   const buttonPress = event.currentTarget;
//   buttonPress.classList.toggle("btnPress");
//   }
// btnA.addEventListener("click",pressButton);
// btnB.addEventListener("click",pressButton);

// EJERCICIO 9