"use strict";
const list = document.querySelector(".js-list");
const cities = document.querySelectorAll(".js-item");
const images = document.querySelectorAll(".js-img");

function selectCity(ev) {
  const clickItems = ev.currentTarget.value;

  for (let i = 0; i < images.length; i++) {
    if (clickItems === "1") {
      images[i].src =
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Gran_V%C3%ADa_%28Madrid%29_1.jpg";
    }
    if (clickItems === "2") {
      images[i].src =
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg";
    }
    if (clickItems === "3") {
      images[i].src =
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Bilbao_-_Guggenheim_aurore.jpg";
    }
  }
}

list.addEventListener("change", selectCity);
