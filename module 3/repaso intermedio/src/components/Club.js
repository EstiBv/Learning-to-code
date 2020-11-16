import React from "react";
import PropTypes from "prop-types";

const Club = (props) => {
  console.log(props.icon);
  return (
    <div className="container__card">
      <i className={props.icon}></i>
      <h2 className="container__title">{props.name}</h2>
      <ul className="container__list--members">
        Members: <li>{props.subjects}</li>
      </ul>
    </div>
  );
};

Club.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  subjects: PropTypes.arrayOf(PropTypes.string),
};

export default Club;
