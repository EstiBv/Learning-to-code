"use strict";
// ------ counter
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  if (counter <= 12) {
    time.innerHTML = counter;
  } else {
    time.innerHTML = "Happy New Year!";
    clearInterval();
  }
};

setInterval(incrementAndShowCounter, 1000);
