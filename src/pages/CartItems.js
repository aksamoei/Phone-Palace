import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem'; // Import the CartItem component
import './Home.css';

function CartItems() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the endpoint
    fetch('http://localhost:3000/catitems')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  // Function to remove an item from the cart
const removeFromCart = (itemId) => {
  fetch(`http://localhost:3000/catitems/${itemId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
    // Filter out the removed item from the cartItems state
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  })
  .catch(error => console.error('Error removing item from cart:', error));
};


  return (
    <div className="cart-list-container">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
