
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import "../Favorites/Favorites.css"; 

const Favorites = () => {
  const [favoritos, setFavoritos] = useState([]); // Estado para almacenar los archivos favoritos
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  // Función para cargar los archivos favoritos desde el backend
  const cargarFavoritos = async () => {
    try {
      const token = getCookie("jwtToken");
      if (!token) {
        // Manejar caso en el que el token no está presente
        console.error("Token invalid or not present");
        return;
      }
  
      // Configura el encabezado de la solicitud con el token
      const headers = new Headers({
        'Authorization': `Bearer ${token}`,
      });
  
      const requestOptions = {
        method: 'GET',
        headers,
      };
  
      // Realiza una solicitud al backend para obtener los archivos favoritos
      const response = await fetch('https://localhost:7134/UserAudio/GetFavoritos/favoritos', requestOptions);
  
      if (response.ok) {
        const data = await response.json();
        setFavoritos(data); // Almacena los datos de favoritos en el estado
      } else {
        console.error('Error loading favourite files.');
      }
    } catch (error) {
      console.error('Error loading favourite files:', error);
    }
  };

  // Cargar los archivos favoritos cuando el componente se monta
  useEffect(() => {
    cargarFavoritos();
  }, []);

  return (
    <>
      <Navbar />

      <h1>Your favourite files:</h1>

      <div className="card-container">
        {favoritos.map((favorito) => (
          <div className="card" key={favorito.id_AudioFiles}>
            <h2>{favorito.title}</h2>
            <p>{favorito.description}</p>
            <video src={favorito.videoSrc} controls>
            Your browser does not support the video element.
            </video>
            <span>
                    &#9733;
                  </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;






