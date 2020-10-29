"use strict";

const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: true,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// paint
function paint() {
  const codeList = document.querySelector(".js-listTask");
  for (let i = 0; i < tasks.length; i++) {
    let completedClass = tasks[i].completed === true ? "lineCheck" : " ";
    let checkedClass = tasks[i].completed === true ? " checked" : " ";
    codeList.innerHTML += `<li class="${completedClass}"> <input type="checkbox"${checkedClass} class = "js-check" id=${i} ><span>${tasks[i].name}</span>
  </li>`;
  }
}
// listen

function toggleTast(ev) {
  const checkList = document.querySelectorAll(".js-check");
  const checkElement = ev.currentTarget.id;
  tasks[checkElement].completed = true;
  for (const checkElement of checkList) {
    console.log("me han clikado");
  }
  checkElement.addEventListener("click", toggleTast);
}

paint();
