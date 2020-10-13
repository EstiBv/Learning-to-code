"use strict";
// EJERCICIO 2
// const userName = "Alicia";

// if (userName === "Alicia") {
//   console.log("welcome to paradise");
// } else if (userName === "Estíbaliz") {
//   console.log("welcome to paradise again");
// } else {
//   console.log("Sorry, you will go to the hell");
// }
// EJERCICIO 3 y 4 RESUELTO EN PAIR (AliciaColom)

// EJERCICIO 5
const container = document.querySelector(".container");
const message = document.querySelector(".title");
const textAlert = document.querySelector(".textArea");

if (container.classList.contains(".warning")) {
  message.innerHTML = 'AVISO';
  textAlert.innerHTML = 'Tenga cuidado';
  container.classList.add("warning");
  
} else if (container.classList.contains(".success")){
  message.innerHTML = 'CORRECTO';
  textAlert.innerHTML = 'Los datos son correctos';
  container.classList.remove("warning");
  container.classList.add("success");
}
 else (container.classList.contains(".error"))
  message.innerHTML ='ERROR'
  textAlert.innerHTML = 'Ha surgido un error'
  container.classList.remove("success");
  container.classList.add("error");

 