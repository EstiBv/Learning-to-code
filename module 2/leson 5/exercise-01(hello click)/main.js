"use strict";
// elemento HTML
const button = document.querySelector(".alert");

// handler;
function changeText() {
  const paragraph = document.querySelector(".text");
  paragraph.innerHTML = "Mi primer click. Ole yo y la madre que me parió";
}
// listerner
button.addEventListener("click", changeText);
