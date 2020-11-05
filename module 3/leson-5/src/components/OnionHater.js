import React from "react";

const detectOnion = (ev) => {
  if (ev.target.value.includes("cebolla")) {
    alert("CEEBOOOOLLA PECADORALLR!");
  }
};
class OnionHater extends React.Component {
  render() {
    return <textarea onChange={detectOnion}></textarea>;
  }
}

export default OnionHater;
