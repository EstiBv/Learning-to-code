"use strict";

function evenOrOdd(a) {
  if (a % 2 === 0) {
    console.log(`El número introducido: ${a} es par`);
  } else {
    console.log(`El número introducido: ${a} es impar`);
  }
  return a;
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(9));
