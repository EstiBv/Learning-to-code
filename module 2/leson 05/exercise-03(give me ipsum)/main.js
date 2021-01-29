"use strict";
let addParagraph = document.querySelector(".js-text");

function addText() {
  const addElement = addParagraph.classList.add("js-text2");
  const addParagraphNew = document.querySelector(".js-text2");
  addParagraphNew.innerHTML =
    addParagraph.innerHTML +
    " Lorem fistrum la caidita se calle ustée de la pradera.";
}
addParagraph.addEventListener("mouseover", addText);
