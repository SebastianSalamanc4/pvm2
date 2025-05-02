// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../img/L1.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        {/* 👇 Aquí envolvemos el logo en un Link que apunta a "/" */}
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Historia">HISTORIA</Link></li>
          <li><Link to="/Localizacion">LOCALIZACION</Link></li>
          <li><Link to="/Register">REGISTER</Link></li>
          <li><Link to="/Login">LOGIN</Link> </li>
        </ul>


      </nav>
    </header>
  );
};

export default Navbar;

// <li><Link to="/home">Home</Link></li>
// <li><Link to="/[URL]">[Nombre]</Link></li>