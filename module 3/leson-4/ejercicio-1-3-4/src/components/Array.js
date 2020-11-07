import React from "react";
import Item from "./Item";

const arrayOfItems = [
  {
    name: "Cereales con miel",
    description: "Cereales ecologicos",
    quantity: 5,
    category: "Cereales",
    price: 3,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa gusano y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de lanjarón",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    name: "Lúpulo de paciencia",
    description: "Lúpulo concentrado y macerado con paciencia",
    quantity: 20,
    category: "Bebida",
    price: 0,
  },
];

let myArray = [];

let priceItems = [];
priceItems = arrayOfItems.filter((itemPrice) => itemPrice.price < 10);

myArray = priceItems.map((item, i) => (
  <li>
    <Item
      key={i}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      category={item.category}
      price={item.price}
    />
  </li>
));

class Array extends React.Component {
  render() {
    return <ul className="list-items">{myArray}</ul>;
  }
}

export default Array;
