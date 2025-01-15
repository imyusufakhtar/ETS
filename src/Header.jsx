import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to track current path
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Track the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper function to add the 'active' class based on the current route
  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src="Images/EVTechLogo.png" alt="Elevatech Solutions Logo" className="logo-img" />
        </Link>
      </div>
      <button
        className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={getLinkClass('/')} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClass('/about')} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className={getLinkClass('/services')} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/career" className={getLinkClass('/career')} onClick={closeMenu}>
            Career
          </Link>
        </li>
        <li>
          <Link to="/contact" className={getLinkClass('/contact')} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};
