import React from "react";
import Club from "./Club";
import PropTypes from "prop-types";

const listClubs = (props) => {
  console.log(props.name);
  const indexClubs = props.data.map((item, i) => {
    return (
      <li key={i} className="container__list">
        <Club name={item.name} icon={item.fa} subjects={item.members} />
      </li>
    );
  });

  return <ul> {indexClubs}</ul>;
};

listClubs.propTypes = {
  data: PropTypes.array,
};

export default listClubs;
