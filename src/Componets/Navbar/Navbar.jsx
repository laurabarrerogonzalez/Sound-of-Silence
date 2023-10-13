import React, { useState } from 'react';
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img
          src="https://res.cloudinary.com/dp7lr71t8/image/upload/v1696868827/Captura_de_pantalla_2023-09-19_175013-removebg-preview-removebg-preview_jtyh40.png"
          alt="Logo de tu empresa"
        />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <a href="#">Contact</a>
        <a href="#">Log out</a>
        {/* Agrega enlaces para "Contact" y "Log out" si es necesario */}
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

