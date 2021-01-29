"use strict";
const innerhoursByDay = document.querySelector(".day");
const innerhoursByWeek = document.querySelector(".week");
const innerhoursByMonth = document.querySelector(".month");
const innerhoursByYear = document.querySelector(".year");
const innerTotalHoursLived = document.querySelector("p");

const hoursByDay = 24;
console.log(hoursByDay);
innerhoursByDay.innerHTML = ` By day: ` + hoursByDay;

const hoursByWeek = hoursByDay * 7;
console.log(hoursByWeek);
innerhoursByWeek.innerHTML = ` By week: ` + hoursByWeek;

const hoursByMonth = hoursByWeek * 4;
console.log(hoursByMonth);
innerhoursByMonth.innerHTML = ` By month: ` + hoursByMonth;

const hoursByYear = hoursByMonth * 12;
console.log(hoursByYear);
innerhoursByYear.innerHTML = ` By year: ` + hoursByYear;

const totalHoursLived = hoursByYear * 30;
console.log(totalHoursLived);
innerTotalHoursLived.innerHTML = ` Total: ` + totalHoursLived;
