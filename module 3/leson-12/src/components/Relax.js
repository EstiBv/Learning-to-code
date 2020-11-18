import React from "react";
import { Link } from "react-router-dom";

class Relax extends React.Component {
  render() {
    return (
      <section className="counter_container">
        <p>No te rindas, queda poco para desansar y repasar</p>
        <Link to="/">
          <button className="btn">Éxito</button>
        </Link>
      </section>
    );
  }
}

export default Relax;
