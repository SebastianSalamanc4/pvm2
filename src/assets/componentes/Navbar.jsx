import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="navbar">
      <div className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Historia">HISTORIA</Link></li>
          <li><Link to="/Localizacion">LOCALIZACION</Link></li>
          <li><Link to="/Register">REGISTER</Link></li>
          <li><Link to="/Login">LOGIN</Link></li>
        </ul>
      </div>

      {usuario && (
        <div className="usuario-session">
          <span>Sesión de: {usuario.email}</span>
          <button onClick={cerrarSesion} className="cerrar-sesion-btn">
            Cerrar sesión
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
