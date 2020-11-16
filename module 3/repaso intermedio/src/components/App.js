import React from "react";

import "../stylesheets/App.scss";
import clubData from "../data/clubData.json";
import ClubList from "./ClubList";

const App = () => {
  return (
    <div className="container">
      <ClubList data={clubData} />
    </div>
  );
};

export default App;
