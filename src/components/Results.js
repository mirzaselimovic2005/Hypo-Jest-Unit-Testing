import React from "react";

function Results({
  maxLoanAmount,
  monthlyPayment,
  totalInterest,
  totalPayment,
}) {
  return (
    <div>
      <h2>Resultaten</h2>
      <p>Maximaal te lenen bedrag: €{maxLoanAmount}</p>
      <p>Maandelijkse betaling: €{monthlyPayment}</p>
      <p>Totaal betaalde rente: €{totalInterest}</p>
      <p>Totaal te betalen bedrag: €{totalPayment}</p>
    </div>
  );
}

export default Results;
