"use strict";

let acc = 0;

for (let i = 0; i < 10; i++) {
  let result = i + acc++;
  console.log(`el resultado es  ${result}`);
}
