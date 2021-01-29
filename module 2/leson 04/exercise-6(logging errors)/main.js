"use strict";

function getEl(a) {
  const classListSelection = document.querySelector(a);
  if (!classListSelection) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return classListSelection;
}

const btnEl = getEl("btn");
console.log(getEl("btn"));
