"use strict";
const form = document.querySelector(".js-form");
const inputName = document.querySelector(".js-name");
const name1 = document.querySelector(".js-name1");

// paint
function paintValue() {
  const inputNameValue = inputName.value;
  name1.innerHTML = inputNameValue;
  setInfoLocalStorage();
}
inputName.addEventListener("keyup", paintValue);

// set input value
const setInfoLocalStorage = () => {
  const inputNameValue = inputName.value;
  localStorage.setItem("name", inputNameValue);
};

// reload and paint
const cacheLocal = () => {
  const dataLocal = localStorage.getItem("name");
  inputName.value = dataLocal;
  name1.innerHTML = dataLocal;
};
cacheLocal();
