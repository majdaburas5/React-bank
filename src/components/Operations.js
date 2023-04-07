import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../css/Operations.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Operations({ addTransaction }) {
  const [amountValue, setAmountValue] = useState("");
  const [vendorValue, setVendorValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);

    let buttonType = event.nativeEvent.submitter.className;

    toast.success(" Deposit succsses !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    let amount = amountValue;
    if (buttonType === "withdraw") {
      amount *= -1;
    }
    addTransaction({
      amount: amount,
      vendor: vendorValue,
      category: categoryValue,
    });
  };

  const updateAmount = (event) => {
    if (event.target.value > 0) setAmountValue(event.target.value);
  };
  const [validated, setValidated] = useState(false);

  const updateVendor = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null)
      setVendorValue(event.target.value);
  };

  const updateCategory = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null)
      setCategoryValue(event.target.value);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="d-flex align-items-center justify-content-center custom-form-container">
        <div className="custom-form-group">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <h2>Insert Transactions</h2>
              <Form.Control
                type="number"
                value={amountValue}
                onChange={updateAmount}
                placeholder="Transaction amount"
                required
              />
              <br />
              <Form.Control
                type="text"
                value={vendorValue}
                onChange={updateVendor}
                placeholder="Transaction vendor"
                required
              />
              <br />
              <Form.Control
                type="text"
                value={categoryValue}
                onChange={updateCategory}
                placeholder="Transaction category"
                required
              />
              <br />
            </Form.Group>
            <div className="buttons">
              <button type="submit" className="deposit">
                Deposit
              </button>
              <button type="submit" className="withdraw">
                Withdraw
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
