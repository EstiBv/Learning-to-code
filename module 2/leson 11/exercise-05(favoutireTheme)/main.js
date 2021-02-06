"use strict";

const selectorTheme = document.querySelectorAll(".js-input");
const mainPage = document.querySelector(".main");
const sectionText = document.querySelector(".js-paragraphs");

const changeTheme = (ev) => {
  const listenSelector = ev.currentTarget.value;

  if (listenSelector === "dark") {
    mainPage.classList.remove("light");
    mainPage.classList.add("dark");
  } else if (listenSelector === "light") {
    mainPage.classList.remove("dark");
    mainPage.classList.add("light");
  }
};

for (const selector of selectorTheme) {
  selector.addEventListener("click", changeTheme);
}
