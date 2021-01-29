"use strict";
// exercises 7 y 8
const btnA = document.querySelector(".btnA");
const btnB = document.querySelector(".btnB");
function pressButton(event) {
  const buttonPress = event.currentTarget;
  buttonPress.classList.toggle("btnPress");
}
btnA.addEventListener("click", pressButton);
btnB.addEventListener("click", pressButton);
