import React from "react";
// holas es estilo de las clases de este fichero

class HeaderForm extends React.Component {
  render() {
    return (
      <form className="text-align-right">
        <button className="form__btn" />
        <span className="fas fa-inbox"></span>
        Recibidos
        <button className="form__btn" />
        <span className="fas fa-trash"></span>
        Papelera
        <input
          className="form__input-text"
          type="text"
          placeholder="Buscar un correo"
        />
      </form>
    );
  }
}

export default HeaderForm;
