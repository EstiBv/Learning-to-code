"use strict";
const innerGreet = document.querySelector("main");

const user1 = "Falopia";
const user2 = "Llilles";
let userName = user1;
userName = user2;

if (userName === user1 || userName === user2) {
  innerGreet.innerHTML = `Welcome  ${userName}`;
} else {
  innerGreet.innerHTML = `Sorry the user isn't exist`;
}
