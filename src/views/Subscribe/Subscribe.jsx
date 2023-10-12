import React from "react";

import Footer from "../../Componets/Footer/Footer.jsx";
import './Subscribe.css'
import Navbar from "../../Componets/Navbar/NavBar";


const Subscribe = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a tu API para obtener las tarjetas
    fetch('https://localhost:7134/AudioFiles/Get')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data); // Inicialmente muestra todas las tarjetas
      })
      .catch((error) => {
        console.error('Error al obtener las tarjetas:', error);
      });
  }, []);

  const handleFilter = async (category) => {
    if (category === 'all') {
      setFilteredCards(cards);
    } else {
      try {
        const response = await fetch(`https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`);

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

    

    <div className="bodyadmin">
       <Header />
      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')} className={filterCategory === 'all' ? 'active' : ''}>
          All Cards
        </button>
        <button
          onClick={() => handleFilter('Nature')}
          className={filterCategory === 'Nature' ? 'active' : ''}
        >
          Nature
        </button>
        <button
          onClick={() => handleFilter('Instrument')}
          className={filterCategory === 'Instrument' ? 'active' : ''}
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
                  src={card.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={card.videoSrc}
                  style={{ width: '100%', pointerEvents: 'none', marginLeft: '50px' }}
                />
              </div>
              <div className="content">
                <h2 style={{ marginTop: '-100px' }}>{card.title}</h2>
                <p style={{ marginBottom: '10px' }}>{card.description}</p>
                <audio controls style={{ margin: '0' }}>
                  <source src={card.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscribe;
