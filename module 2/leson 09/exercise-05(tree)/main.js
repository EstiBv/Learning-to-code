"use strict";

const triangle = "▲";
const arrayTreeAngle = [];

function christmasTree(tree) {
  console.log(tree);
  for (let i = 0; i < tree; i++) {
    arrayTreeAngle.push(triangle);
    console.log(arrayTreeAngle);
  }
}

christmasTree(5);
