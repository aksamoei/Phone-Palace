import React, { useState, useEffect } from 'react';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/history');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const calculateTotalPrice = (order) => {
    return order.phoneItems.reduce((total, phone) => total + phone.price, 0);
  };

  return (
    <div className='orders-container '>
       <h2>Orders</h2>
<div className="orders">
     
      {orders.map(order => (
        <div key={order.id} className="order">
          <h3 style={{ color: 'green' }}>Order Tracking ID: {order.id}</h3>
          <ol className="order-items">
            {order.phoneItems.map(phone => (
              <li key={phone.id} className="order-item">
                <img src={phone.image} alt={phone.phoneName} className="phone-image" />
                <div className="phone-details">
                  <h4>{phone.phoneName}</h4>
                  <p>Price: ${phone.price}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="total-price" style={{ fontSize: '1.5rem' }}>Total Price: ${calculateTotalPrice(order)}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Orders;
