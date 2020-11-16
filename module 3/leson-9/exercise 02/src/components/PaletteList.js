import React from "react";
import Palette from "./Palette";
import PropTypes from "prop-types";

function paletteList(props) {
  const listData = props.data.map((each, i) => {
    return (
      <li key={i} className="container__list">
        {" "}
        <Palette
          name={each.name}
          subject={each.from}
          colorList={each.colors}
        />{" "}
      </li>
    );
  });
  return <ul>{listData}</ul>;
}

paletteList.propTypes = {
  data: PropTypes.array,
};

export default paletteList;
