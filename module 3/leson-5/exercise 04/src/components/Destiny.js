import React from "react";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";

// const selectDestiny = (ev) => {
//   const citySelect = ev.currentTarget.value;
//   alert(`!Tu destino es ${citySelect} !`);
//   console.log(citySelect);
// };
class Destiny extends React.Component {
  render() {
    return (
      <div>
        <CitySelector />
        <CityImage />
      </div>
    );
  }
}

export default Destiny;
