import FernandoS from "./FernandoS.jpg";
import "./App.css";

function render() {
  return (
    <div className="Card">
      <section className="Card__front">
        <header className="Card__header">
          <img src={FernandoS} className="Card-simon" alt="author" />
          <h1 className="Card__title">Fernando Simón</h1>
          <p className="Card__date">Lunes 2 de Noviembre de 2020</p>
        </header>
        <article className="Card__article">
          <p>
            Me cago en tus muelas a gramenawer está la cosa muy malar está la
            cosa muy malar. La caidita condemor hasta luego Lucas pupita.
            Llevame al sircoo fistro ahorarr a peich caballo blanco caballo
            negroorl a wan a gramenawer de la pradera me cago en tus muelas al
            ataquerl. Caballo blanco caballo negroorl jarl a gramenawer amatomaa
            se calle ustée la caidita. Diodeno ese hombree pecador a peich
            sexuarl a peich.
          </p>
          <small className="Card__small">
            Leer mas... <span className="Card__likes"> 1247 ❤︎</span>
          </small>
        </article>
      </section>
    </div>
  );
}

export default render;
