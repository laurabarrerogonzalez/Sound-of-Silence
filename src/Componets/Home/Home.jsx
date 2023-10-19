import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import "./Home.css";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCards, setFilteredCards] = useState([]);
  const [favoriteCards, setFavoriteCards] = useState([]);

  const cardsPerPage = 6;
  const videoRefs = {};
  const audioRefs = {};

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
  const token = getCookie("jwtToken");

  useEffect(() => {
    fetchAllCards();
  }, [filterCategory, currentPage]);
  
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
    // Limpiar las referencias de video existentes al cambiar de página
    for (const key in videoRefs) {
      if (videoRefs[key]) {
        videoRefs[key].pause();
      }
    }
  
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const newFilteredCards = cards.slice(startIndex, endIndex);
  
    // Actualizar las referencias de video para las nuevas cartas
    newFilteredCards.forEach((card) => {
      if (!videoRefs[card.id_AudioFiles]) {
        videoRefs[card.id_AudioFiles] = React.createRef();
      }
    });
  
    setFilteredCards(newFilteredCards);
  
    // Carga de videos
    newFilteredCards.forEach((card) => {
      const videoRef = videoRefs[card.id_AudioFiles];
      if (videoRef && videoRef.current) {
        videoRef.current.load();
      }
    });
  }, [currentPage, cards]);


  const handleFilter = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


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

  const handleFavoriteClick = async (cardId) => {

    const token = getCookie("jwtToken");
    if (!token) {
      console.error("Token no válido o no presente");
      return;
    }

    try {
      const response = await fetch("https://localhost:7134/UserAudio/MarkFavorite/MarkFavorite", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardId }),
      });
      if (response.ok) {
        if (favoriteCards.includes(cardId)) {
          setFavoriteCards(favoriteCards.filter(id => id !== cardId));
        } else {
          setFavoriteCards([...favoriteCards, cardId]);
        }

        const message = favoriteCards.includes(cardId)
          ? "Card removed from favorites"
          : "Card added to favorites";

        Swal.fire({
          text: message,
          icon: "success",
          timer: 3000,
          showConfirmButton: false
        });
      } else {
        console.error("Error marking the card as a favorite");
      }
    } catch (error) {
      console.error("Error marking the card as a favorite", error);
    }
  }

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
            className={`all-cards-button ${filterCategory === "all" ? "active" : ""}`}
          >
            All Cards
          </button>
          <button
            onClick={() => handleFilter("Nature")}
            className={`nature-button ${filterCategory === "Nature" ? "active" : ""}`}
          >
            Nature
          </button>
          <button
            onClick={() => handleFilter("Instrument")}
            className={`instrument-button ${filterCategory === "Instrument" ? "active" : ""}`}
          >
            Instrument
          </button>
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
                  <h6 style={{ marginBottom: "10px" }}>{card.description}</h6>
                  <audio
                    controls
                    onPlay={() => handlePlayVideo(card.id_AudioFiles)}
                    onPause={() => handlePauseVideo(card.id_AudioFiles)}
                    style={{ margin: "0" }}
                    ref={(ref) => (audioRefs[card.id_AudioFiles] = ref)}
                    src={card.audioSrc}
                  >
                    {/* <source src={card.audioSrc} type="audio/mpeg" /> */}
                    Your browser does not support the audio element.
                  </audio>
                  <span
                    className={`star ${favoriteCards.includes(card.id_AudioFiles) ? "star-blue" : ""}`}
                    onClick={() => {
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
        <div className="pagination">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                style={{
                  padding: "5px",
                  backgroundColor: "blue",
                  border: "2px solid black",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
