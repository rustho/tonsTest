import { useState, useEffect } from "react";
import { fetchTonRate, fetchTsTonRate } from "./exchangeRateApi";

export const useExchangeRates = () => {
  const [tonRate, setTonRate] = useState<number | null>(null);
  const [tsTonRate, setTsTonRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const ton = await fetchTonRate();
        const tsTon = await fetchTsTonRate();
        setTonRate(ton);
        setTsTonRate(tsTon);
      } catch (err) {
        setError("Error fetching rates");
        console.error("Error fetching rates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 5 * 60 * 1000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return { tonRate, tsTonRate, loading, error };
};
