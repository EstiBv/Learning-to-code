import React from "react";
import "./App.css";

const handleOnion = (ev) => {
  if (ev.target.value.includes("cebolla")) {
    // alert("CEEBOOOOLLA PECADORALLR!");
    // this.style.backgroundColor = "red";
  }
};
class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.rePaint = this.rePaint.bind(this);
  }
  rePaint(ev) {
    this.forceUpdate();
  }
  render() {
    return <textarea onChange={this.rePaint}></textarea>;
  }
}

export default OnionHater;
