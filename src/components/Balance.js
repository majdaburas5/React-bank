import React, { useState, useEffect } from "react";
import "../css/Balance.css";

export default function Balance({ balance }) {
  const [balanceValue, setBalanceValue] = useState(null);

  useEffect(() => {
    balance.then((result) => setBalanceValue(result));
  }, [balance]);

  const checkBalance = function (balanceValue) {
    if (balanceValue >= 500) return "green-balance";
    return "red-balance";
  };

  return balanceValue !== null ? (
    <b className={checkBalance(balanceValue)} key={balanceValue}>
      {balanceValue} $
    </b>
  ) : (
    <p>Loading balance...</p>
  );
}
