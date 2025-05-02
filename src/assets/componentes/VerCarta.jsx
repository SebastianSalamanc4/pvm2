import React from 'react';
import '../css/VerCarta.css';

const VerCarta = () => {
  const handleOpenCarta = () => {
    window.open('/MenuDePrueba.pdf', '_blank');
  };

  return (
    <div className="vercarta-background">
      <div className="vercarta-container">
        <h1>VER CARTA</h1>
        <button className="vercarta-button" onClick={handleOpenCarta}>
          Abrir Carta
        </button>
      </div>
    </div>
  );
};

export default VerCarta;
