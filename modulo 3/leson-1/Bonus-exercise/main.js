"use strict";

class Poligono {
  constructor(numberOfSide, base, heigth) {
    this.numberOfSide = numberOfSide;
    this.base = base;
    this.heigth = heigth;
  }
  perimeter() {
    return this.base * this.numberOfSide;
  }
  area() {
    return this.base * this.heigth;
  }
}

// const Square = new Poligono(4, 9, 9);
// console.log(Square.perimeter());

class Square extends Poligono {
  constructor(side) {
    super(4);
    this.base = side;
    this.heigth = side;
  }
}

const result = new Square(7);
console.log(result.perimeter());
console.log(result.area());
