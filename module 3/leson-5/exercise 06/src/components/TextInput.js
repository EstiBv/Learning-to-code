import React from "react";
import MIMITranslator from "./MIMITranslator";

// guarda los cambios que se hacenen el input y se los pasa a su madre
function TextInput(props) {
  const handleKeyUp = (ev) => {
    const inputText = ev.target.value;
    props.handleTextProp(inputText);

    const miMi = () => {
      inputText.replace("aáeéoóuú", "i");
    };
  };

  return (
    <>
      <label htmlFor="mimi">¿Qué opinas?</label>
      <form action="POST">
        <textarea
          name="text"
          id="mimi"
          cols="30"
          rows="10"
          onKeyUp={handleKeyUp}
        ></textarea>
      </form>
      <MIMITranslator handleTranslate={TextInput} />
    </>
  );
}

export default TextInput;
