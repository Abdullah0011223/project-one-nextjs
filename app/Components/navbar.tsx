"use client"

import React, { useState } from 'react';
import './navbar.css'; // Import the custom CSS file

const Navbar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <h1>My Portfolio</h1>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuActive ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className="hamburger-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
