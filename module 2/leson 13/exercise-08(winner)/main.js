"use strict";
/*
A-veriguar quién ha ganado.
B-el acumulador puede ser cualquier valor
C-ejemplo un objeto que sea nuestro candidato
*/

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];
//si el índice del tiempo (de cada elemento) es menor al tiempo que acumula
const getWinner = function (acc, indexArr) {
  debugger;
  if (indexArr.time < acc.time) {
    return indexArr;
  } else {
    return acc;
  }
};

const win = runners.reduce(getWinner);
console.log(win);
