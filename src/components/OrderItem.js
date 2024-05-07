import React from 'react';
import './OrderItem.css';

function OrderItem({ item }) {
  return (
    <div className="order-item">
      <div className="order-item-image">
        <img src={item.image} alt={item.phoneName} />
      </div>
      <div className="order-item-details">
        <h3 className="order-item-name">{item.phoneName}</h3>
        <p className="order-item-price">Price: ${item.price}</p>
        <p className="order-item-description">{item.description_short}</p>
        <h2 className="order-item-status">Status: Pending</h2>
      </div>
    </div>
  );
}

export default OrderItem;
