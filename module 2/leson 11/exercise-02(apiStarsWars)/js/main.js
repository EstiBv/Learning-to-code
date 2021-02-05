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

      for (let i = 0; i < results.length; i++) {
        let resultName = results[i].name;
        let resultGender = results[i].gender;
        let listResults = `<li> Personaje: ${resultName}<br>  Género: ${resultGender} </li>`;
        paintList.innerHTML += listResults;
        console.log(listResults, resultName, resultGender);
      }
    });
}

btn.addEventListener("click", getCharacters);
