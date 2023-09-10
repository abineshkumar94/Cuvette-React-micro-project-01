import React, { useState } from "react";
import "./form.css";

const Form = ({ onCardInfoChange }) => {
  const [cardholdername, setcardholdername] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [expdateMM, setexpdateMM] = useState("");
  const [expdateYY, setexpdateYY] = useState("");
  const [cvv, setcvv] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardholdername.length === 0 ||
      cardnumber.length !== 16 ||
      expdateMM.length !== 2 ||
      expdateYY.length !== 4 ||
      cvv.length !== 3 ||
      parseInt(expdateMM) < 1 ||
      parseInt(expdateMM) > 12
    ) {
      seterror(true);
    } else {
      seterror(false);
      onCardInfoChange({
        cardholdername,
        cardnumber,
        expdateMM,
        expdateYY,
        cvv,
      });
    }
  };

  const handleCardNumberChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, "");

    if (sanitizedValue.length === 16) {
      setcardnumber(sanitizedValue);
      seterror(false);
    } else {
      setcardnumber(sanitizedValue);
      seterror(true);
    }
  };

  const handleCVCChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, "");

    if (sanitizedValue.length === 3) {
      setcvv(sanitizedValue);
      seterror(false);
    } else {
      setcvv(sanitizedValue);
      seterror(true);
    }
  };

  const handleExpDateMMChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, "");

    if (sanitizedValue >= 1 && sanitizedValue <= 12) {
      setexpdateMM(sanitizedValue.padStart(2, ""));
      seterror(false);
    } else {
      setexpdateMM(sanitizedValue);
      seterror(true);
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="name">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setcardholdername(e.target.value)}
          />
        </div>
        {error ? <p className="error-name">Cardholder name required</p> : ""}

        <div className="number">
          <label>CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234567891230000"
            value={cardnumber}
            onChange={handleCardNumberChange}
          />
        </div>
        {error ? (
          <p className="error-number">Card number must be 16 digits</p>
        ) : (
          ""
        )}

        <div className="expmm">
          <label className="exp-lab">EXP.DATE (MM YY)</label>
          <input
            type="text"
            placeholder="MM"
            value={expdateMM}
            onChange={handleExpDateMMChange}
          />
        </div>

        <div className="expyy">
          <input
            type="text"
            placeholder="YYYY"
            onChange={(e) => setexpdateYY(e.target.value)}
          />
        </div>

        <div className="cvc">
          <label className="cvc-lab">CVC</label>
          <input
            type="text"
            placeholder="e.g. 123"
            value={cvv}
            onChange={handleCVCChange}
          />
        </div>
        {error ? <p className="cvc-error">CVC must be 3 digits</p> : ""}

        <div>
          <button className="btn">Confirm</button>
        </div>
      </form>
    </>
  );
};

export default Form;
