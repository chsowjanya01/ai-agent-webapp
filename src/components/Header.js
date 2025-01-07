import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AI Agent</div>
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
