"use strict";

const messageElement = document.querySelector(".message");
const messageTitle = document.querySelector(".message--title");
const messageText = document.querySelector(".message--text");

const themesMessages = messageElement.classList.contains("warning")
  ? (messageTitle.innerHTML = "Aviso") &&
    (messageText.innerHTML = "Tenga cuidado")
  : messageElement.classList.contains("error") &&
    (messageTitle.innerHTML = "Error") &&
    (messageText.innerHTML = "Ha ocurrido un error");

messageElement.classList.contains("success")
  ? (messageTitle.innerHTML = "Correcto")
  : (messageText.innerHTML = "Los datos son correctos");
