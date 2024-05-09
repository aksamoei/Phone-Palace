import React, { useState, useEffect} from 'react';
import './NavBar.css'; // Import CSS file for additional styles
import { NavLink } from 'react-router-dom';
//import { FaShoppingCart } from 'react-icons/fa';

function NavBar() {

    const [selectedItem, setSelectedItem] = useState('');


    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <img src="https://t3.ftcdn.net/jpg/04/62/11/02/240_F_462110289_68WfKQOodooj0cPgdsGg0HdFpJa4dXqN.jpg" alt="Logo" className="logo" />
                <span className="brand-name">PhonePalace</span>
            </div>
            <div className="nav-links">
                {/* <a href="/" className={`nav-link ${selectedItem === 'Home' ? 'selected' : ''}`} onClick={() => handleItemClick('Home')}>Home</a>
                <a href="/cart" className={`nav-link ${selectedItem === 'Cart' ? 'selected' : ''}`} onClick={() => handleItemClick('Cart')}>Cart</a>
                <a href="/orders" className={`nav-link ${selectedItem === 'Orders' ? 'selected' : ''}`} onClick={() => handleItemClick('Orders')}>Orders</a>
                <a href="/about" className={`nav-link ${selectedItem === 'About' ? 'selected' : ''}`} onClick={() => handleItemClick('About')}>About</a>
                 */}
                 <NavLink to="/" className={`nav-link ${selectedItem === 'Home' ? 'selected' : ''}`} onClick={() => handleItemClick('Home')}>Home</NavLink>
                <NavLink to="/cart" className={`nav-link ${selectedItem === 'Cart' ? 'selected' : ''}`} onClick={() => handleItemClick('Cart')}>
                Cart
                </NavLink>
                <NavLink to="/orders" className={`nav-link ${selectedItem === 'Orders' ? 'selected' : ''}`} onClick={() => handleItemClick('Orders')}>Orders</NavLink>
                <NavLink to="/about" className={`nav-link ${selectedItem === 'About' ? 'selected' : ''}`} onClick={() => handleItemClick('About')}>About</NavLink>
                 
                
            </div>
        </nav>
    );
}

export default NavBar;