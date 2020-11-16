import React from "react";
// holas es estilo de las clases de este fichero

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1 className="title">
            <span className="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
