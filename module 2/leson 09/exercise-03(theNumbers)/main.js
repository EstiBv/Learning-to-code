"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arrayEmpty = [];
const arrayUnEmpty = [];

function bestLosNumbers() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      arrayEmpty.push(lostNumbers[i]);
      /* tambien se puede poner un numero multiplo de 3 igual que en enteros, pero asi: (lostNumbers [i]% 3 === 0)*/
    } else if (lostNumbers[i] / 3 === Math.ceil(lostNumbers[i] / 3));
    {
      arrayUnEmpty.push(lostNumbers[i]);
    }
  }
}
bestLosNumbers();
console.log(arrayEmpty);
console.log(arrayUnEmpty);
const result = arrayEmpty.concat(arrayUnEmpty);
console.log(result);
