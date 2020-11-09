import React from "react";

const selectDestiny = (ev) => {
  const citySelect = ev.target.value;
  alert(`!Tu destino es ${citySelect} !`);
  console.log(citySelect);
};
class Destiny extends React.Component {
  render() {
    return (
      <div className="destiny-box">
        <p>Elige tu destino</p>
        <select name="select" onChange={selectDestiny}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Tokio">Tokio</option>
        </select>
      </div>
    );
  }
}

export default Destiny;
