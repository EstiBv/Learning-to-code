"use strict";
const boxNumbers = document.querySelector(".js-boxList");
const numbers = [1, 2, 3];

const createList = () => {
  for (const newList of numbers) {
    const newItem = document.createElement("li");
    const newContent = document.createTextNode("order");
    // content in li
    newItem.appendChild(newContent);
    // li in ul
    boxNumbers.appendChild(newItem);

    console.log(newItem);
  }
};
createList();
