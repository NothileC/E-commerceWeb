import React, { useState } from 'react';

const CardForm = ({ addCard }) =>{
  const [cardDetails, setCardDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(cardDetails);
    setCardDetails({
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      isDefault: false,
    }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for cardHolder, cardNumber, expiryDate, cvc */}
      <div className="mb-3">
        <label htmlFor="cardHolder" className="form-label">Name</label>
        <input
            type="text"
            className="form-control"
            placeholder='Cardholder Name'
            id="cardHolder"
            name="cardHolder"
            value={cardDetails.cardHolder}
            onChange={handleChange}
        />
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input
            type="number"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
        />
        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
        <input
            type="text"
            className="form-control"
            id="expiryDate"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleChange}
        />
        <label htmlFor="cvc" className="form-label">CVC</label>
        <input
            type="number"
            className="form-control"
            id="cvc"
            name="cvc"
            value={cardDetails.cvc}
            onChange={handleChange}
        />
        <input
          type="checkbox"
          id="defaultCheckbox"
          name="isDefault"
          checked={cardDetails.isDefault}
          onChange={handleChange}
        />
        <label htmlFor="defaultCheckbox">Save this as your default payment method</label>
      </div>
      <button type="submit" className="btn btn-primary">Add Payment Method</button>
      
      <div className="information">
                      <button type="button" className="btn-back">Back</button>
                      <div className="secure-connection">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2b633c7b8fdad75937bd1a00ec582b64a9b9ab9326e9f0a139cee7f42d1c1e?" alt="" />
                      <div className="btn-secure">Secure connection</div>
                   </div>
                   </div>



    </form>

  );
}

export default CardForm;
