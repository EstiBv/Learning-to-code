"use strict";

const btn = document.querySelector(".js-button");
const paintList = document.querySelector(".js-list");

function getCharacters() {
  // empty list
  paintList.innerHTML = "";

  // get input text value
  const inputText = document.querySelector(".js-input").value;
  console.log(inputText);

  // request
  fetch(`https://swapi.dev/api/people/?search=${inputText}`)
    .then((response) => response.json())
    .then((data) => {
      let results = data.results;
      /*
      Con map() se pintan en cadena en el <li>, no es listado uno a uno por eso aplico un for

      let name = results.map((data) => data.name).sort();
      let gender = results.map((data) => data.gender).sort();
      */

      for (let i = 0; i < results.length; i++) {
        let name = results[i].name;
        let gender = results[i].gender;
        let listResults = `<li> ${name}<br>  Género: ${gender} </li>`;
        paintList.innerHTML += listResults;
      }
    });
}

btn.addEventListener("click", getCharacters);
