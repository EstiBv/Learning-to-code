"use strict";

const times = [56, 9, 45, 28, 35];

const averageTimes = times.reduce((acc, i) => acc + i, 0);
const result = averageTimes / times.length;
console.log(averageTimes, result);
