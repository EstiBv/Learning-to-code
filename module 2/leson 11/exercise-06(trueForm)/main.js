"use strict";

const form = document.querySelector(".js-form");
const text = document.querySelector(".js-dataInputs");
// initial user data inputs value
const user = {
  name: "",
  surname: "",
};

// save data
function savedInputsValue(ev) {
  user[ev.target.id] = ev.target.value;
  localStorage.setItem("user", JSON.stringify(user));
  text.innerHTML =
    "Nombre usuario: " + user.name + " " + " Apellido usuario: " + user.surname;
}
form.addEventListener("keyup", savedInputsValue);

// get info

function paintInfoDataUser() {
  let inputName = document.querySelector(".js-inputName");
  let inputSurname = document.querySelector(".js-inputSurname");
  let userInfo = JSON.parse(localStorage.getItem("user"));
  inputSurname.value = userInfo.surname;
  inputName.value = userInfo.name;
}
paintInfoDataUser();
