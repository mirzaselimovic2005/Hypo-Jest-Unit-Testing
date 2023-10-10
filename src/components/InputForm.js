import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [inkomen, setinkomen] = useState(0);
  const [inkomen2, setinkomen2] = useState(0);
  const [renteperiode, setrenteperiode] = useState(1);
  const [studentenschuld, setstudentenschuld] = useState(false);
  const [postcode, setPostcode] = useState("");

  const calcHypotheek = () => {
    onCalculate({
      inkomen: parseFloat(inkomen),
      inkomen2: parseFloat(inkomen2),
      renteperiode: parseInt(renteperiode),
      studentenschuld,
      postcode,
    });
  };

  const isDisabled = !inkomen || !inkomen2 || !postcode;

  return (
    <div className="Berekenaar-input-form">
      <div className="Berekenaar-input-container">
        <label>Je eigen bruto jaarinkomen:</label>
        <input
          type="number"
          value={inkomen}
          onChange={(e) => setinkomen(e.target.value)}
          required
        />
      </div>
      <div className="Berekenaar-input-container">
        <label>Je partners bruto jaarinkomen:</label>
        <input
          type="number"
          value={inkomen2}
          onChange={(e) => setinkomen2(e.target.value)}
          required
        />
      </div>
      <div className="Berekenaar-input-container">
        <label>Rentevaste periode:</label>
        <select
          value={renteperiode}
          onChange={(e) => setrenteperiode(e.target.value)}
        >
          <option value="1">1 jaar</option>
          <option value="5">5 jaar</option>
          <option value="10">10 jaar</option>
          <option value="20">20 jaar</option>
          <option value="30">30 jaar</option>
        </select>
      </div>
      <div className="Berekenaar-input-container">
        <label>Heeft u een studieschuld?</label>
        <input
          type="checkbox"
          checked={studentenschuld}
          onChange={(e) => setstudentenschuld(e.target.checked)}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <div className="Berekenaar-input-container">
        <label>Postcode:</label>
        <input
          type="number"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          required
        />
      </div>
      <button
        className="Berekenen-Button"
        onClick={calcHypotheek}
        disabled={isDisabled}
      >
        Berekenen
      </button>
    </div>
  );
};

export default InputForm;
