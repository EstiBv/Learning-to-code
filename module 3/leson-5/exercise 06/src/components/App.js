import "../components/App.css";
import React from "react";
import TextInput from "./TextInput";
import MIMITranslator from "./MIMITranslator";

// guarda los cambios que recibe en un atributo y fuerza el repintado de su nieta >>lifting
function Header() {
  const handleText = (data) => {
    data.replace("aáeéoóuú", "i");
    console.log("hola de la abuela", data);
  };
  const miMi = (data) => {
    data.replace("aáeéoóuú", "i");
  };
  return (
    <div className="App">
      <TextInput handleTextProp={handleText} />
      <MIMITranslator value={miMi} />
    </div>
  );
}

export default Header;
