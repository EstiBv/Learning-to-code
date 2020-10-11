"use strict"
const face = document.querySelector(".js-container__face");
const btn = document.querySelector (".js-btn");

// evento
function upDateClick(){
  // verificar pasos con console.log
  console.log("compruebo todo ok")
  /* instrucciones:
  estás siendo escuchado(estás dentro de la funcion que es un evento llamadado upDateClick), así que cuando escuches click en update y escuches click seleccionado en los valores de las caras, imprime el valor de la cara que está siendo seleccionada */
  const click = document.querySelector (".js-select");
  const faceValue = click.value;
  face.innerHTML = faceValue;
  
}
btn.addEventListener ("click",upDateClick);
// primera función dentro del evento resuelta

// segunda función
function numberRandom (){
  /* parse in cuando en la biblio de la acción maths vemos que lo usa al aplicar la función con numeros decimales*/
  console.log (parseInt (Math.numberRandom));
  if (numberRandom % 2 === 0){
    console.log ("par");
    const background = document.querySelector (".js-container");
    // background.classList.add(#ffcc00);
  }
    else {
   console.log ("impar");
   background.classList.remove(#ff9900);
  } 
}