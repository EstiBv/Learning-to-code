"use strict";

// Ejercicio 1
function getNumber() {
  fetch("https://api.rand.fun/text/password?length=10")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-password").addEventListener("click", getNumber);

// Ejemplo emoji
function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result2").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);
