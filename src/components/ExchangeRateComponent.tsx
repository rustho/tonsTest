import React from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";

const ExchangeRateComponent: React.FC = () => {
  const { tonRate, tsTonRate, loading, error } = useExchangeRates();

  if (loading) return <p>Loading exchange rates...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Exchange Rates</h2>
      <p>1 TON = ${tonRate?.toFixed(2)} USD</p>
      {tsTonRate && <p>1 tsTON = ${tsTonRate.toFixed(2)} USD</p>}
    </div>
  );
};

export default ExchangeRateComponent;
