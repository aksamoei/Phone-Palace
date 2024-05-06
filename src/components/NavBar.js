import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
        <NavLink to="/" style={{marginRight: 10}}>Home</NavLink>
        <NavLink to="/item" style={{marginRight: 10}}>Items</NavLink>
        <NavLink to="/Cart" style={{marginRight: 10}}>Cart</NavLink>
        <NavLink to="/about" style={{marginRight: 10}}>About</NavLink>
        </nav>
    );
}

export default NavBar;