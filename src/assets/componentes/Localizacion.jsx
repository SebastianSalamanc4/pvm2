import React from 'react';
import '../css/localizacion.css';

const Localizacion = () => {
  return (
    <div className="localizacion-background">
      <div className="localizacion-container">
        <p className="localizacion-text">
        404 HUNGER NOT FOUND, TEMUCO, CHILE
        </p>
        <p className="localizacion-text">
        De Martes a Domingo, de 8:00h a 23:00h.
        </p>

        <div className="localizacion-mapa">
          <iframe
            title="UCT Campus Norte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5933253589837!2d-72.5552532501367!3d-38.704184823253414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3002f8b9e15%3A0xaeb977ac066f6367!2sUCT%20campus%20norte!5e0!3m2!1ses!2scl!4v1745634107198!5m2!1ses!2scl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Localizacion;
