"use strict";
/* uso de push : que agrega un elemento al final del array. Con el método unshift lo añade al inicio del array*/
// const ages = [10,20,30,40,50];
// ages.push(60);
// console.log (ages);

// // añade al inicio 
// ages.unshift(1);
// console.log(ages);

// // retorna la longitud con un elemento más en el array:
// console.log ("longitud",ages.push(45));
// console.log(ages);

// // uso de pop : elimina un elemento al final del array
// const usePop = ["p","o","p"];
// console.log (usePop.pop());
// console.log (usePop);



/* uso de splice: para extraer uno o mas elementos  de un array y/o introducir unos elementos nuevos */
// const ages = [10,20,30,40,50];
// console.log(ages);
// // desde el elemento 2, me extraer uno, en este caso el 30
// const newAges = ages.splice(2, 1);
// console.log(newAges);
// // loguea como queda age ahora sin el elemento extraído
// console.log(ages);

// ------------------------------------

/* uso slice, no modifica el elemento original, y el segundo parámeto del slice es la última posición */
const ages = [10,20,30,40,50];
const newAges = ages.slice(1,3);
console.log (ages);
console.log (newAges);
/*uso de indexof: selecciona un elemento de un array por el orden que tenga asignado */
const agesList = ages.indexOf(1,3,4);
console.log (agesList);
// como no hay 1, pone -1, que es un elemento nuevo y ese elemento lo puedo añadir con push */
const agesList1 = ages.indexOf(30);
console.log(agesList1);