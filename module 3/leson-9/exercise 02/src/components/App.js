import React from "react";
import "../components/App.scss";
import paletteData from "../data/palettesData.json";
import PaletteList from "./PaletteList";

const [collapsable, setcollapsable] = useState("open");

const handlePalette = (ev) => {
  setCollapsable("open");
};

function App() {
  console.log(paletteData);
  return (
    <div className="App">
      <h1>My palettes favorites</h1>
      <PaletteList data={paletteData} onChange={handlePalette} />
      <button> {collapsable}</button>
    </div>
  );
}

export default App;
