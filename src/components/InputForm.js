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
    <div className="input-form">
      <label>
        Eigen Inkomen:
        <input
          type="number"
          value={inkomen}
          onChange={(e) => setinkomen(e.target.value)}
          required
        />
      </label>
      <label>
        Partner Inkomen:
        <input
          type="number"
          value={inkomen2}
          onChange={(e) => setinkomen2(e.target.value)}
          required
        />
      </label>
      <label>
        Rentevaste periode:
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
      </label>
      <label>
        Heeft u een studieschuld?
        <input
          type="checkbox"
          checked={studentenschuld}
          onChange={(e) => setstudentenschuld(e.target.checked)}
        />
      </label>
      <label>
        Postcode:
        <input
          type="number"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          required
        />
      </label>
      <button
        className="Berekenen-Button"
        onClick={calcHypotheek}
        disabled={isDisabled}
      >
        berekenen
      </button>
    </div>
  );
};

export default InputForm;
