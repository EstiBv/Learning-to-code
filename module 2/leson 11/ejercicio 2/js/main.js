"use strict";
const btn = document.querySelector(".js-inputButton");

fetch("https://swapi.dev/api/people/?search=${paintInput}")
  .then(function (response) {
    console.log(response);
    return response.json;
  })
  .then(function (data) {
    const people = document.querySelector("body");
    people.innerHTML += data.name;
    console.log("hola");
  });

btn.addEventListener("click", fetch);

// swapiModule.getVehicles(function(data) {
// 	console.log("Result of getVehicles", data);
