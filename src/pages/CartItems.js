import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem'; // Import the CartItem component
import './Home.css';

function CartItems({cartItems,setCartItems}) {

  const [totalPrice, setTotalPrice] = useState(0);
  

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

function calculateTotalPrice(data) {
  const totalPrice = data.reduce(function (acc, phone) {
    return acc + phone.price;
  }, 0);
  setTotalPrice(totalPrice);
  console.log("calculating");
}

useEffect(() => {
  calculateTotalPrice(cartItems);
  console.log("Log me total!");
}, [cartItems]);


  return (
    <div className="cart-list-container">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
        ))}
      </ul>

      <div className="btn-container">
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

{/*
import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem'; // Import the CartItem component
import './Home.css';

function CartItems({settotalCartItems}) {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    // Fetch cart items from the endpoint
    fetch('http://localhost:3000/catitems')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        calculateTotalPrice(data);
        console.log("Fetching");
      
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  settotalCartItems(cartItems.length)



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
        console.log("removing");
      })
      .catch(error => console.error('Error removing item from cart:', error));
  };

  function calculateTotalPrice(data) {
    const totalPrice = data.reduce(function (acc, phone) {
      return acc + phone.price;
    }, 0);
    setTotalPrice(totalPrice);
    console.log("calculating");
  }



  return (
    <div className="cart-list-container">
      <h2>Cart Items</h2>

      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />

        ))}
      </ul>




      <div className="btn-container">
      <div  data-tooltip="Buy all items" className="button">
        <div className="button-wrapper">
          <div className="text">Buy All @ ${totalPrice}</div>
          <span className="icon">
            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
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
*/}
