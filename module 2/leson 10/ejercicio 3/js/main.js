// Ejercicio 3

const btn = document.querySelector(".js-btn");
function nombreFuncion() {
  const input = document.querySelector(".js-input").value;
  /* 1- Se ejecute al pulsar el botón
  2- Contiente un apetición a la API para obtener info de ese usuario */

  fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      /* esto es una lista y puedo meterlo en un array, para recorrerlo, y alañadir datos a las clases del html */
      const dateName = document.querySelector(".name");
      dateName.innerHTML += data.login;
      console.log(dateName);

      const dateRepo = document.querySelector(".repo");
      dateRepo.innerHTML += data.public_repos;
      console.log(dateRepo);

      const dateImg = document.querySelector(".js-img");
      dateImg.src = data.avatar_url;
      dateRepo.alt = "User GitHub";
    });
  // .catch(err => {
  //   console.log("ha ocurrido un error");
  // })
}

btn.addEventListener("click", nombreFuncion);

// pintar
// userGitHub () => {

// }
