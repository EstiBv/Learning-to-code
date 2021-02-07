"use strict";

const btn = document.querySelector(".js-button");
const paintList = document.querySelector(".js-list");
const inputText = document.querySelector(".js-input");

const searchResult = [];
if (!localStorage.getItem("searchResult")) {
  for (let i = 1; i < 10; i++) {
    fetch(`https://swapi.dev/api/people/?page=${i}`)
      .then((response) => response.json())
      .then((data) => {
        searchResult.push(data.results);
        localStorage.setItem("searchResult", searchResult);
      });
  }
} else {
  localStorage.getItem("searchResult");
}

function getCharacters(ev) {
  // empty list
  paintList.innerHTML = "";

  // get input text value
  const inputTextSearch = inputText.value;
  console.log(inputTextSearch);
  // request

  // for (let i = 0; i < searchResult.length; i++) {
  //   let name = searchResult[i].name;
  //   let gender = searchResult[i].gender;
  //   let listResults = `<li> ${name}<br>  Género: ${gender} </li>`;
  //   paintList.innerHTML += listResults;
  // }
}
btn.addEventListener("click", getCharacters);
