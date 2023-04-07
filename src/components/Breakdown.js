import React, { useState, useEffect } from "react";
import "../css/Breakdown.css";

export default function Breakdown({ amoutEachCategory }) {
  const [amoutEachCategoryValue, setAmoutEachCategoryValue] = useState(null);

  const checkAmount = function (amount) {
    if (amount >= 0) return "positive-amount";
    return "nigative-amount";
  };

  useEffect(() => {
    amoutEachCategory.then((result) => setAmoutEachCategoryValue(result));
  }, []);

  return amoutEachCategoryValue !== null ? (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {amoutEachCategoryValue.map((a) => (
          <tr key={a.category}>
            <td>{a.category}</td>
            <td className={checkAmount(a.amount)}>{a.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Loading categories...</p>
  );
}
