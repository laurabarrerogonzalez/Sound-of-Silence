import React from "react";
import "../../Componets/Header/Header.css";

export default function Header() {
  return (
    <header className="logo-windons">
      <div className="logo">
        <img
          className="brand"
          src="https://res.cloudinary.com/dqc0wvttr/image/upload//e_improve,e_sharpen/v1695634508/Captura_de_pantalla_2023-09-23_215716_nqz4vb-removebg-preview_lwpq0u.png"
          alt="Company Logo"
        />
      </div>

      <div className="welcome">
        <h1>Hi Laura</h1>
      </div>

      <div className="windons">
        <a href="http://"><strong>Home</strong></a>
        <a href="http://"><strong>Categories</strong></a>
        <a href="http://"><strong>Favourites</strong></a>
        <a href="http://"><strong>Log Out</strong></a>
      </div>
    </header>
  );
}
