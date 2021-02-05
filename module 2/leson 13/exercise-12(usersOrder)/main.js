"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const orderUsers = () => {
  const orderAlpha = users.map((user) => user.name).sort();
  console.log(orderAlpha);

  const orderPins = users.map((user) => user.pin).sort();
  console.log(orderPins);

  const orderByNameAndPin = users
    .sort((a, b) => a.name - b.name)
    .sort((a, b) => a.pin - b.pin);
  console.log(orderByNameAndPin);
};
orderUsers();
