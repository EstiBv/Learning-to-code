"use strict";

const adalabers = [
  {
    name: "María",
    age: 29,
    proffesion: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    proffesion: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    proffesion: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    proffesion: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    proffesion: "diseñadora",
  },
];

function countAdalabers() {
  const totalAdalaber = adalabers.length;
  console.log(totalAdalaber);
  return totalAdalaber;
}
countAdalabers();

let acc = 0;
function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age;
  }
  console.log("La media de edad es de: " + acc / adalabers.length);
}
averageAge();

function theYoungest(array) {
  let minAge = array[0].age;
  let youngest = undefined;

  for (let i = 0; i < array.length; i++) {
    if (array[i].age < minAge) {
      minAge = array[i].age;
    }
    youngest = `La adalaber más joven es ${array[i].name}`;
  }
  return youngest;
}
theYoungest(adalabers);

function countDesigners(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].job === "Diseñadora") {
      total = total + 1;
    }
  }
  return total;
}
countDesigners(adalabers);
