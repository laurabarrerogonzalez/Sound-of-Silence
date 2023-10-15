// // import React, { useState, useEffect } from 'react';
// // import Footer from '../Componets/Footer/Footer';
// // import Navbar from '../Componets/Navbar/NavBar';
// // import '../Home/Home.css';


// // const Home = () => {
// //   const [cards, setCards] = useState([]);
// //   const [filterCategory, setFilterCategory] = useState('all');
// //   const [filteredCards, setFilteredCards] = useState([]);
// //   const [isStarActive, setIsStarActive] = useState(false);

// //   // Obtén el token de acceso almacenado en el almacenamiento local o cookies
// //   const token = localStorage.getItem('accessToken'); // Asegúrate de almacenar el token después del inicio de sesión

// //   useEffect(() => {
// //     // Realiza una solicitud GET a tu API para obtener las tarjetas, incluyendo el token en el encabezado
// //     fetch('https://localhost:7134/AudioFiles/Get', {
// //       headers: {
// //         'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setCards(data);
// //         setFilteredCards(data);
// //       })
// //       .catch((error) => {
// //         console.error('Error al obtener las tarjetas:', error);
// //       });
// //   }, [token]);

// //   const handleFavoriteClick = async (cardId) => {
// //     // Realiza una solicitud POST al backend para marcar una tarjeta como favorita
// //     try {
// //       const response = await fetch('https://localhost:7134/Users/Favorite', {
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ cardId }), // Envia el ID de la tarjeta al backend
// //       });

// //       if (response.ok) {
// //         // Actualiza el estado local para reflejar la tarjeta como favorita
// //         setIsStarActive(true);
// //       } else {
// //         console.error('Error al marcar la tarjeta como favorita');
// //       }
// //     } catch (error) {
// //       console.error('Error al marcar la tarjeta como favorita', error);
// //     }
// //   };

// //   useEffect(() => {
// //     // Realiza una solicitud GET a tu API para obtener las tarjetas
// //     fetch('https://localhost:7134/AudioFiles/Get')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setCards(data);
// //         setFilteredCards(data);
// //       })
// //       .catch((error) => {
// //         console.error('Error al obtener las tarjetas:', error);
// //       });
// //   }, []);

// //   const handleFilter = async (category) => {
// //     if (category === 'all') {
// //       setFilteredCards(cards);
// //     } else {
// //       try {
// //         const response = await fetch(
// //           `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`
// //         );

// //         if (response.ok) {
// //           const data = await response.json();
// //           setFilteredCards(data);
// //         } else {
// //           console.error('Error getting cards by category');
// //         }
// //       } catch (error) {
// //         console.error('Error getting cards by category', error);
// //       }
// //     }

// //     setFilterCategory(category);
// //   };

// //   const getCategoryByName = (name) => {
// //     switch (name) {
// //       case 'Nature':
// //         return 1;
// //       case 'Instrument':
// //         return 2;
// //       default:
// //         return 1;
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="bodyadmin">
// //         <div className="filter-buttons">
// //           <button onClick={() => handleFilter('all')} className={filterCategory === 'all' ? 'active' : ''}>
// //             All Cards
// //           </button>
// //           <button
// //             onClick={() => handleFilter('Nature')}
// //             className={filterCategory === 'Nature' ? 'active' : ''}
// //           >
// //             Nature
// //           </button>
// //           <button
// //             onClick={() => handleFilter('Instrument')}
// //             className={filterCategory === 'Instrument' ? 'active' : ''}
// //           >
// //             Instrument
// //           </button>
// //         </div>
// //         <div className="container-admin">
// //           <div className="card-container">
// //             {filteredCards.map((card, index) => (
// //               <div className="card" key={index}>
// //                 <div className="imgBx">
// //                   <video
// //                     src={card.videoSrc}
// //                     autoPlay
// //                     loop
// //                     muted
// //                     playsInline
// //                     preload="auto"
// //                     poster={card.videoSrc}
// //                     style={{ width: '100%', pointerEvents: 'none', marginLeft: '50px' }}
// //                   />
// //                 </div>
// //                 <div className="content">
// //                   <h2 style={{ marginTop: '-100px' }}>{card.title}</h2>
// //                   <p style={{ marginBottom: '10px' }}>{card.description}</p>
// //                   <audio controls style={{ margin: '0' }}>
// //                     <source src={card.audioSrc} type="audio/mpeg" />
// //                     Your browser does not support the audio element.
// //                   </audio>
// //                   <span
// //                     className={`star ${isStarActive ? 'star-pink' : ''}`}
// //                     onClick={() => handleFavoriteClick(card.id)}
// //                   >
// //                     &#9733;
// //                   </span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Home;







// import React, { useState, useEffect, useRef } from 'react';
// import './Home.css';
// import Navbar from '../Componets/Navbar/Navbar';
// import Footer from '../Componets/Footer/Footer';

// const Home = () => {
//   const videoRefs = useRef({});
//   const audioRefs = useRef({});

//   const [cards, setCards] = useState([]);
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [isStarActive, setIsStarActive] = useState(false);
//   const [shouldAutoPlayVideo, setShouldAutoPlayVideo] = useState(false);

//   useEffect(() => {
//     fetchAllCards();
//   }, []);

//   const fetchAllCards = async () => {
//     try {
//       const response = await fetch('https://localhost:7134/AudioFiles/Get');
//       if (response.ok) {
//         const data = await response.json();
//         setCards(data);
//         setFilteredCards(data);
//       } else {
//         console.error('Data collection error');
//       }
//     } catch (error) {
//       console.error('Data collection error', error);
//     }
//   };

//   const handlePlayVideo = (id) => {
//     if (videoRefs.current[id]) {
//       videoRefs.current[id].play();
//       setShouldAutoPlayVideo(true);
//     }
//   };

//   const handlePauseVideo = (id) => {
//     if (videoRefs.current[id]) {
//       videoRefs.current[id].pause();
//       setShouldAutoPlayVideo(false);
//     }
//   };

//   const handleFavoriteClick = async (cardId) => {
//     try {
//       const response = await fetch('https://localhost:7134/Users/Favorite', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`, // Asegúrate de tener token definido
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ cardId }),
//       });

//       if (response.ok) {
//         setIsStarActive(true);
//       } else {
//         console.error('Error al marcar la tarjeta como favorita');
//       }
//     } catch (error) {
//       console.error('Error al marcar la tarjeta como favorita', error);
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//       <div className="bodyadmin">
//         <div className="filter-buttons">
//           <button onClick={() => handleFilter('all')} className={filterCategory === 'all' ? 'active' : ''}>
//             All Cards
//           </button>
//           <button
//             onClick={() => handleFilter('Nature')}
//             className={filterCategory === 'Nature' ? 'active' : ''}
//           >
//             Nature
//           </button>
//           <button
//             onClick={() => handleFilter('Instrument')}
//             className={filterCategory === 'Instrument' ? 'active' : ''}
//           >
//             Instrument
//           </button>
//         </div>
//         <div className="container-admin">
//           <div className="card-container">
//             {filteredCards.map((card, index) => (
//               <div className="card" key={index}>
//                 <div className="imgBx">
//                   <video
//                     ref={(ref) => (videoRefs.current[card.id_AudioFiles] = ref)}
//                     src={card.videoSrc}
//                     loop
//                     muted
//                     autoPlay={false}
//                   />
//                 </div>
//                 <div className="content">
//                   <h2>{card.title}</h2>
//                   <p>{card.description}</p>
//                   <audio
//                     controls
//                     onPlay={() => handlePlayVideo(card.id_AudioFiles)}
//                     onPause={() => handlePauseVideo(card.id_AudioFiles)}
//                     style={{ margin: '0' }}
//                     ref={(ref) => (audioRefs.current[card.id_AudioFiles] = ref)}
//                   >
//                     <source src={card.audioSrc} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>
//                   <span
//                     className={`star ${isStarActive ? 'star-pink' : ''}`}
//                     onClick={() => handleFavoriteClick(card.id)}
//                   >
//                     &#9733;
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer/>
//     </>
//   );
// };

// export default Home;




import React, { useState, useEffect } from 'react';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';
import '../Home/Home.css';

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
      <div className="bodyadmin">
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
                    ref={(ref) => (videoRefs[card.id_AudioFiles] = ref)}
                    src={card.videoSrc}
                    loop
                    muted
                    autoPlay={false}
                  />
                </div>
                <div className="content">
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
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
