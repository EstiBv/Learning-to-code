import { Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Pricing from "./Pricing";
import About from "./About";
import Home from "./Home";

/*importar Switch y router y pasar el componente <Switch> <Route path="/" y el componente que querarmos ej: component = {Landing}<Switch>*/

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello world</header>
      <nav>
        <ul>
          <li>
            <Link to="/pricing"> Pricing</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/home"> Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {/* importar rutas mas especificas arriba y mas generales debajo */}
        <Route exact path="/" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
