import React from "react";
import "./App.scss";
import Form from "./Form";
import Article from "./Article";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
      age: "",
      genre: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(name, value) {
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>What's your favorite film?</h1>
        <Form handleInput={this.handleInput} />
        <Article />
      </React.Fragment>
    );
  }
}

export default App;
