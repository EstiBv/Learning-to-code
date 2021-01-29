"use strict";
// objeto : bloque de código dentro de una variable.
const paragrah = document.querySelector(".js-text");
function adalabers() {
  const adalaber1 = {
    // Propiedades> clave:valor,
    name: "Susana",
    age: 34,
    // objeto dentro de objeto
    activity: {
      job: "periodista",
    },
  };
  const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
  };
  // métodos del objeto 2
  adalaber2.run = () => `Estoy corriendo`;
  adalaber2.runAMarathon = (distance) => `una maratón de ${distance} km.`;
  paragrah.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${
    adalaber2.age
  } años y soy ${adalaber2.job}. ${adalaber2.run()}`;
  console.log(adalaber2.run() + " Sí, " + adalaber2.runAMarathon(50));
}
adalabers();
