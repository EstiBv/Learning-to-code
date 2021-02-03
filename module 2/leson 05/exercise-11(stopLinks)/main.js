"use strict";

const menuTeam = document.querySelector(".item1");
const menuUs = document.querySelector(".item2");
const menuContact = document.querySelector(".item3");

const preventDefaultLinks = (ev) => {
  ev.preventDefault();
};

menuContact.addEventListener("click", preventDefaultLinks);
menuUs.addEventListener("click", preventDefaultLinks);
menuTeam.addEventListener("click", preventDefaultLinks);
