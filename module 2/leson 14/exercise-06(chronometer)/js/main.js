"use strict";

const time = document.querySelector(".js-time");

let counter = 0;
let start;
const getIdBtn = (ev) => {
  let btnId = ev.target.id;
  if (btnId === "0") {
    time.innerHTML = "";
    time.innerHTML = counter;
    start = setInterval(startChrono, 1000);
  } else if (btnId === "1") {
    start = clearInterval(start);
  }
};

const btns = document.querySelectorAll(".btn");
for (const btn of btns) {
  addEventListener("click", getIdBtn);
  console.log(btn);
}

function startChrono() {
  counter++;
  time.innerHTML = counter;
}
