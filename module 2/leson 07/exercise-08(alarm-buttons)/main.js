"use strict";

const buttons = document.querySelectorAll("button");
const bodyPage = document.querySelector("body");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", alarms);
}

function alarms(ev) {
  if (bodyPage.classList.contains("body")) {
    bodyPage.classList.remove("body");
    // console.log(ev);
  } else {
    bodyPage.classList.add("body");
  }
}
