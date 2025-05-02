import React from 'react';
import Navbar from './assets/componentes/Navbar';
import Home from './assets/componentes/Home';
import { Route, Routes } from 'react-router-dom';

// Actualiza todas estas importaciones también:
import Localizacion from "./assets/componentes/Localizacion"
import Vercarta from './assets/componentes/VerCarta';
import Historia from "./assets/componentes/Historia"
import Reserva from "./assets/componentes/Reserva"
import Register from './assets/componentes/Register';
import Login from "./assets/componentes/Login"

const App = () => {
  return (
    <div className="app">
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Localizacion" element={<Localizacion/>} />
        <Route path="/VerCarta" element={<Vercarta/>} />
        <Route path="/Historia" element={<Historia/>} />
        <Route path="/Reserva" element={<Reserva/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
       </Routes>
    </div>
  );
};

export default App;