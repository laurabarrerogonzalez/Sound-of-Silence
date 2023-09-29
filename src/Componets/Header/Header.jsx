import React from 'react';

import "../../Componets/Header/Header.css";


export default function Header (){
    return (
      <>
      <header className="logo-windons">
      
      <div className="logo">
        <img className="brand" src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png" alt="Company Logo"/>
      </div>

      <div className="welcome">
        <h1>Hola Fulanito</h1>
      </div>

      <div className="windons">
        <h1>Home</h1>
        <h1>Categories</h1>
        <h1>Favourites</h1>
        <h1>Log out</h1>
      </div>

      </header>
      </>
    );
  };