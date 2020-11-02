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
class Triangle extends Poligono {
  constructor(base, heigth) {
    super(3, base, heigth);
  }
  area() {
    return super.area() / 2;
  }
}

const result = new Square(4);
console.log(result.perimeter());
console.log(result.area());

const result2 = new Triangle(4, 3);
console.log(result2.perimeter());
console.log(result2.area());
