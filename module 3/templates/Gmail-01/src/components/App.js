import React from "react";
import Header from "./Header";
import HeaderForm from "./HeaderForm";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
/* el nombre del array el el fichero importado de dataEmails.json y es datos no mayúscula*/
import emails from "../data/dataEmails.json";

function App() {
  const emailListData = emails.map((email) => {
    /* si segundo argumento el i y lo metemos en key tambien ok. React necesita el atributo key para pintar un array, lo mejor el id original del array, mas que el i, puede que necesitemos modificar el orden */
    return (
      <EmailItem
        from={email.fromName}
        subject={email.subject}
        time={email.date}
        key={email.id}
      />
    );
    /* mas elegante meterlo en funcion fuera, pues pinta los emails, esta funcion luego {llamarla()} en el tbody, el lugar donde pinta todo*/
  });
  return (
    <div>
      <Header />
      <HeaderForm />
      <table className="table">
        <tbody>{emailListData}</tbody>
      </table>
      <EmailReader
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        subject={emails[0].subject}
        body={emails[0].body}
      />
    </div>
  );
}

export default App;
