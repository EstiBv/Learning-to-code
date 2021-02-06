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
  const saveDataTheme = () => {
    if (listenSelector === "dark") {
      localStorage.setItem("dark", listenSelector);
    } else if (listenSelector === "light") {
      localStorage.removeItem("dark");
      localStorage.setItem("light", listenSelector);
    }
  };
  saveDataTheme();
};

const getDataTheme = () => {
  if (localStorage.getItem("dark")) {
    mainPage.classList.remove("light");
    mainPage.classList.add("dark");
  } else if (localStorage.getItem("light")) {
    mainPage.classList.remove("dark");
    mainPage.classList.add("light");
  }
};
getDataTheme();

for (const selector of selectorTheme) {
  selector.addEventListener("click", changeTheme);
}
