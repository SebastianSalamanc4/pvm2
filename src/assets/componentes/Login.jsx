import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>INICIO DE SESION</h1>
        <input type="email" placeholder="Indica tu correo electrónico" />
        <input type="password" placeholder="Ingresa tu contraseña" />
        <Link to="/register" className="login-register-link">
          ¿no tienen cuenta? Crea una ahora ya
        </Link>
        <button className="login-button">CONFIRMAR</button>
      </div>
      <footer className="login-footer">
        404 Hunger Not Food · Política de privacidad
      </footer>
    </div>
  );
};

export default Login;
