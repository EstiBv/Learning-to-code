"use strict";

const numbers = [2, 5, 4, 12, 24, 32, 51];
let acc = 0;

function average(array) {
  for (let i = 0; i < array.length; i++) {
    acc = acc + array[i];
  }
  acc = acc / numbers.length;
  console.log("la media del array es: " + acc);
}
average(numbers);
