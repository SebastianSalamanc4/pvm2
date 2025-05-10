import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Obtener la lista de usuarios guardados
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar un usuario que coincida con email y contraseña
    const usuario = usuariosGuardados.find(
      (u) => u.email === email && u.password === password
    );

    if (usuario) {
      // Guardar el usuario que inició sesión como "usuarioActivo"
      localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

      setErrorMessage('');
      navigate('/'); // Redirige al home
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
