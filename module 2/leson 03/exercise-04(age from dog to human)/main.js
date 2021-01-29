"use strict";

const firstYearDog = 15;
const secondYearDog = 9;
const thirdYearDog = 5;

let yearsToCover = 3;

if (yearsToCover === 1) {
  console.log(`La perreta tiene ${firstYearDog} años humanos.`);
} else if (yearsToCover === 2) {
  console.log(`La perreta tiene ${secondYearDog} años humanos.`);
} else {
  console.log(
    `La perreta tiene ${
      firstYearDog + secondYearDog + (yearsToCover - 2) * yearsToCover
    } años humanos.`
  );
}
