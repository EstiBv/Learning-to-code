"use strict";

const numbers = [];

function get100Numbers() {
  for (let i = 1; i < 101; i++) {
    numbers.push(i);
  }
  numbers.reverse();
  console.log(numbers);
}
get100Numbers();
