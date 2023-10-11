import React from "react";
import Header from "../../Componets/Header/Header.jsx";
import Footer from "../../Componets/Footer/Footer.jsx";
import MusicSearch from './components/MusicSearch'; // Importa el componente MusicSearch
import './Subscribe.css'

const Subscribe = () => {
  return (
    <>
      <Header />
      <div className="music-search-container"> {/* Contenedor para MusicSearch */}
        <MusicSearch />
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;