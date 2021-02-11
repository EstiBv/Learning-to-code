"use strict";
// ------ counter
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);

// ------ timer

let timer = 0;

const incrementAndShowTimer = () => {
  timer++;
  const timerParagraph = document.querySelector(".timer");
  timerParagraph.innerHTML = timer;
};
setInterval(incrementAndShowTimer, 2000);
