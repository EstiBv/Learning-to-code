"use strict";

const msg = document.querySelector(".msg");

const expiredSesion = () => {
  msg.innerHTML = "Su sesión ha expirado";
};
setTimeout(expiredSesion, 6000);
