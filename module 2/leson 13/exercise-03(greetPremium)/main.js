"use strict";

console.log("hola");

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const greetPremium = () => {
  const greet = users.map((user) => {
    if (user.isPremium) {
      console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`);
    }
  });
};
greetPremium();
