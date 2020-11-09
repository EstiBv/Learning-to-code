import React from "react";
import "./App.css";

const handleOnion = (ev) => {
  if (ev.target.value.includes("cebolla")) {
    alert("CEEBOOOOLLA PECADORALLR!");
  }
};
class OnionHater extends React.Component {
  render() {
    return <textarea onChange={handleOnion}></textarea>;
  }
}

export default OnionHater;
