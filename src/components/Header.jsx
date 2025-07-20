import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-text">
            <h1>Dream Destination</h1>
            <p>Travel Agency</p>
          </div>
        </div>

        <nav>
          <ul id="nav-menu" className={menuOpen ? 'active' : ''}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
          <div className="mobile-menu-btn" id="mobile-menu-btn" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
