"use strict";

const viewport = document.querySelector("body");

function pressLetter(event) {
  if (event.key === "r") {
    viewport.classList.toggle("red");
    viewport.classList.remove("purple");
  } else if (event.key === "m") {
    viewport.classList.remove("red");
    viewport.classList.toggle("purple");
  }
}
viewport.addEventListener("keydown", pressLetter);
