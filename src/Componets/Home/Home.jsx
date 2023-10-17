import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import "./Home.css";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isStarActive, setIsStarActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const videoRefs = {};
  const audioRefs = {};
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetchAllCards();
  }, [filterCategory, currentPage]);
  
  const fetchAllCards = async () => {
    try {
      let url = "https://localhost:7134/AudioFiles/Get";
      if (filterCategory !== "all") {
        url = `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(
          filterCategory
        )}`;
      }
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCards(data);
      } else {
        console.error("Data collection error");
      }
    } catch (error) {
      console.error("Data collection error", error);
    }
  };
  useEffect(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    setFilteredCards(cards.slice(startIndex, endIndex));
  }, [currentPage, cards]);
  
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
  const handleFilter = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    // Verificar el token
    const token = getCookie("jwtToken");
    if (!token) {
      // Manejar caso en el que el token no está presente
      console.error("Token no válido o no presente");
      return;
    }
    // Realiza una solicitud GET a tu API para obtener las tarjetas, incluyendo el token en el encabezado
    fetch("https://localhost:7134/AudioFiles/Get", {
      headers: {
        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      })
      .catch((error) => {
        console.error("Error al obtener las tarjetas:", error);
      });
  }, []);
  const handleFavoriteClick = async (cardId) => {
    console.log(cardId);
    // Recupera el token de autenticación desde las cookies
    const token = getCookie("jwtToken");
    if (!token) {
      // Manejar caso en el que el token no está presente
      console.error("Token no válido o no presente");
      return;
    }
    // Realiza una solicitud POST al backend para marcar la tarjeta como favorita
    console.log(token);
    try {
      const response = await fetch("https://localhost:7134/UserAudio/MarkFavorite/MarkFavorite",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cardId }), // Envia el ID de la tarjeta al backend
        }
      );
      if (response.ok) {
        // Actualiza el estado local para reflejar la tarjeta como favorita
        setIsStarActive(true);
      } else {
        console.error("Error al marcar la tarjeta como favorita");
      }
    } catch (error) {
      console.error("Error al marcar la tarjeta como favorita", error);
    }
  };
  // Función para obtener el valor de una cookie por nombre
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
useEffect(() => {
  // Realiza una solicitud GET a tu API para obtener las tarjetas
  fetch('https://localhost:7134/AudioFiles/Get')
    .then((response) => response.json())
    .then((data) => {
      setCards(data);
      setFilteredCards(data);
    })
    .catch((error) => {
      console.error('Error al obtener las tarjetas:', error);
    });
}, []);
  const getCategoryByName = (name) => {
    switch (name) {
      case "Nature":
        return 1;
      case "Instrument":
        return 2;
      default:
        return 1;
    }
  };
  return (
    <>
      <Navbar />
      <div className="bodyadmin">
        <div className="tittle-home">
          <div className="music-note left">&#119070;</div>
          <h1>Welcome</h1>
          <div className="music-note right">&#119070;</div>
        </div>
        <div className="filter-buttons">
          <button
            onClick={() => handleFilter("all")}
            className={`all-cards-button ${
              filterCategory === "all" ? "active" : ""
            }`}
          >
            All Cards
          </button>
          <button
            onClick={() => handleFilter("Nature")}
            className={`nature-button ${
              filterCategory === "Nature" ? "active" : ""
            }`}
          >
            Nature
          </button>
          <button
            onClick={() => handleFilter("Instrument")}
            className={`instrument-button ${
              filterCategory === "Instrument" ? "active" : ""
            }`}
          >
            Instrument
          </button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`page-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <div className="container-admin">
          <div className="card-container">
            {filteredCards.map((card, index) => (
              <div className="card" key={index}>
                <div className="imgBx">
                  <video
                    ref={(ref) => (videoRefs[card.id_AudioFiles] = ref)}
                    src={card.videoSrc}
                    loop
                    muted
                    autoPlay={false}
                    style={{
                      width: "100%",
                      pointerEvents: "none",
                      marginLeft: "50px",
                    }}
                  />
                </div>
                <div className="content">
                  <h2 style={{ marginTop: "-100px" }}>{card.title}</h2>
                  <p style={{ marginBottom: "10px" }}>{card.description}</p>
                  <audio
                    controls
                    onPlay={() => handlePlayVideo(card.id_AudioFiles)}
                    onPause={() => handlePauseVideo(card.id_AudioFiles)}
                    style={{ margin: "0" }}
                    ref={(ref) => (audioRefs[card.id_AudioFiles] = ref)}
                  >
                    <source src={card.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <span
                    className={`star ${isStarActive ? "star-pink" : ""}`}
                    onClick={() => {
                      console.log(card.id_AudioFiles);
                      handleFavoriteClick(card.id_AudioFiles);
                    }}
                  >
                    &#9733;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;