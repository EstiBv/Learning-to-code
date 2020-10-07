"use strict";
// exercise 1 - A
// function mult(a, b) {
//   const result = a * b;
//   console.log(result);
//   return result;
// }
// mult(2, 4);

// ex. 1 - B
// function love(patient, work) {
//   const result = patient * work;
//   console.log(result);
//   return result;
// }
// love(40, 60);

// ex. 1 - C
// function learn(paper, computer) {
//   const success = paper * computer;
//   console.log(success);
//   return success;
// }
// learn(2020, 30);

// exercise 2 OJO! LOS PARÁMETROS NUMÉRICOS WTF? DA ERROR

// function media(a, b, c, d) {
//   const result = (10 + 40 + 68 + 3) / 4;
//   console.log(result);
//   return result;
// }
// media();

// exercise 3
function iva(price) {
  const iva = price * 0.21;
  const total = iva + price;
  const text = `el precio es ${price} , el iva es ${iva}  y el total es ${total}`;
  console.log();
  return text;
}
const paragraph = document.querySelector(".title");
paragraph.innerHTML = iva(100);

// exercise 5 + 6
// function getEl(button) {
//   const fixBtnEL = document.querySelector(".btn");
//   const btnEl = getEl(".btn");
//   console.log(btnEl);
//   return btn;
// }
// getEl();

// exercise 6
