import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Register.css";

export const Register = () => {
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarRut = (rut) => {
    const regex = /^\d{7,8}-[\dkK]$/;
    return regex.test(rut);
  };

  const handleSubmit = () => {
    if (!rut || !email || !nombre || !password) {
      setStatusMessage('Por favor completa todos los campos.');
      return;
    }

    if (!validarRut(rut)) {
      setStatusMessage('El RUT debe tener el formato correcto: 12345678-9');
      return;
    }

    if (!validarEmail(email)) {
      setStatusMessage('Ingresa un correo electrónico válido.');
      return;
    }

    const usuario = { rut, email, nombre, password };

    // Obtener lista de usuarios existentes o iniciar una lista nueva
    let usuariosGuardados = [];
    try {
      usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    } catch (error) {
      console.error("Error al leer usuarios del localStorage", error);
      usuariosGuardados = [];
    }

    // Verificar si ya existe un usuario con ese rut o email
    const existe = usuariosGuardados.some(u => u.rut === rut || u.email === email);
    if (existe) {
      setStatusMessage('Ya existe un usuario con ese RUT o correo electrónico.');
      return;
    }

    // Agregar nuevo usuario
    usuariosGuardados.push(usuario);

    // Guardar la lista actualizada
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    setStatusMessage('Cuenta creada con éxito.');

    // Redirige al home
    navigate('/');
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <div className="info-section">
          <h3>Localización</h3>
          <h1>Te esperamos</h1>

          <p><strong>Horario</strong><br />
            <span>De Martes a Domingo, de 8:00h a 23:00h.</span><br />
            <a href="#">Ver calendario de festivos</a>
          </p>

          <p><strong>Dirección</strong><br />
            Calle Cualquiera 123, Cualquier Lugar, <br />
            CP: 12345
          </p>

          <p><strong>Teléfono</strong><br />
            9.1234-5678
          </p>

          <p><strong>Email</strong><br />
            <a href="mailto:404HungerNotFood@gmail.com">404HungerNotFood@gmail.com</a>
          </p>

          <p><strong>Redes sociales</strong><br />
            <a href="#">@404HungerNotFood</a>
          </p>
        </div>

        <div className="form-section">
          <h1>Crea tu cuenta</h1>

          {statusMessage && <p className="status-message">{statusMessage}</p>}

          <input
            type="text"
            placeholder="Ej: 12345678-9" 
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña (mínimo 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Crear cuenta</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
