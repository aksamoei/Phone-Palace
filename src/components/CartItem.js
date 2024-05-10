import React from 'react';
import './CartItem.css';

const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < 10; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomId;
};

function CartItem({ item, onBuyClick, removeFromCart }) {
  const handleRemoveFromCart = () => {
    // Call the removeFromCart function with the item ID
    removeFromCart(item.id);
    
  };

  const handleBuy = () => {
    const randomId = generateRandomId();
    const dataWithId = { ...item, trackingId: randomId };
    onBuyClick(dataWithId);
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
