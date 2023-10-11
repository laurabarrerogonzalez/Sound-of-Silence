import React from "react";
import Header from "../../Componets/Header/Header.jsx";
import Footer from "../../Componets/Footer/Footer.jsx";
import SubscribePagination from "../../Componets/Pagination/SubscribePagination.jsx"; // Asegúrate de que la ruta sea correcta

const Subscribe = () => {
  return (
    <>
      <Header />
      <SubscribePagination /> {/* Habilita la paginación */}
      <h1>Subscribe</h1>
      <Footer />
    </>
  );
};

export default Subscribe;


