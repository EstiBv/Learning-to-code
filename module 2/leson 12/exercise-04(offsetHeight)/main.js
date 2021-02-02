"use strict";
const texts = document.querySelector(".js-texts");
let styleText = texts.offsetHeight;
const paragraphs = document.querySelector("p");

function controlerHeight() {
  //  Div
  const heigth = (styleText = styleText / 3);
  texts.style.heigth;
  console.log(heigth);
  // paragraphs
  for (let i = 0; i < paragraphs.length; i++) {
    const heigthParagraph = paragraphs[i].offsetHeight;

    console.log(heigthParagraph);
  }
}
controlerHeight();
