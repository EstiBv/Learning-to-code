"use strict";

const text = document.querySelector(".time");

let counter = 0;
const counterInner = () => {
  counter += 1;
  text.innerHTML = `escrito hace...${counter} segundos `;
  if (counter >= 60) {
    text.innerHTML = `escrito hace...1 minuto `;
  }
  console.log("hola");
};
setInterval(counterInner, 1000);
