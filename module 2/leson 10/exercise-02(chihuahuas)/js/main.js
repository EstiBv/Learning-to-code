// Ejercicio 2
function getDogImage() {
  //añado la clase de imagen random con ? y luego el valor chihuahua
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
// modifico el texto dentro del elemento button del html
btn.innerHTML = "Enséñame otro Chihuahua";
btn.addEventListener("click", getDogImage);

// https://api.empresa.com/v1/perretes?name=chihuahua&limit=10&order=name
