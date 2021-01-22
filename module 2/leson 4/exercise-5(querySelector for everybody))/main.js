"use strict";

function getEl(a) {
  const classListSelector = document.querySelector(a);
  return classListSelector;
}

const btnEl = getEl(".btn");
console.log(getEl(".btn"));
