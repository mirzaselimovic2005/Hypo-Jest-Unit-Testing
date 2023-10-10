import React, { useState } from "react";
import InputForm from "./components/InputForm";
import HypoBerekenaar from "./components/HypoBerekenaar";
import "./App.css";

function App() {
  const [mortgageData, setMortgageData] = useState(null);

  const calculateMortgage = (formData) => {
    setMortgageData(formData);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="form">
          <InputForm onCalculate={calculateMortgage} />
        </div>
        <div className="results-box">
          {mortgageData ? (
            <HypoBerekenaar {...mortgageData} />
          ) : (
            <p>Vul uw gegevens in pik</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
