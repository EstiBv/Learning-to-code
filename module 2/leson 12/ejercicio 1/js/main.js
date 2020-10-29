"use strict";

const numbers = [1, 2, 3];

for (const newList of numbers) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode("order");
  newItem.appendChild(newContent);
  console.log(newItem);
}
