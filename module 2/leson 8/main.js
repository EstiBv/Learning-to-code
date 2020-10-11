"use strick"
// Ejercicio 8
const buttons = document.querySelectorAll (".btn");
const background = document.querySelector(".page");

console.log(buttons);
function changeBack(){
  background.classList.toggle("alert")
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBack);
}