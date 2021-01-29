"use strict";

const israTeacher = document.querySelector(".teacher--isra");
const tuertoTeacher = document.querySelector(".teacher--tuerto");
const nasiTeacher = document.querySelector(".teacher--nasi");

function listen(ev) {
  console.log("hola");
  const selectedteacher = ev.currentTarget;

  if (selectedteacher.classList.contains("teacher--selected")) {
    selectedteacher.classList.remove("teacher--selected");
  } else {
    selectedteacher.classList.add("teacher--selected");
  }

  // busca elemento dentro de otro elemento
  const textSpanTeacher = selectedteacher.querySelector(".favorite");

  if (textSpanTeacher.innerHTML === "Añadir") {
    textSpanTeacher.innerHTML = "Quitar";
  } else {
    textSpanTeacher.innerHTML = "Añadir";
  }
}
israTeacher.addEventListener("click", listen);
tuertoTeacher.addEventListener("click", listen);
nasiTeacher.addEventListener("click", listen);
