import React from "react";
import "./App.css";

function App() {
  let name = "Jake";
  const getDate = () => {
    return Date.now();
  };

  return (
    <div>
      <p>{name}</p>
      <p>{getDate()}</p>
    </div>
  );
}

export default App;
