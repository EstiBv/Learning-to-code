"use strict";

const calculatorBox = (borderBox, width, padding, borderSize) => {
  const result = `El ancho del contenido es: ${width} y el ancho total de la caja es: ${
    width + padding * 2 + borderSize * 2
  }`;

  console.log(result);
  return result;
};
console.log(calculatorBox(true, 300, 30, 1));
