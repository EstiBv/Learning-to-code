import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
// import App from "./components/App";
import PaintCard from "./components/PaintCard";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <PaintCard />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
/* al llamar a app me da error line 1, aunque se pinta. Si quito paintCard y line 5, no error pero no se pinta ¿? */
