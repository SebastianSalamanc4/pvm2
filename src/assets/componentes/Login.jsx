import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Para redirigir después de un login exitoso

  const handleLogin = () => {
    // Obtener los datos guardados en localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
      setErrorMessage('No hay cuenta registrada con este correo.');
      return;
    }

    // Verificar si el correo y la contraseña coinciden
    if (usuario.email === email && usuario.password === password) {
      setErrorMessage('');
      navigate('/'); // Redirige a la página principal después de un login exitoso
    } else {
      setErrorMessage('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>INICIO DE SESION</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <input
          type="email"
          placeholder="Indica tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/register" className="login-register-link">
          ¿No tienes cuenta? Crea una ahora
        </Link>

        <button className="login-button" onClick={handleLogin}>
          CONFIRMAR
        </button>
      </div>
    </div>
  );
};

export default Login;
