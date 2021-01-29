"use strict";

const buttonClick = document.querySelector(".js-btn");

function logginObject(ev) {
  console.log(ev);
}
buttonClick.addEventListener("click", logginObject);
