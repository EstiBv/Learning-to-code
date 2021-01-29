"use strict";

function calculateIVA(a) {
  const priceFreeIVA = a;
  const iva = a * 0.21;
  const priceIVA = priceFreeIVA + iva;
  return `Precio sin IVA: ${priceFreeIVA}, IVA: ${iva} y Total: ${priceIVA}`;
}
console.log(calculateIVA(40));
