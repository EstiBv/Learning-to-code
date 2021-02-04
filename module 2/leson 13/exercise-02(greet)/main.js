"use strict";

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const greetUsers = () => {
  const greet = names.map((name) => `Bienvenida ${name}`);
  console.log(greet);
};
greetUsers();
