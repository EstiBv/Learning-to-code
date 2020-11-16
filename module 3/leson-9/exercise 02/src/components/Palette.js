import React from "react";
import PropTypes from "prop-types";

function Palette(props) {
  // const colorList = props.colors.map((item, i) => {
  //   return <li key={i}>{item}</li>;
  // });
  return (
    <div>
      <h2>{props.name}</h2>
      <p> {props.subject} </p>
      {/* <div>
        <ul>{colorList}</ul>
      </div> */}
      <ul>{props.colorList}</ul>
    </div>
  );
}

Palette.propTypes = {
  colorList: PropTypes.array,
  name: PropTypes.string,
  subject: PropTypes.string,
};

export default Palette;
