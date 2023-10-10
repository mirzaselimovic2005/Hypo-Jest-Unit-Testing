import React, { useState } from "react";
import InputForm from "./components/InputForm";
import HypoBerekenaar from "./components/HypoBerekenaar";
import "./App.css";

function App() {
  const [mortgageData, setMortgageData] = useState(null);

  const calculateMortgage = (formData) => {
    setMortgageData(formData);
  };

  let resultsStatement;

  if (mortgageData) {
    resultsStatement = <HypoBerekenaar {...mortgageData} />;
  } else {
    resultsStatement = <p>Vul uw gegevens in voor de ffff game</p>;
  }

  return (
    <div>
      <div className="Berekenaar-Outer">
        <div className="Berekenaar-Form">
          <div className="Berekenaar-Form-Top">
            <p className="Berekenaar-Form-Top-Text">Hypotheek berekenen</p>
            <p
              className="Berekenaar-Form-Top-Text"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              {resultsStatement}
            </p>
          </div>
          <div className="Berekenaar-Form-Bottom">
            <InputForm onCalculate={calculateMortgage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
