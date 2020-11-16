import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [name, setName] = useState("");
  // en el constructor
  // this.state = { name: '', email: '', phone: '' }
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleForm = (inputKey, inputValue) => {
    if (inputKey === "name") {
      // this.setState({ name: inputValue });
      // this.setState({ [inputKey]: inputValue });
      setName(inputValue);
    } else if (inputKey === "email") {
      setEmail(inputValue);
    } else if (inputKey === "phone") {
      setPhone(inputValue);
    }
    console.log("Algo ha cambiado", inputKey, inputValue);
  };

  return (
    <>
      <Form handleForm={handleForm} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </>
  );
}

export default App;
