"use strict";

let side = 9;
const box = 4;

// Ejercicio 1
class Square {
  perimeter(side) {
    return side * box;
  }
  area(side) {
    // Math.pow(base, exponente)
    const calculateSquare = Math.pow(side, 2);
    return calculateSquare;
  }
}

const result = new Square();

console.log(
  `el cuadrado tiene un perímetro de ${result.perimeter(
    side
  )} y un área de ${result.area(side)}`
);
