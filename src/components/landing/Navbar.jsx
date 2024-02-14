import React from 'react';
import '../../assets/styles/landing.css'; // Anda dapat membuat file CSS terpisah untuk styling
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';


const Navbar = ({ hideBlog }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="name-logo">Logoipsum</span>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          {!hideBlog && <li><NavLink to="/blog">Blog</NavLink></li>}
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/login" className="sign-in">Sign In</NavLink>
        <NavLink to="/signup">
          <button className="sign-up">Sign Up</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;