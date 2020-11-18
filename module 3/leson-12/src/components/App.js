import React from "react";
import "../components/App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Counter from "./Counter";
import Relax from "./Relax";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/counter" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </div>
    );
  }
}

export default App;
