"use strict";

const selectInput = document.querySelector(".js-select");

let inputName = document.querySelector(".js-name");
let inputSurName = document.querySelector(".js-surname");
let inputPhone = document.querySelector(".js-phone");

const itemsForm = [
  {
    name: "Falopia",
    surname: "Moroño",
    phone: 666666999,
  },
  {
    name: "Filomena",
    surname: "Pandémica",
    phone: 664566999,
  },
  {
    name: "Faraona",
    surname: "fuckingMaster",
    phone: 634566999,
  },
];

function autoFillForm(ev) {
  const listenInput = ev.currentTarget.value;
  console.log(listenInput);
  for (let i = 0; i < itemsForm.length; i++) {
    if (listenInput === "user-1") {
      inputName.value = itemsForm[0].name;
      inputSurName.value = itemsForm[0].surname;
      inputPhone.value = itemsForm[0].phone;
    }
    if (listenInput === "user-2") {
      inputName.value = itemsForm[1].name;
      inputSurName.value = itemsForm[1].surname;
      inputPhone.value = itemsForm[1].phone;
    }
    if (listenInput === "user-3") {
      inputName.value = itemsForm[2].name;
      inputSurName.value = itemsForm[2].surname;
      inputPhone.value = itemsForm[2].phone;
    }
  }
}
selectInput.addEventListener("change", autoFillForm);
