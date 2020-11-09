import React from "react";

const handleClick = (ev) => {
  return console.log("me han clicado");
};

function EmailReader(props) {
  return (
    <>
      <div className="col2 mt-1 pt-1">
        <div>
          <h2 className="title--meidum">{props.subject}</h2>
          <h3 className="title--small">
            <span className="text--bold display-inline-block mr-1">
              {props.fromName}
            </span>
            <span className="text-normal display-inline-block">
              {" "}
              {props.fromEmail}
              {/* simbolo de cocodrilo >> &lt;info@frontfest.org&gt; << simbolo de cocodrilo */}
            </span>
          </h3>
        </div>
        <div className="text-align-right">
          <a href="link">
            <button className="fas fa-times-circle form__btn"></button>
          </a>
          <a href="link">
            <button className="fas fa-trash form__btn"></button>
          </a>
        </div>
      </div>
      <p>{props.body}</p>
      <div className="mt-1">
        <button className="form__btn" onClick={handleClick}>
          <span className="fas fa-reply"></span>
          Responder
        </button>
        <button className="form__btn">
          <span className="fas fa-reply-all"></span>
          Responder a todos
        </button>
        <button className="form__btn">
          <span className="fas fa-share"></span>
          Reenviar a todos
        </button>
      </div>
    </>
  );
}
export default EmailReader;
