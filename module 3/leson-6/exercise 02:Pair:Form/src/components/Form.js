//import { useState } from "react";

function Form(props) {
  const HandleForm = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;
    props.handleForm(name, value);
    //console.log(value, name, "hola");
  };

  return (
    <form action="Post" onChange={HandleForm}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="phone" name="phone" />
    </form>
  );
}
export default Form;
