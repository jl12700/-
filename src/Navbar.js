import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          MyPortfolio
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a> 
          </li>
          <li>
            <a href="#projects">Projects</a> 
          </li>
          <li>
            <a href="#contact">Contact</a> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
