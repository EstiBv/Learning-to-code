"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// 1 . Introducir imagen elemento <img>
// let elementImgAvatar = document.querySelector(".user__avatar");
// elementImgAvatar.setAttribute("src", userAvatar);

// 2 . Ahora vamos a plantear que userAvatar pueda no contener una URL
// let elementImgAvatar = document.querySelector(".user__avatar");
// elementImgAvatar = elementImgAvatar.setAttribute("src", "" || userAvatar);

// // 3 . Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí,
let elementImgAvatar = document.querySelector(".user__avatar");
elementImgAvatar = elementImgAvatar.setAttribute(
  "src",
  DEFAULT_AVATAR || userAvatar
);
