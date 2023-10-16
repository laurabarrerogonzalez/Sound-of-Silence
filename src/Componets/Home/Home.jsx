import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Home.css';


const Home = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);
  const [isStarActive, setIsStarActive] = useState(false);

  const videoRefs = {};
  const audioRefs = {};
 
  const token = localStorage.getItem('accessToken'); 

  useEffect(() => {
    fetchAllCards();
  }, []);

  const fetchAllCards = async () => {
    try {
      const response = await fetch('https://localhost:7134/AudioFiles/Get', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCards(data);
        setFilteredCards(data);
      } else {
        console.error('Data collection error');
      }
    } catch (error) {
      console.error('Data collection error', error);
    }
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
    try {
      const response = await fetch('https://localhost:7134/Users/Favorite', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardId }),
      });

      if (response.ok) {
        setIsStarActive(true);
      } else {
        console.error('Error al marcar la tarjeta como favorita');
      }
    } catch (error) {
      console.error('Error al marcar la tarjeta como favorita', error);
    }
  };

  const handleFilter = async (category) => {
    if (category === 'all') {
      setFilteredCards(cards);
    } else {
      try {
        const response = await fetch(
          `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`
        );

        if (response.ok) {
          const data = await response.json();
          setFilteredCards(data);
        } else {
          console.error('Error getting cards by category');
        }
      } catch (error) {
        console.error('Error getting cards by category', error);
      }
    }

    setFilterCategory(category);
  };

  const getCategoryByName = (name) => {
    switch (name) {
      case 'Nature':
        return 1;
      case 'Instrument':
        return 2;
      default:
        return 1;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bodyadmin">
        <div className='tittle-home'>
          <div className='music-note left'>&#119070;</div>
          <h1>Welcome</h1>
          <div className='music-note right'>&#119070;</div>
        </div>
        <div className="filter-buttons">
          <button onClick={() => handleFilter('all')} className={`all-cards-button ${filterCategory === 'all' ? 'active' : ''}`}>
            All Cards
          </button>
          <button onClick={() => handleFilter('Nature')} className={`nature-button ${filterCategory === 'Nature' ? 'active' : ''}`}>
            Nature
          </button>
          <button onClick={() => handleFilter('Instrument')} className={`instrument-button ${filterCategory === 'Instrument' ? 'active' : ''}`}>
            Instrument
          </button>
        </div>

        {filterCategory === 'all' && (
          <div className="all-cards-text">
            <p>All Cards</p>
          </div>
        )}

        {filterCategory === 'Nature' && (
          <div className="nature-button-text">
            <p>Nature</p>
          </div>
        )}

        {filterCategory === 'Instrument' && (
          <div className="instrument-button-tex">
            <p>Instrument</p>
          </div>
        )}
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
                    style={{ width: '100%', pointerEvents: 'none', marginLeft: '50px' }}
                  />
                </div>
                <div className="content">
                  <h2 style={{ marginTop: '-100px' }}>{card.title}</h2>
                  <p style={{ marginBottom: '10px' }}>{card.description}</p>
                  <audio
                    controls
                    onPlay={() => handlePlayVideo(card.id_AudioFiles)}
                    onPause={() => handlePauseVideo(card.id_AudioFiles)}
                    style={{ margin: '0' }}
                    ref={(ref) => (audioRefs[card.id_AudioFiles] = ref)}
                  >
                    <source src={card.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <span
                    className={`star ${isStarActive ? 'star-pink' : ''}`}
                    onClick={() => handleFavoriteClick(card.id)}
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


