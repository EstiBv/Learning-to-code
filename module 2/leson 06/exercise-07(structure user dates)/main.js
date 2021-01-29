"use strict";

const job = "developer";
const user = {};

user.firstName = "Falopia";
user.lastName = "Moroño";
user.age = 30;
user.job = job;

user.firstName = "Falopina";
user.addYear = function () {
  user.age = user.age + 1;
};
