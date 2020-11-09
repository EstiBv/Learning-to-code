import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5 className="price">{this.props.price}€</h5>
      </div>
    );
  }
}
Item.defaultProps = {
  quantity: "0",
  name: "Producto",
  description: "mesaorvidaoladescripsióm",
  category: "Comida",
  price: "0",
};

Item.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string,
};

export default Item;
