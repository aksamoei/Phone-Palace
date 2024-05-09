import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CartItems from './pages/CartItems';
import PhoneDetails from './components/PhoneDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Orders from './pages/Orders';

function App() {
  const [phones, setPhones] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTotalCartItems(cartItems.length);
    console.log("Log me two!");
  }, [cartItems]);

  const fetchData = () => {

    // Fetch cart items
    fetch('http://localhost:3000/catitems')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching cart items: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setCartItems(data);
        // Calculate total cart items
        setTotalCartItems(data.length);
      })
      .catch(error => console.error(error));
    // Fetch phone items
    fetch('http://localhost:3000/phoneitems')
      .then(response => response.json())
      .then(data => setPhones(data))
      .catch(error => console.error('Error fetching phone items:', error));
  
      console.log("Log me one!");
  };

  


  
  

  return (
    <div className="App">
      <NavBar totalCartItems={totalCartItems} />
      <Router>
        <Routes>
          <Route path="/" element={<Home phones={phones} setPhones={setPhones} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartItems phones={cartItems} setCartItems={setCartItems} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/phones/:id" element={<PhoneDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
