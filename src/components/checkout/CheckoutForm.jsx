import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = 'Invalid card number';
    if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'Invalid CVV';
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiration)) {
      newErrors.expiration = 'Invalid expiration date';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="checkout__container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form__group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="form__group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>
          <div className="form__group">
            <label htmlFor="expiration">Expiration Date (MM/YY)</label>
            <input type="text" id="expiration" name="expiration" onChange={(e) => setFormData({ ...formData, expiration: e.target.value })} />
            {errors.expiration && <p className="error">{errors.expiration}</p>}
          </div>
          <div className="form__group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" onChange={(e) => setFormData({ ...formData, cvv: e.target.value })} />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
          <button type="submit" className="submit__btn">Place Order</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your order!</h2>
          <p>Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm; // defalt CheckoutForm