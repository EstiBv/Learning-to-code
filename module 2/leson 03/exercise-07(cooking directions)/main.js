"use strict";
let ingredient = "Pasta";

switch (ingredient) {
  case "Huevos":
    console.log("Puedes preparte unos huevos con patatas fritas");
    break;
  case "Pollo":
    console.log(
      "Puedes prepararte unos sabrosos filetes de pollo a la plancha"
    );
    break;
  case "Lentejas":
    console.log("Unas lentejitas siempre se agradecen");
    break;
  case "Calabaza":
    console.log("La calabaza puedes hacerla puré u hornerarla, está deliciosa");
    break;
  case "Pasta":
    console.log("Cualquier pasta liga a la perfección con la putanesca");
    break;
  case "Romanesco":
    console.log(
      "Recuerda que el romanesco tiene un tiempo de hervor menor que la coliflor y es mas suave"
    );
    break;
  default:
    console.log("Nada en la nevera? Siempre puedes pedir una pizza");
}
