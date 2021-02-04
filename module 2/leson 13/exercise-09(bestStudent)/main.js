"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const getStudents = runners.filter((student) => student.student);
console.log(getStudents);

function getTheBestStudent(acc, i) {
  if (i.time < acc.time) {
    return i;
  } else {
    return acc;
  }
}
const theBest = getStudents.reduce(getTheBestStudent);
console.log(theBest);
