import React, { useState, useCallback  } from 'react';
import './NavBar.css'; // Import CSS file for additional styles
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function NavBar({ totalCartItems }) {

    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const handleClick = useCallback(() => {
        // Do something when the wrapper is clicked
        // For example, navigate to a new page
        window.location.href = "/cart";
    }, []);

    return (
        <nav className="navbar">
            <div className="brand">
                <img src="https://t3.ftcdn.net/jpg/04/62/11/02/240_F_462110289_68WfKQOodooj0cPgdsGg0HdFpJa4dXqN.jpg" alt="Logo" className="logo" />
                <span className="brand-name">PhonePalace</span>
            </div>
            <div className="nav-links">
                <a href="/" className={`nav-link ${selectedItem === 'Home' ? 'selected' : ''}`} onClick={() => handleItemClick('Home')}>Home</a>
                {/*<a href="/cart" className={`nav-link ${selectedItem === 'Cart' ? 'selected' : ''}`} onClick={() => handleItemClick('Cart')}>Cart</a>*/}
                <a href="/orders" className={`nav-link ${selectedItem === 'Orders' ? 'selected' : ''}`} onClick={() => handleItemClick('Orders')}>Orders</a>
                <a href="/about" className={`nav-link ${selectedItem === 'About' ? 'selected' : ''}`} onClick={() => handleItemClick('About')}>About</a>
                
            </div>
            <div className='brand' onClick={handleClick}>

                <div className="wrapper" >
                   
                    <PiShoppingCartSimpleLight className="cart-icon" />
                    <span className="cart-text">{totalCartItems}</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


{/*
import React, { useState } from 'react';
import './NavBar.css'; // Import CSS file for additional styles
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

function NavBar({ totalCartItems }) {

    //const [totalCartItems, settotalCartItems] = useState(10);
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
                
                <nav>
                    <Link to="/" className={`nav-link ${selectedItem === 'Home' ? 'selected' : ''}`} onClick={() => handleItemClick('Home')}>Home</Link>
                    <Link to="/orders" className={`nav-link ${selectedItem === 'Orders' ? 'selected' : ''}`} onClick={() => handleItemClick('Orders')}>Orders</Link>
                    <Link to="/about" className={`nav-link ${selectedItem === 'About' ? 'selected' : ''}`} onClick={() => handleItemClick('About')}>About</Link>
                </nav>

            </div>
            <div className='brand'>

                <div className="wrapper">
                   
                    <PiShoppingCartSimpleLight className="cart-icon" />
                    <span className="cart-text">{totalCartItems}</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
*/}