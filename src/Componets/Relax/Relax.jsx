import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../../Componets/Footer/Footer.jsx'
import './Relax.css'; // Importa tus estilos CSS aquí

const Relax = () => {
  return (
    <>
      <Navbar />

      <div className="relax-landing">
        <h1>Consejos para Relajarse Escuchando Sonidos de la Naturaleza e Instrumentos</h1>
        <div className="relax-content">
          <h2>Consejos para una Experiencia Relajante</h2>
          <p>
            Disfruta de los sonidos de la naturaleza y melodías de instrumentos para una experiencia de relajación completa. Aquí tienes algunos consejos para aprovechar al máximo tu experiencia:
          </p>
          <ul>
            <li>
              <h3>1. Seleccione sonidos adecuados:</h3>
              <p>
                Elija sonidos de la naturaleza como el canto de los pájaros, el sonido de las olas del mar o arroyos suaves. También puede optar por melodías de instrumentos como la flauta, el piano o la guitarra, dependiendo de sus preferencias.
              </p>
            </li>

            <li>
              <h3>2. Crea un ambiente tranquilo:</h3>
              <p>
                Encuentra un lugar sereno y cómodo. Puedes ajustar la iluminación, encender velas o inciensos, y quizás usar auriculares de calidad para sumergirte por completo en los sonidos.
              </p>
            </li>

            <li>
              <h3>3. Practica la meditación o la respiración profunda:</h3>
              <p>
                Combina la música con técnicas de meditación o respiración profunda. Esto te ayudará a relajarte y a concentrarte en el momento presente.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Relax;
