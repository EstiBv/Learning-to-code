import React, { useState } from "react";
import "../components/App.scss";
import Older from "./Older";

const App = () => {
  const [age, setYears] = useState(20);
  let i = 20;
  const generateAge = () => i++;

  const getYear = () => {
    setYears(generateAge());
  };

  return (
    <div>
      <Older getYears={getYear} years={age} />
    </div>
  );
};

export default App;
