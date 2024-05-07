import React, { useState, useEffect } from 'react';
import OrderItem from '../components/OrderItem';

function Orders() {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    // Fetch history items from the endpoint
    fetch('http://localhost:3000/history')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch history items');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched history items to state
        setHistoryItems(data);
      })
      .catch(error => {
        console.error('Error fetching history items:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="orders">
      <h2>Orders</h2>
      <div className="order-items">
        {historyItems.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
