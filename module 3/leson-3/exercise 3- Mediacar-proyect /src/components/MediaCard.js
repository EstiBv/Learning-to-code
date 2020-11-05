import React from "react";
import PaintCard from "./PaintCard";
import FernandoS from "../images/FernandoS.jpg";

class MediaCard extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <PaintCard
            name="Fernando Simón"
            data="Lunes 12 de Septiembre de 2020"
            text="Lorem fistrum papaar papaar a wan a wan. Hasta luego Lucas jarl qué dise usteer la caidita te va a hasé pupitaa está la cosa muy malar me cago en tus muelas. Se calle ustée diodenoo hasta luego Lucas se calle ustée caballo blanco caballo negroorl no puedor de la pradera al ataquerl jarl qué dise usteer la caidita. Me cago en tus muelas por la gloria de mi madre ese pedazo de sexuarl qué dise usteer fistro va usté muy cargadoo. A peich ese hombree ese pedazo de no puedor diodeno me cago en tus muelas se calle ustée a wan amatomaa se calle ustée te va a hasé pupitaa. Apetecan la caidita ahorarr mamaar pecador. Pupita te voy a borrar el cerito qué dise usteer por la gloria de mi madre hasta luego Lucas la caidita torpedo."
            image={FernandoS}
            likes="1274"
          />
        </li>
        <li>
          <PaintCard
            name="Fernando Simón"
            data="Lunes 12 de Septiembre de 2020"
            text="Lorem fistrum papaar papaar a wan a wan. Hasta luego Lucas jarl qué dise usteer la caidita te va a hasé pupitaa está la cosa muy malar me cago en tus muelas. Se calle ustée diodenoo hasta luego Lucas se calle ustée caballo blanco caballo negroorl no puedor de la pradera al ataquerl jarl qué dise usteer la caidita. Me cago en tus muelas por la gloria de mi madre ese pedazo de sexuarl qué dise usteer fistro va usté muy cargadoo. A peich ese hombree ese pedazo de no puedor diodeno me cago en tus muelas se calle ustée a wan amatomaa se calle ustée te va a hasé pupitaa. Apetecan la caidita ahorarr mamaar pecador. Pupita te voy a borrar el cerito qué dise usteer por la gloria de mi madre hasta luego Lucas la caidita torpedo."
            image={FernandoS}
            likes="1274"
          />
        </li>
      </ul>
    );
  }
}
export default MediaCard;
