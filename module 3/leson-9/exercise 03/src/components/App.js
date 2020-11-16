import React from "react";
import "../components/App.scss";
import NumbersOne from "./NumbersOne";

class App extends React.Component {
  render() {
    return (
      <ul className="App">
        My list numbers
        <NumbersOne />
      </ul>
    );
  }
}

export default App;
