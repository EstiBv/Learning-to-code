"use strict";

const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: false,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: false,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// paint
function paintList() {
  const taskList = document.querySelector(".js-listTask");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let completedTask = " ";
    let checkedTask = " ";
    if (tasks[i].completed === true) {
      completedTask = "lineCheck";
      checkedTask = "checked";
    } else {
      completedTask = "";
      checkedTask = "";
    }

    taskList.innerHTML += `<li class="${completedTask}"> <input type="checkbox"${checkedTask} class = "js-check" id=${i} ><span>${tasks[i].name}</span>
    </li>`;
  }
}

// Checked
const Changechecked = (ev) => {
  const selectedTask = ev.currentTarget.id;
  tasks[selectedTask].completed = !tasks[selectedTask].completed;
  paintList();
  listenList();
};

// handler
function listenList() {
  const checkElement = document.querySelectorAll(".js-check");
  for (const checkItem of checkElement) {
    checkItem.addEventListener("click", Changechecked);
  }
}

paintList();
listenList();
