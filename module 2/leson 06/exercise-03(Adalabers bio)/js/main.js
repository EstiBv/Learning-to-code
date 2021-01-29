"use strict";

const adalabers = document.querySelector(".js-text");

const adalaber = {};
adalaber.name = "María";
adalaber.age = 34;

adalaber.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    " del Carmen " +
    "y tengo " +
    this.age +
    " años"
  );
};
console.log(adalaber.showBio());
