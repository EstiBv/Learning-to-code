"use strict";
const containerText = document.querySelector(".js-paragraphs");

function colorScroll() {
  let minPositionWindow = window.scrollY;

  if (minPositionWindow < 250) {
    containerText.classList.remove("orange");
  } else if ((minPositionWindow = 250)) {
    containerText.classList.add("orange");
  }
}
window.addEventListener("scroll", colorScroll);
