import React from "react";
// const { render } = require("@testing-library/react");

const Older = (props) => {
  const HandleAge = () => {
    props.getYears();
    console.log("hola");
  };
  return (
    <>
      <p>Hoy tengo {props.years} años de edad</p>

      <input type="button" value="Hazme más vieja" onClick={HandleAge} />
    </>
  );
};
export default Older;
