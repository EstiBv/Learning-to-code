"use strict";
const boxCopies = document.querySelector(".js-boxListPunish");

const createCopies = () => {
  for (let i = 0; i < 100; i++) {
    const item = document.createElement("li");
    const content = document.createTextNode(
      "He aprendido bien cómo funcionan los bucles"
    );
    item.appendChild(content);
    boxCopies.appendChild(item);
  }
};

createCopies();
