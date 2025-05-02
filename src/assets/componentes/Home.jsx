// src/components/Home/Home.js
import React from "react";
import { Link } from "react-router-dom";  // <-- Importación necesaria
import "../css/home.css";
import background from "../img/f2.jpg";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">404 HUNGER NOT FOUND</h1>

        <div className="button-group">  
          <Link to ="/VerCarta">
            <button className="vercarta">VER CARTA</button>
            </Link>
          <Link to ="/Reserva">
          <button className="reservaboton">RESERVAR MESA</button>
          </Link>

        </div>
      </div>
     {/* <div className="Frase">Tu reunión, tu mesa, tu momento</div>//*/} 
    </div>
  );
};

export default Home;
