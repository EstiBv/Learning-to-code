import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyText: "",
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText(ev) {
    this.setState({
      copyText: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <input type="text" className="App" onKeyUp={this.handleText} />
        <p>{this.state.copyText}</p>
      </>
    );
  }
}

export default App;
