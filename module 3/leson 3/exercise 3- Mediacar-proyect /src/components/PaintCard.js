import React from "react";
import FernandoS from "../images/FernandoS.jpg";
import "../styles/App.css";

class PaintCard extends React.Component {
  render() {
    const nameUser = <>Fernando Simón</>;
    const dataCard = <> Lunes 2 de Noviembre de 2020</>;
    const likesUser = <> 1247</>;
    // la img ?
    const paragraphUser = (
      <>
        {" "}
        Me cago en tus muelas a gramenawer está la cosa muy malar está la cosa
        muy malar. La caidita condemor hasta luego Lucas pupita. Llevame al
        sircoo fistro ahorarr a peich caballo blanco caballo negroorl a wan a
        gramenawer de la pradera me cago en tus muelas al ataquerl. Caballo
        blanco caballo negroorl jarl a gramenawer amatomaa se calle ustée la
        caidita. Diodeno ese hombree pecador a peich sexuarl a peich.
      </>
    );

    const appNameHeader = (
      <header className="Card__header">
        <img src={FernandoS} className="Card__simon" alt="author" />
        <section className="Card__title">
          <h1 className="Card__title--author">{nameUser}</h1>
          <p className="Card__title--data">{dataCard}</p>
        </section>
      </header>
    );
    const appNameMain = (
      <main className=" Card__article">
        <p>{paragraphUser}</p>
        <small className="Card__small">
          Leer mas... <span className="Card__likes"> {likesUser} ❤︎</span>
        </small>
      </main>
    );

    const containerPage = (
      <div className="Card__front">
        {appNameHeader}
        {appNameMain}
      </div>
    );

    const AppRoot = <div className="Card"> {containerPage}</div>;

    return AppRoot;
  }
}
export default PaintCard;
