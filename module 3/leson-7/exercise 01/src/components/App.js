import React, { useState } from "react";
import "../components/App.scss";
import Older from "./Older";

let i = 30;
const App = () => {
  const [age, setYears] = useState(30);
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
