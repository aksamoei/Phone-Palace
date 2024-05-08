
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import CartItems from './pages/CartItems';
import PhoneDetails from './components/PhoneDetails';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Orders from './pages/Orders'

function App() {

  const [phones, setPhones] = useState([]);


  useEffect(function fetchData() {
    fetch('http://localhost:3000/phoneitems')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPhones(data);
      });
  }, []);


  return (
    <div className="App">

      <NavBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home phones={phones} setPhones={setPhones} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/phones/:id" element={<PhoneDetails phones={phones} />} />
        </Routes>
      </Router>

      <Footer />

      {/*<Router>
      <Routes>
        <Route path="/" element={<Home phones={phones} setPhones={setPhones}/>} />
        <Route path="/phones/:id" element={<PhoneDetails phones={phones} />} />
      </Routes>
    </Router>*/}
    </div>
  );
}

export default App;
