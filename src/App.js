import React, { useState } from 'react';
import InputForm from './InputForm';
import HypoBerekenaar from './HypoBerekenaar';
import './App.css';

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
            <p>vul uw gegevens in om de hypotheek te berekene</p>
          )}
        </div>  
      </div>
    </div>
  );
}

export default App;
