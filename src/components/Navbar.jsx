// src/Navbar.jsx
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyLogo</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#top rated">Top rated</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href= "#login" >Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
