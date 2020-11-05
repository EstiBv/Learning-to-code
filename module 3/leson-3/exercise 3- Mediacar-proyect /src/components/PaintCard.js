import React from "react";
import "../styles/App.css";

class PaintCard extends React.Component {
  render() {
    const appNameHeader = (
      <header className="Card__header">
        <img src={this.props.image} className="Card__simon" alt="author" />
        <section className="Card__title">
          <h1 className="Card__title--author">{this.props.name}</h1>
          <p className="Card__title--data">{this.props.data}</p>
        </section>
      </header>
    );
    const appNameMain = (
      <main className=" Card__article">
        <p>{this.props.text}</p>
        <small className="Card__small">
          Leer mas...{" "}
          <span className="Card__likes"> {this.props.likes} ❤︎</span>
        </small>
      </main>
    );

    const containerPage = (
      <div className="Card__front">
        {appNameHeader}
        {appNameMain}
      </div>
    );

    const AppRoot = <div className="Card"> {containerPage}</div>;

    return AppRoot;
  }
}

export default PaintCard;
