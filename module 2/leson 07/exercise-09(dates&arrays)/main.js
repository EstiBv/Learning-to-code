"use strict";

const items = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron",
  },
];

// for (let i = 0; i > items.length; i++) {
//   let data = items[i];
//   let typeData = typeof data;
// }

console.log(`El Valor inicial es ` + typeof items[0]);
console.log(`El Valor secundario es ` + typeof items[1]);
console.log(
  `El tercero es ` + Array.isArray(items[2]) + " es un array: " + items[2]
);
console.log(`Y el cuarto es un ` + typeof items[3]);
