import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Historia">HISTORIA</Link></li>
          <li><Link to="/Localizacion">LOCALIZACION</Link></li>
          <li><Link to="/Register">REGISTER</Link></li>
          <li><Link to="/Login">LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
