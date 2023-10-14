import React, { useState, useEffect } from 'react'; 
import Footer from '../../Componets/Footer/Footer.jsx';
import './Subscribe.css';
import '../Admin/Admin.css';
import Navbar from '../../Componets/Navbar/NavBar';
import Card from '../../Componets/CardFiles/CardFiles.jsx'; // Importa el componente de tarjeta

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
    <>
      <Navbar />
      <div className="boodySubscribe">
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
              <Card
                key={index}
                card={card}
                // Aquí no es necesario pasar las funciones handleEdit y handleDelete
                // para que los botones de edición y eliminación no se muestren
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;
