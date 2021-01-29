"use strict";
let year = 2019;

if (year % 4 === 0) {
  console.log(`el año ${year} es bisiesto`);
} else {
  year % 4 === 1;
  console.log(`el año ${year} no es bisiesto`);
  console.log(`el proximo año bisiesto será ${year + 3}`);
}
