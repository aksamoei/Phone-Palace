// PhoneDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PhoneDetails.css'; // Import CSS file

function PhoneDetails() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/phoneitems/${id}`);
        const data = await response.json();
        setPhone(data);
      } catch (error) {
        console.error('Error fetching phone details:', error);
      }
    };

    fetchPhoneDetails();
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:3001/catitems", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(phone), // Send the phone data in the request body
      });
      if (response.ok) {
        alert('Phone added to cart successfully!');
        window.location.href = '/';
      } else {
        throw new Error('Failed to add phone to cart');
      }
    } catch (error) {
      console.error('Error adding phone to cart:', error);
      alert('Failed to add phone to cart. Please try again later.');
    }
  };

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div className="phone-details-container">
      <h2 className="phone-name">{phone.phoneName}</h2>
      <p className="phone-short-description">{phone.description_short}</p>
      <div className="phone-details">
        <div className="phone-image-container">
          <img src={phone.image} alt={phone.phoneName} className="phone-image" />
        </div>
        <div className="phone-info">
          <p className="phone-description">{phone.description_long}</p>
          <p className="phone-price">Price: ${phone.price}</p>
          <div className="phone-buttons">
            <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
            <button className="add-to-cart-button" onClick={addToCart}>Add phone to Cart</button>
          </div>
        </div>
      </div>
      <div className="phone-features">
        <h3>Features:</h3>
        <ul>
          {phone.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhoneDetails;