import React from "react";
import "./App.css";

class OnionHater extends React.Component {
  constructor() {
    super();
    this.handleOnion = this.handleOnion.bind(this);
    this.isHating = "";
  }

  handleOnion(ev) {
    if (ev.target.value.includes("cebolla")) {
      this.isHating = this.forceUpdate();
      this.isHating = "areaBody";
    } else {
      this.isHating = this.forceUpdate();
      this.isHating = "";
    }
  }

  render() {
    return (
      <main className={this.isHating}>
        <textarea onChange={this.handleOnion}></textarea>
      </main>
    );
  }
}

export default OnionHater;
