import React, { useState, useEffect } from 'react';

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

  const calcHypotheek = () => {
    if (postcode === '9679' || postcode === '9681' || postcode === '9682') {
      setError('Deze postcode kan niet');
      setmaxLeen(0);
      setmaandelijks(0);
      settRente(0);
      settbetaling(0); 
      return;
    }

    let PR = (inkomen + inkomen2) * 4.25; // Max hypotheeklast

    if (studentenschuld) {
      PR *= 0.75;
    }

    let rente = 0.05;

    switch (parseInt(renteperiode)) {
      case 1:
        rente = 0.02;
        break;
      case 5:
        rente = 0.03;
        break;
      case 10:
        rente = 0.035;
        break;
      case 20:
        rente = 0.045;
        break;
      case 30:
        rente = 0.05;
        break;
      default:
        return;
    }

    const n = renteperiode * 12;
    const maandelijkseRente = rente / 12;
    const maandelijksValue =
      (PR * maandelijkseRente) /
      (1 - Math.pow(1 + maandelijkseRente, -n));

    const tRenteValue = maandelijksValue * n - PR;
    const tbetalingValue = PR + tRenteValue;

    setmaxLeen(PR.toFixed(2));
    setmaandelijks(maandelijksValue.toFixed(2));
    settRente(tRenteValue.toFixed(2));
    settbetaling(tbetalingValue.toFixed(2));
    setError(null);
  };


  useEffect(() => {
    calcHypotheek();
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
}

export default HypoBerekenaar;
