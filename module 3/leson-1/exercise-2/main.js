// Ejercicio 2
class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    // Math.pow(base, exponente)
    const calculateSquare = Math.pow(this.side, 2);
    return calculateSquare;
  }
}

const sideOne = new Square(9);
const sideThree = new Square(3);
const sideSeven = new Square(7);

console.log(
  `el primer cuadrado tiene un perímetro de ${sideOne.perimeter()} y un área de ${sideOne.area()}. El segundo cuadrado tiene un perímetro de ${sideThree.perimeter()} y un área de ${sideThree.area()} y el tercero tiene un perímetro de ${sideSeven.perimeter()} y un área de ${sideSeven.area()}`
);
