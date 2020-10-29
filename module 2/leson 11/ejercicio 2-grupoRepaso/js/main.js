"use strict";

const inputText = document.querySelector(".js-inputText");
const btnSearch = document.querySelector(".js-btn");
const form = document.querySelector(".js-form");
const innerText = document.querySelector(".innerText");

function lookingForCharacter() {
  let inputValue = inputText.value;
  console.log(inputValue);
  debugger;
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      let characters = data.results;
      let paragraph = "";
      for (const character of characters) {
        paragraph += `<li>Tu personaje es ${character.name} y su género es ${character.gender}</li>`;
        console.log(character.name);
        innerText.innerHTML = paragraph;
      }
    });
}
btnSearch.addEventListener("click", lookingForCharacter);
