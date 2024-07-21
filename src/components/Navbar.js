import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img height={'60px'} src="Images\1_Logo.png" alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/clothing">Clothes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
        <Link to="/cart"><img className='addToCart' height={'40px'} src="Images/AddToCart.jpg" alt="AddToCart" /></Link>
        <button><Link to="/login">Login</Link></button>
    </nav>
  );
};

export default Navbar;