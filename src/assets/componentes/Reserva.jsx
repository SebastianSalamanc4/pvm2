import React, { useState, useEffect } from 'react';
import '../css/Reserva.css';
import mapaMesas from '../img/mapaMesas.png';

// Configuración de horarios
const HORA_INICIO = 8; // 8 AM
const HORA_FIN = 18;   // 6 PM
const DURACION_BLOQUE = 2; // 2 horas
const SEPARACION_BLOQUE = 0.5; // 30 minutos

// Datos de las mesas
const mesas = [
  { id: 1, top: 600, left: 250 },
  { id: 2, top: 450, left: 485 },
  { id: 3, top: 450, left: 255 },
];

// Función para generar bloques de horarios automáticamente
const generarBloquesHorarios = () => {
  const bloques = [];
  let hora = HORA_INICIO;
  let minutos = 0;

  while (hora + DURACION_BLOQUE <= HORA_FIN) {
    const inicio = `${hora.toString().padStart(2, '0')}:${minutos === 0 ? '00' : '30'}`;
    let finHora = hora + DURACION_BLOQUE;
    let finMinutos = minutos;
    if (finMinutos >= 60) {
      finHora += 1;
      finMinutos -= 60;
    }
    const fin = `${finHora.toString().padStart(2, '0')}:${finMinutos === 0 ? '00' : '30'}`;
    bloques.push(`${inicio}-${fin}`);

    // Avanzar 2h + 30min
    minutos += SEPARACION_BLOQUE * 60;
    hora += DURACION_BLOQUE;
    if (minutos >= 60) {
      hora += 1;
      minutos -= 60;
    }
  }

  return bloques;
};

const bloquesHorarios = generarBloquesHorarios();

const Reserva = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [mesasReservadas, setMesasReservadas] = useState({});
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [timer, setTimer] = useState(null);

  const manejarMouseEnter = (mesa) => {
    clearTimeout(timer);
    setMesaSeleccionada(mesa);
    setMostrarMenu(true);
  };

  const manejarMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setMostrarMenu(false);
      setMesaSeleccionada(null);
    }, 700);
    setTimer(newTimer);
  };

  const reservarBloque = (mesaId, bloque) => {
    if (!diaSeleccionado) {
      alert('Por favor selecciona un día primero.');
      return;
    }
    setMesasReservadas((prev) => {
      const nuevasReservas = { ...prev };
      if (!nuevasReservas[mesaId]) {
        nuevasReservas[mesaId] = {};
      }
      if (!nuevasReservas[mesaId][diaSeleccionado]) {
        nuevasReservas[mesaId][diaSeleccionado] = [];
      }
      nuevasReservas[mesaId][diaSeleccionado].push(bloque);
      return nuevasReservas;
    });
  };

  const cancelarBloque = (mesaId, bloque) => {
    setMesasReservadas((prev) => {
      const nuevasReservas = { ...prev };
      if (nuevasReservas[mesaId]?.[diaSeleccionado]) {
        nuevasReservas[mesaId][diaSeleccionado] = nuevasReservas[mesaId][diaSeleccionado].filter(
          (b) => b !== bloque
        );
        if (nuevasReservas[mesaId][diaSeleccionado].length === 0) {
          delete nuevasReservas[mesaId][diaSeleccionado];
        }
      }
      return nuevasReservas;
    });
  };

  const estaReservado = (mesaId, bloque) => {
    return mesasReservadas[mesaId]?.[diaSeleccionado]?.includes(bloque);
  };

  return (
    <div className="reserva-container">
      {/* Selector de día */}
      <div className="selector-dia-container">
        <label><strong>Selecciona el día: </strong></label>
        <input
          type="date"
          value={diaSeleccionado}
          onChange={(e) => setDiaSeleccionado(e.target.value)}
        />
      </div>

      {/* Imagen de mapa */}
      <img src={mapaMesas} alt="Mapa de mesas" className="plano" />

      {/* Renderizado de mesas */}
      {mesas.map((mesa) => (
        <div
          key={mesa.id}
          className={`mesa ${
            mesasReservadas[mesa.id]?.[diaSeleccionado]?.length ? 'reservada' : ''
          }`}
          style={{ top: `${mesa.top}px`, left: `${mesa.left}px` }}
          onMouseEnter={() => manejarMouseEnter(mesa)}
          onMouseLeave={manejarMouseLeave}
        >
          {/* Menú flotante de bloques */}
          {mesaSeleccionada?.id === mesa.id && mostrarMenu && (
            <div className="horas-disponibles">
              <strong>Reservas para {diaSeleccionado || 'día seleccionado'}:</strong>
              <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {bloquesHorarios.map((bloque, index) => (
                  <li key={index}>
                    {estaReservado(mesa.id, bloque) ? (
                      <span className="bloque-reservado">
                        Reservado: {bloque}{' '}
                        <button
                          onClick={() => cancelarBloque(mesa.id, bloque)}
                          className="boton-cancelar"
                          title="Cancelar Reserva"
                        >
                          ✖️
                        </button>
                      </span>
                    ) : (
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => reservarBloque(mesa.id, bloque)}
                        />
                        {bloque}
                      </label>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reserva;
