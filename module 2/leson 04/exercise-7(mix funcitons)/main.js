"use strict";

// class selector
function getEl(a) {
  const classListSelector = document.querySelector(a);
  return classListSelector;
}

//even or odd
function evenOrOdd(a) {
  if (a % 2 === 0) {
    console.log(`El número introducido: ${a} es par`);
    return true;
  } else {
    console.log(`El número introducido: ${a} es impar`);
  }
  return false;
}

const btnEl = getEl(".number").innerHTML;

const parseValueNumber = parseInt(btnEl);

evenOrOdd(parseValueNumber);

console.log(btnEl, parseValueNumber);
