"use strict";

const input1 = document.querySelector(".favouriteMovie");
const input2 = document.querySelector(".favouriteMovie2");
const button = document.querySelector(".submitButton");
const answer = document.querySelector(".paragraph");

const movies = [];

function addMovies() {
  movies[0] = input1.value;
  movies[1] = input2.value;
  console.log(movies);

  for (let movie of movies) {
    console.log(
      `A mí tambien me gusta ${movie}! Tenemos mucho en común humana`
    );
  }
}

button.addEventListener("click", addMovies);
