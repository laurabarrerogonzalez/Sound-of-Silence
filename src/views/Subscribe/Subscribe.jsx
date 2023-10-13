import React from "react";
import Header from "../../Componets/Header/Header.jsx";
import Footer from "../../Componets/Footer/Footer.jsx";
import MusicSearch from "../../Componets/MusicSearch/MusicSearch.jsx";
import "../Subscribe/Subscribe.css";
import '../../Componets/MusicSearch/MusicSearch.jsx';

const Subscribe = () => {
  return (
    <>
      <Home />
    </>
  );
};
// export default Subscribe;

function App() {
  return (
    <div className="App">
      <h1>Música</h1>
      <MusicSearch />
      {/* Aquí puedes mostrar los resultados de la búsqueda, si es necesario */}
    </div>
  );
}

export default Subscribe;
