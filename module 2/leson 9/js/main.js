"use strict";
/* EL DEMONI SI SE SUSTITUYE EN FOR POR i++ numberAdd.push porque es indicar que al array vacío se añada un valor mas, es decir, vacío mas 1: a bucle en formato contador. 
EL DEMONI 2.0 ES SI EN FOR i < se añade 0, así el barranco al vacío directo */

// // EJERCICIO 1
// const numberAdd = [];
// function get100Numbers(arr) {
//   for (let i = 0; i < 100; i++) {
//     arr.push(i);
//     console.log (i);
//   }
// } 
// console.log(get100Numbers(numberAdd));

// // EJERCICIO 2
// // const numberAdd2 = [];
// // llamar a la función en una constante
// function getReversed100Numbers(arr){
//     for (let i = 0; i < 100; i++) {
//       arr.push(i);
//       console.log (i);
//       // numberAdd2.reverse();
//       console.log (numberAdd2.reverse());
//     }
    
//   } 
//   console.log(getReversed100Numbers(numberAdd2));



// // EJERCICIO 3
// const lostNumbers = [4, 8, 15, 16, 23, 42];
// const arrayEmpty = [];
// const arrayUnEmpty = [];

// function bestLosNumbers () {
//   for (let i = 0; i < lostNumbers.length; i ++){
//     if (lostNumbers [i] % 2 === 0) {
//       arrayEmpty.push (lostNumbers[i]);
/* tambien se puede poner un numero multiplo de 3 igual que en enteros, pero asi: (lostNumbers [i]% 3 === 0)*/
//     } else if  (lostNumbers [i] / 3 === Math.ceil(lostNumbers [i] / 3));{
//       arrayUnEmpty.push (lostNumbers [i]);
//     }
//   }
// }
// bestLosNumbers ();
// console.log(arrayEmpty);
// console.log(arrayUnEmpty);
// const result = arrayEmpty.concat(arrayUnEmpty);
// console.log(result);

// EJERCICIO 4 
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
]; 
/* así se introduce una etiqueta al htlm, primero llamo la clase del lugar donde quiero meter el elemento de html, luego imprimo la etiqueta de ese elemento(la lista ) y finalmente, en esa etiqueta le digo el qué, que es primeor el orden que tiene asignado en el array y por ultimo la propiedad del objeto que le corresponde y que me interesa (name si, completed no) */
const newList = document.querySelector (".js-list");

for (let i = 0; i < tasks.length; i++) {
  newList.innerHTML += `<li class = "list-complete"> <input type="checkbox"> ${tasks[i].name} </li>`;
} 
// añadir ir y pintar