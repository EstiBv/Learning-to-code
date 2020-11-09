import React from "react";

// recoge lo que le pasa su madre TextInput por props y lo traduce
function MIMITranslator(props) {
  return <p>{props.value}</p>;
}

export default MIMITranslator;
