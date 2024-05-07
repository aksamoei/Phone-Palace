import React from 'react';
import './CartItem.css';

function CartItem({ item, removeFromCart}) {
  const handleRemoveFromCart = () => {
    // Call the removeFromCart function with the item ID
    removeFromCart(item.id);
    
  };

  const handleBuy = () => {
    // Send a POST request to the history endpoint with the item data
    fetch('http://localhost:3000/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add item to history');
      }
      // Handle success (if needed)
      alert('Phone bought successfully!');
      console.log('Item added to history:', item);
    })
    .catch(error => console.error('Error adding item to history:', error));

    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.phoneName} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.phoneName}</h3>
        <p className="cart-item-price">Price: ${item.price}</p>
      </div>
      <div className="cart-item-buttons">
        <button className="buy-button" onClick={handleBuy}>Buy</button>
        <button className="remove-from-cart-button" onClick={handleRemoveFromCart}>Remove from Cart</button>

      </div>
    </div>
  );
}

export default CartItem;
