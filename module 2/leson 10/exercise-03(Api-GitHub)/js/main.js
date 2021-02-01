// Ejercicio 3

const btn = document.querySelector(".js-btn");
function infoPressButton() {
  /* 1- Se ejecuta al pulsar el botón
  /* 2-.value recoge el valor del input, y esta acción la recoge ésta segunda constante. Ese valor tiene que estar en la url por eso se añade */
  const inputUserValue = document.querySelector(".js-input").value;

  /* 3- Contiente una petición a la API para obtener info de ese usuario */

  fetch(`https://api.github.com/users/${inputUserValue}`)
    .then((response) => response.json())
    .then((data) => {
      /* esto es una lista y puedo meterlo en un array, para recorrerlo, y añadir datos a las clases del html */

      // const listDataUser = document.querySelectorAll("js-list");
      // for (let i = 0; i < listDataUser.length; i++) {
      //   console.log("hola lista");
      // }

      const dateName = document.querySelector(".name");
      dateName.innerHTML += ":" + " " + data.login;
      console.log(dateName);

      const dateRepo = document.querySelector(".repo");
      dateRepo.innerHTML += ":" + " " + data.public_repos;
      console.log(dateRepo);

      const dateImg = document.querySelector(".js-img");
      dateImg.src = data.avatar_url;
      dateRepo.alt = "User GitHub";
    });
  // .catch(err => {
  //   console.log("ha ocurrido un error");
  // })
}

btn.addEventListener("click", infoPressButton);
