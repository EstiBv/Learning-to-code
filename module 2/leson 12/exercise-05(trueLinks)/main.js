"use strict";
// links
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
// paragraph
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

const stopClick = (ev) => {
  ev.preventDefault();

  let listenItemClicked = ev.currentTarget;
  console.log(listenItemClicked);
  let getIdItemClicked = listenItemClicked.getAttribute("data-id");
  console.log(getIdItemClicked);

  if (getIdItemClicked === "item1") {
    let itemCoordinates = text1.getBoundingClientRect();
    window.scrollTo(itemCoordinates.left, itemCoordinates.top - 200);
    console.log(itemCoordinates, "1");
  } else if (getIdItemClicked === "item2") {
    let itemCoordinates = text2.getBoundingClientRect();
    window.scrollTo(itemCoordinates.left, itemCoordinates.top - 100);
    console.log(itemCoordinates, "2");
  } else if (getIdItemClicked === "item3") {
    let itemCoordinates = text3.getBoundingClientRect();
    window.scrollTo(itemCoordinates.left, itemCoordinates.top - 75);
    console.log(itemCoordinates, "3");
  }
};
item1.addEventListener("click", stopClick);
item2.addEventListener("click", stopClick);
item3.addEventListener("click", stopClick);
