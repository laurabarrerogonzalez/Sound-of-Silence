// // import React, { useState, useEffect } from 'react'; 
// // import Footer from "../Componets/Footer/Footer";
// // import '../views/Subscribe/Subscribe.css'
// // import '../views/Admin/Admin.css'
// // import Navbar from '../Componets/Navbar/NavBar';



// // const Home = () => {
// //     const [cards, setCards] = useState([]);
// //     const [filterCategory, setFilterCategory] = useState('all');
// //     const [filteredCards, setFilteredCards] = useState([]);
  
// //     useEffect(() => {
// //       // Realiza una solicitud GET a tu API para obtener las tarjetas
// //       fetch('https://localhost:7134/AudioFiles/Get')
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setCards(data);
// //           setFilteredCards(data); // Inicialmente muestra todas las tarjetas
// //         })
// //         .catch((error) => {
// //           console.error('Error al obtener las tarjetas:', error);
// //         });
// //     }, []);
  
// //     const handleFilter = async (category) => {
// //       if (category === 'all') {
// //         setFilteredCards(cards);
// //       } else {
// //         try {
// //           const response = await fetch(`https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`);
  
// //           if (response.ok) {
// //             const data = await response.json();
// //             setFilteredCards(data);
// //           } else {
// //             console.error('Error getting cards by category');
// //           }
// //         } catch (error) {
// //           console.error('Error getting cards by category', error);
// //         }
// //       }
  
// //       setFilterCategory(category);
// //     };
  
// //     const getCategoryByName = (name) => {
// //       switch (name) {
// //         case 'Nature':
// //           return 1;
// //         case 'Instrument':
// //           return 2;
// //         default:
// //           return 1;
// //       }
// //     };
  
// //     return (
// //   <>
// //   <Navbar />
// //   <div className="bodyadmin">
       
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
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
       
// //       </div>
    
  
// //   <Footer />
// //   </>
// //     );
// //             }
// //   export default Home;
  



// import React, { useState, useEffect } from 'react';
// import Footer from '../Componets/Footer/Footer';
// import '../views/Subscribe/Subscribe.css';
// import '../views/Admin/Admin.css';

// import '../Home/Home.css';
// import Navbar from '../Componets/Navbar/NavBar';

// const Home = () => {
//   const [cards, setCards] = useState([]);
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [isStarActive, setIsStarActive] = useState(false);

//   useEffect(() => {
//     fetch('https://localhost:7134/AudioFiles/Get')
//       .then((response) => response.json())
//       .then((data) => {
//         setCards(data);
//         setFilteredCards(data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener las tarjetas:', error);
//       });
//   }, []);

//   const handleFilter = async (category) => {
//     if (category === 'all') {
//       setFilteredCards(cards);
//     } else {
//       try {
//         const response = await fetch(
//           `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setFilteredCards(data);
//         } else {
//           console.error('Error getting cards by category');
//         }
//       } catch (error) {
//         console.error('Error getting cards by category', error);
//       }
//     }

//     setFilterCategory(category);
//   };

//   const getCategoryByName = (name) => {
//     switch (name) {
//       case 'Nature':
//         return 1;
//       case 'Instrument':
//         return 2;
//       default:
//         return 1;
//     }
//   };

//   return (
//     <>
//       <Navbar />
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
//                     src={card.videoSrc}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     preload="auto"
//                     poster={card.videoSrc}
//                     style={{ width: '100%', pointerEvents: 'none', marginLeft: '50px' }}
//                   />
//                 </div>
//                 <div className="content">
//                   <h2 style={{ marginTop: '-100px' }}>{card.title}</h2>
//                   <p style={{ marginBottom: '10px' }}>{card.description}</p>
//                   <audio controls style={{ margin: '0' }}>
//                     <source src={card.audioSrc} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>
//                   <span
//                     className={`star ${isStarActive ? 'star-pink' : ''}`}
//                     onClick={() => setIsStarActive(!isStarActive)}
//                   >
//                     &#9733;
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Footer from '../Componets/Footer/Footer';
import Navbar from '../Componets/Navbar/NavBar';
import '../Home/Home.css';


const Home = () => {
  const [cards, setCards] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);
  const [isStarActive, setIsStarActive] = useState(false);

    // Obtén el token de acceso almacenado en el almacenamiento local o cookies
 
    // Asegúrate de almacenar el token después del inicio de sesión
    // const token = localStorage.getItem('accessToken'); 

  useEffect(() => {
 
      // Verificar el token
      const token = getCookie('jwtToken');
      if (!token) {
        // Manejar caso en el que el token no está presente
        console.error('Token no válido o no presente');
        return;
      }

    // Realiza una solicitud GET a tu API para obtener las tarjetas, incluyendo el token en el encabezado
    fetch('https://localhost:7134/AudioFiles/Get', {
      headers: {
        'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      })
      .catch((error) => {
        console.error('Error al obtener las tarjetas:', error);
      });
  }, []);

  const handleFavoriteClick = async (cardId) => {
    console.log(cardId); 
    // Recupera el token de autenticación desde las cookies
    const token = getCookie('jwtToken');
    if (!token) {
      // Manejar caso en el que el token no está presente
      console.error('Token no válido o no presente');
      return;
    }

      // Crea un objeto que contenga tanto el token como el cardId
  // const data = {
  //   cardId: cardId,
  //   token: token

  // };
  
    // Realiza una solicitud POST al backend para marcar la tarjeta como favorita
    console.log(token);
    try {
      const response = await fetch('https://localhost:7134/UserAudio/MarkFavorite/MarkFavorite', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Incluye el token en el encabezado
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({cardId}), // Envia el ID de la tarjeta al backend
         
      });
  
      if (response.ok) {
        // Actualiza el estado local para reflejar la tarjeta como favorita
        setIsStarActive(true);
      } else {
        console.error('Error al marcar la tarjeta como favorita');
      }
    } catch (error) {
      console.error('Error al marcar la tarjeta como favorita', error);
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
                  <span
                    className={`star ${isStarActive ? 'star-pink' : ''}`}
                    onClick={() => {console.log(card.id_AudioFiles); handleFavoriteClick(card.id_AudioFiles)}}
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


