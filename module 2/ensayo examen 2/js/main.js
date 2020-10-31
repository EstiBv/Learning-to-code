"use strict";
const inputText = document.querySelector(".js-inputText");
const btnSearch = document.querySelector(".js-btn");
const results = document.querySelector(".js-searchResults");
const asideFav = document.querySelector(".js-saveFavorites");

let dataSeriesTv = [];
let dataSeriesTvFav = [];
let dataSeriesGenre = [];

// función petición de datos al servidor que llama a pintar

function getDataSeries() {
  let inputValue = inputText.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      dataSeriesTv = data;
      paintCard();
      listenSeries();
    });
}

// leer y ver si hay algo guardado
const getInLocalStorage = function () {
  const localStorageFav = localStorage.getItem("Favorites SeriesTv");
  if (localStorageFav !== null) {
    dataSeriesTvFav = JSON.parse(localStorageFav);
  }
};

// guardar localStorage
const setInLocalStorage = function () {
  const stringifyFav = JSON.stringify(dataSeriesTvFav);
  localStorage.setItem("Favorites SeriesTv", stringifyFav);
};

// función pintar tarjeta con o sin img que llama a escuchar
function paintCard() {
  let showResults = "";
  for (let i = 0; i < dataSeriesTv.length; i++) {
    // si dataSeriesTv[i] está en fav
    const favIndex = dataSeriesTvFav.findIndex(
      (serieFav) => serieFav.show.id === dataSeriesTv[i].show.id
    );
    if (favIndex !== -1) {
      showResults += `<li class = "js-serie js-markFav" id="${[i]}">`;
    } else {
      showResults += `<li class = "js-serie" id="${[i]}">`;
    }
    showResults += `<p>${dataSeriesTv[i].show.name}</p>`;
    // showResults += `<p>${dataSeriesTv[i].show.genres}</p>`;
    if (dataSeriesTv[i].show.genres.comedy == true) {
      showResults += `<p class= "genres-C">${dataSeriesTv[i].show.genres.comedy}</p>`;
    } else if (dataSeriesTv[i].show.genres.drama !== true) {
      showResults += `<p class= "genres-D">${dataSeriesTv[i].show.genres}</p>`;
    }

    showResults += `<div>`;
    if (dataSeriesTv[i].show.image !== null) {
      showResults += `<img src="${dataSeriesTv[i].show.image.medium}" alt="show tv image"/> `;
    } else if (dataSeriesTv[i].show.image === null) {
      showResults += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?" alt="show tv image"/> `;
    }
    showResults += `</div>`;
    showResults += "</li>";
  }
  results.innerHTML = showResults;
  listenSeries();
}

// pintar favoritas

function paintFavorites() {
  let showFavors = " ";
  for (let i = 0; i < dataSeriesTvFav.length; i++) {
    showFavors += `<li class = "js-serie-fav" id =${[i]} >`;
    showFavors += `<p><input type="button" value="x" class="btn-Fav" id="${i}"/> ${dataSeriesTvFav[i].show.name} </p>`;
    showFavors += `<div>`;
    showFavors += `<p>${dataSeriesTvFav[i].show.genres}</p>`;
    if (
      dataSeriesTvFav[i].show.image !== null &&
      dataSeriesTvFav[i].show.image === undefined
    ) {
      showFavors += `<img src="${dataSeriesTv[i].show.image.medium}" alt="show tv image"/>`;
    } else if (dataSeriesTvFav[i].show.image === null) {
      showFavors += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?" alt="show tv image"/> `;
      showFavors += `</div>`;
      showFavors += "</li>";
    }
  }
  asideFav.innerHTML = showFavors;
  listenListButton();
}

// listen buttons series Favorites
function listenListButton() {
  const buttonsRemove = document.querySelectorAll(".btn-Fav");
  for (const buttonRemove of buttonsRemove) {
    buttonRemove.addEventListener("click", removeSerieFav);
    // console.log(buttonRemove, "eo");
  }
}

const removeSerieFav = (ev) => {
  console.log("han clicado soy el", ev.currentTarget);
  console.log("bye");
  /*if (buttonsRemove === foundSerie) {
  }  buttonsRemove.splice(inicio, fin); */
};

// función escuchar favoritas
/*1 obtengo posición(id) del clicado y convierto a numero + añado a favo+ añado clase desde el evento*/
function listSeriesFav(ev) {
  let clickedId = ev.currentTarget.id;
  clickedId = parseInt(ev.currentTarget.id);
  dataSeriesTvFav.push(dataSeriesTv[clickedId]);

  setInLocalStorage();
  paintCard();
  paintFavorites();
  listSeriesFav();
}

// Función de escuchar a todas (array y listen click) el evento lo tiene la superior
function listenSeries() {
  const seriesItems = document.querySelectorAll(".js-serie");
  for (const serieItem of seriesItems) {
    serieItem.addEventListener("click", listSeriesFav);
  }
}

// recuperar datos de favoritos al arrancar la pág
// y paintFavorites() aqui da despues pero da error el show.image;
getInLocalStorage();
paintFavorites();

// función listen del click
const search = function (ev) {
  ev.currentTarget;
  ev.preventDefault();
  getDataSeries();
};
btnSearch.addEventListener("click", search);
