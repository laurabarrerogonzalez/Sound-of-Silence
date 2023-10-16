import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import './Home.css';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const videoRefs = {};
  const audioRefs = {};

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    fetchAllCards();
  }, [filterCategory, currentPage]);

  const fetchAllCards = async () => {
    try {
      let url = 'https://localhost:7134/AudioFiles/Get';

      if (filterCategory !== 'all') {
        url = `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(filterCategory)}`;
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCards(data);
      } else {
        console.error('Data collection error');
      }
    } catch (error) {
      console.error('Data collection error', error);
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

        <div className="pagination">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
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








