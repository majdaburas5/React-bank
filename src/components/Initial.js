import React from "react";
import Button from "react-bootstrap/Button";
import "../css/Initial.css";
import Month from "./Month";
import { useState } from "react";

export default function Initial({
  transactions,
  deleteTransaction,
  ShowTransactionByMonth,
  transactionsByMonth,
}) {
  const checkAmount = function (amount) {
    if (amount >= 0) return "deposit";
    return "withdraw";
  };

  const [month, setMonth] = useState(0);

  const updateMonth = (event) => {
    setMonth(event.target.value);
    ShowTransactionByMonth(event.target.value);
  };

  const checkIfMonthIsClicked = function () {
    if (month === 0) return false;
    else if (month === -1) return false;
    return true;
  };

  const render = function (transaction) {
    return transaction.map((t) => (
      <tr key={t.id}>
        <td>{t.vendor}</td>
        <td className={`${checkAmount(t.amount)}`}>{t.amount}</td>
        <td className="category">{t.category}</td>
        <td className="date">{t.date}</td>

        <td className="delete">
          <Button
            variant="outline-danger"
            onClick={() => deleteTransaction(t._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <div className="selectMonth">
        <Month
          ShowTransactionByMonth={ShowTransactionByMonth}
          updateMonth={updateMonth}
          month={month}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {checkIfMonthIsClicked()
            ? render(transactionsByMonth)
            : render(transactions)}
        </tbody>
      </table>
    </div>
  );
}
