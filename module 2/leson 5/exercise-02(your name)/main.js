"use strict";

const button = document.querySelector(".btn");
const btnListen = document.querySelector(".js-name");

function inner() {
  console.log(`Hola ${btnListen.value}`);
}
button.addEventListener("click", inner);
