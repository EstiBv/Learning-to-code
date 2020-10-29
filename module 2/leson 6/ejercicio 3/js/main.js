"use strict";

const adalabers = document.querySelector(".js-text");

const adalaber = {};
adalaber.name = "María";
adalaber.age = "34";

adalaber.showBio = function () {
  return this.name + " del Carmen";
};
console.log("Mi nombre es " + adalaber.showBio());
