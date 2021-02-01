"use strict";

const dogs = [];

function getRandomDog() {
  // Api de razas de perros que tras la promesa devuelve un número aleatorio
  fetch("https://dog.ceo/api/breeds/list")
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breedsDogs = breedsData.message;
      for (let i = 0; i < breedsDogs.length; i++) {
        dogs.push(breedsDogs[i]);
      }
      return fetch(`https://api.rand.fun/number/integer?max=${dogs.length}`);
    })
    // Otra peticion a la respuseta del retorno
    .then((randomResponse) => randomResponse.json())
    .then((randomData) => {
      const randomBreed = randomData.result;
      // console.log(randomBreed);
      document.querySelector(".js-text").innerHTML = dogs[randomBreed];
      return fetch(
        `https://dog.ceo/api/breed/${dogs[randomBreed]}/images/random`
      );
    })
    // Otra, para la img a la respuesta del retorno
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector(".js-image");
      img.src = imageData.message;
      img.alt = "Un perrito";
    });
}
document.querySelector(".js-button").addEventListener("click", getRandomDog);
