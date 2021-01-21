import React from "react";

// import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    return (
      <li className="list__container">
        <form action="">
          <label htmlFor="text">Búsqueda por nombre</label>
          <input type="text" />
          <label htmlFor="text">Búsqueda por localización</label>
          <input type="text" />
          <label htmlFor="text">Búsqueda por edad</label>
          <input type="text" />
        </form>
        <img src="" alt="" />
      </li>
    );
  }
}

export default Card;
