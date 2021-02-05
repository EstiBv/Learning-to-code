"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];
// get timing
const timingsRun = runners.map((runner) => runner.time);
console.log(timingsRun);

// get order times
const getOrderTimes = () => {
  const orderTime = timingsRun.sort((a, b) => a - b);
  console.log(orderTime);
};

getOrderTimes();

// REFACTORING
runners.sort((a, b) => a.time - b.time);
console.log(runners);
