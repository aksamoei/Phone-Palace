import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem'; 
import './Home.css';

const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < 10; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomId;
};

function CartItems({ phones, setCartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);


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


  const handleBuyClick = async (phoneData) => {
    try {
      const randomId = generateRandomId();
      const submission = {
        id: randomId,
        phoneItems: [phoneData]
      };
      const response = await fetch('http://localhost:3000/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to history');
      }
      alert(`Successfully made an order of  ${phoneData.phoneName} with Tracking ID: ${randomId}`);
    } catch (error) {
      console.error(error);
      alert('Failed to add item to history');
    }
  };

  const handleBuyAllClick = async () => {
    try {
      const randomId = generateRandomId();
      const submission = {
        id: randomId,
        phoneItems: phones
      };
      const response = await fetch('http://localhost:3000/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });
      if (!response.ok) {
        throw new Error('Failed to add items to history');
      }
      alert(`Successfully made an order with Tracking ID: ${randomId}`);
      setCartItems([]);
      window.location.href = "/orders";
      // I want delete all data at endpoint: http://localhost:3000/catitems
    } catch (error) {
      console.error(error);
      alert('Failed to add items to history');
    }
  };

  


  
  useEffect(() => {
    const totalPrice = phones.reduce((acc, phone) => acc + phone.price, 0);
    setTotalPrice(totalPrice);
  }, [phones]);

  return (
    <div className="cart-list-container">
      <div className='header'>
      <h1>Cart Items</h1>
      </div>
      <ul>
        {phones.map(item => (
          <CartItem key={item.id} item={item} onBuyClick={() => handleBuyClick(item)} removeFromCart={removeFromCart}/>
        ))}
      </ul>

      

      <div className="btn-container" onClick={handleBuyAllClick}>
      <div  data-tooltip="Buy all items" className="button">
        <div className="button-wrapper">
          <div className="text">Buy All @ $ {totalPrice}</div>
          <span className="icon">
            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CartItems;
