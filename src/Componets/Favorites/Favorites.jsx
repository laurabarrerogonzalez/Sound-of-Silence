import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "../Favorites/Favorites.css";
import Swal from "sweetalert2";

const Favorites = () => {
  const [favoritos, setFavoritos] = useState([]);
  const videoRefs = {};

  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const cargarFavoritos = async () => {
    try {
      const token = getCookie("jwtToken");
      if (!token) {
        console.error("Token invalid or not present");
        return;
      }

      const headers = new Headers({
        Authorization: `Bearer ${token}`,
      });

      const requestOptions = {
        method: "GET",
        headers,
      };

      const response = await fetch(
        "https://localhost:7134/UserAudio/GetFavoritos/favoritos",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        setFavoritos(data);
      } else {
        console.error("Error loading favorite files.");
      }
    } catch (error) {
      console.error("Error loading favorite files:", error);
    }
  };

  useEffect(() => {
    cargarFavoritos();
  }, []);

  const handlePlayVideo = (id) => {
    if (videoRefs[id]) {
      videoRefs[id].play();
    }
  };

  const handlePauseVideo = (id) => {
    if (videoRefs[id]) {
      videoRefs[id].pause();
    }
  };

  const handleUnfavoriteClick = async (favorito) => {
    Swal.fire({
      title: "Are you sure you want to remove this card from favorites?",
      text: "This action cannot be undone.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = getCookie("jwtToken");
          if (!token) {
            console.error("Token invalid or not present");
            return;
          }

          const headers = new Headers({
            Authorization: `Bearer ${token}`,
          });

          const requestOptions = {
            method: "POST",
            headers,
            body: JSON.stringify({ fileId: favorito.id_AudioFiles }),
          };

          const response = await fetch(
            "https://localhost:7134/UserAudio/RemoveFromFavoritos",
            requestOptions
          );

          if (response.ok) {
            // Actualizar la lista de favoritos eliminando la tarjeta
            setFavoritos((prevFavoritos) =>
              prevFavoritos.filter(
                (item) => item.id_AudioFiles !== favorito.id_AudioFiles
              )
            );
          } else {
            console.error("Error unfavoriting the file.");
          }
        } catch (error) {
          console.error("Error unfavoriting the file:", error);
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <h1>Your favorite files:</h1>
      <div className="card-container">
        {favoritos.map((favorito) => (
          <div className="card" key={favorito.id_AudioFiles}>
            <div className="video-container">
              <div className="imgBx">
                <video
                  ref={(ref) => (videoRefs[favorito.id_AudioFiles] = ref)}
                  src={favorito.videoSrc}
                  autoPlay={false}
                  playsInline
                  controls={false}
                  muted
                  loop
                  style={{
                    width: "100%",
                    pointerEvents: "none",
                    marginLeft: "50px",
                  }}
                />
              </div>
            </div>
            <div className="content">
              <h2>{favorito.title}</h2>
              <h6 className="description">{favorito.description}</h6>
              <div className="audio-container">
                <audio
                  controls
                  onPlay={() => handlePlayVideo(favorito.id_AudioFiles)}
                  onPause={() => handlePauseVideo(favorito.id_AudioFiles)}
                >
                  <source src={favorito.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <span
                className="star"
                onClick={() => handleUnfavoriteClick(favorito)}
              >
                &#9733;
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
