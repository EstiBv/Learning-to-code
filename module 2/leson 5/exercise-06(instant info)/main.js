"use strict";
let boxText = document.querySelector(".js-fillText");
let copyText = document.querySelector(".js-copyText");

function autoCopy(event) {
  boxText = event.currentTarget;
  copyText.innerHTML = boxText.value;
}
boxText.addEventListener("keypress", autoCopy);
