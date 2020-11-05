import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MediaCard from "./components/MediaCard";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MediaCard />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
