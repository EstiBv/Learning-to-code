"use strict";

const selectButton = document.querySelector(".js-btn");
const listFilms = document.querySelector(".listFilms");

// films
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

function films() {
  listFilms.innerHTML = `<li>${inception} </li><li>${theButterFlyEffect} </li> 
    <li>${eternalSunshineOfTheSM} </li><li> ${blueVelvet} </li> 
    <li>${split}</li>`;
}
selectButton.addEventListener("click", films);

/* second event >> currentTarget todo el listado, target solo el li concreto*/
function clickFilm(ev) {
  const listenList = ev.target.innerHTML;
  console.log(`has seleccionado ${listenList} `);
}
listFilms.addEventListener("click", clickFilm);
