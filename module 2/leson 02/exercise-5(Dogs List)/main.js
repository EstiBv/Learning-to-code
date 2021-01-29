"use strict";

const listDogGalery = document.querySelector(".dogList");

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

listDogGalery.innerHTML = `<h3> ${firstDogName}</h3> <img src="${firstDogImage}" alt=""> <h3> ${secondDogName}</h3> <img src="${secondDogImage}" alt=""> <h3> ${thirdDogName}</h3> <img src="${thirdDogImage}" alt="">`;
