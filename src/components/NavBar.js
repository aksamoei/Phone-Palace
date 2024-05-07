import React, { useState } from 'react';
import './NavBar.css'; // Import CSS file for additional styles
import { NavLink } from 'react-router-dom';

function NavBar() {

    // const [selectedItem, setSelectedItem] = useState('Home');

    // const handleItemClick = (itemName) => {
    //     setSelectedItem(itemName);
    // };

    return (
        <nav className="navbar">
            
            <div className="brand">
                <img src="https://t3.ftcdn.net/jpg/04/62/11/02/240_F_462110289_68WfKQOodooj0cPgdsGg0HdFpJa4dXqN.jpg" alt="Logo" className="logo" />
                <span className="brand-name">PhonePalace</span>
            </div>
            <div className="nav-links">
                <NavLink to="/" className="Home">Home</NavLink>
                <NavLink to="/cart" className="Cart">Cart</NavLink>
                <NavLink to="/about" className="About">About</NavLink>
                 {/* <a href="/" className={`nav-link ${selectedItem === 'Home' ? 'selected' : ''}`} onClick={() => handleItemClick('Home')}>Home</a>
                <a href="/cart" className={`nav-link ${selectedItem === 'Cart' ? 'selected' : ''}`} onClick={() => handleItemClick('Cart')}>Cart</a>
                <a href="/about" className={`nav-link ${selectedItem === 'About' ? 'selected' : ''}`} onClick={() => handleItemClick('About')}>About</a>
            </div>  */}
            </div>
        </nav>
    );
}

export default NavBar;
