import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
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
