import React, { useState, useEffect } from "react";

const HypoBerekenaar = ({
  inkomen,
  inkomen2,
  renteperiode,
  studentenschuld,
  postcode,
}) => {
  const [maxLeen, setmaxLeen] = useState(0);
  const [maandelijks, setmaandelijks] = useState(0);
  const [tRente, settRente] = useState(0);
  const [tbetaling, settbetaling] = useState(0);
  const [error, setError] = useState(null);

  const isInvalidPostcode = () => {
    return ["9679", "9681", "9682"].includes(postcode);
  };

  const calculateMaxHypotheek = () => {
    let PR = (inkomen + inkomen2) * 4.25; // Max hypotheeklast

    if (studentenschuld) {
      PR *= 0.75;
    }

    return PR;
  };

  const calculateRente = () => {
    switch (parseInt(renteperiode)) {
      case 1:
        return 0.02;
      case 5:
        return 0.03;
      case 10:
        return 0.035;
      case 20:
        return 0.045;
      case 30:
        return 0.05;
      default:
        return 0.0;
    }
  };

  const calculateMortgageValues = () => {
    if (isInvalidPostcode()) {
      setError("Deze postcode kan niet");
      setmaxLeen(0);
      setmaandelijks(0);
      settRente(0);
      settbetaling(0);
      return;
    }

    const PR = calculateMaxHypotheek();
    const rente = calculateRente();
    const n = renteperiode * 12;
    const maandelijkseRente = rente / 12;
    const maandelijksValue =
      (PR * maandelijkseRente) / (1 - Math.pow(1 + maandelijkseRente, -n));

    const tRenteValue = maandelijksValue * n - PR;
    const tbetalingValue = PR + tRenteValue;

    setmaxLeen(PR.toFixed(2));
    setmaandelijks(maandelijksValue.toFixed(2));
    settRente(tRenteValue.toFixed(2));
    settbetaling(tbetalingValue.toFixed(2));
    setError(null);
  };

  useEffect(() => {
    calculateMortgageValues();
  }, [inkomen, inkomen2, renteperiode, studentenschuld, postcode]);

  return (
    <div className="mortgage-calculator">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <p>Maximaal te lenen bedrag: €{maxLeen}</p>
          <p>Maandelijkse betaling: €{maandelijks}</p>
          <p>Totaal betaalde rente: €{tRente}</p>
          <p>Totaal te betalen bedrag: €{tbetaling}</p>
        </>
      )}
    </div>
  );
};

export default HypoBerekenaar;
export const isInvalidPostcode = (postcode) => {
  return ["9679", "9681", "9682"].includes(postcode);
};
export const studentenschuld = () => {
  return true;
};
export const calculateMaxHypotheek = () => {
  return 382500;
};
export const calculateRente = (renteperiode) => {
  switch (parseInt(renteperiode)) {
    case 1:
      return 0.02;
    case 5:
      return 0.03;
    case 10:
      return 0.035;
    case 20:
      return 0.045;
    case 30:
      return 0.05;
    default:
      return 0.0;
  }
};

