import React, { useState } from 'react';
import './MusicSearch.css'; 

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setQuery(searchText);

    // Realiza la búsqueda en los datos
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;





// import React, { useState } from 'react';
// import './MusicSearch.css';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = (e) => {
//     const searchText = e.target.value;
//     setQuery(searchText);

//     // Realiza la búsqueda en los datos y muestra los resultados
//     // en el componente o llama a una función que realiza la solicitud a la API.
//     performSearch(searchText);
//   };

//   const performSearch = (searchText) => {
//     // Realiza una solicitud GET a la API de backend con los parámetros de búsqueda.
//     fetch(`https://localhost:7134/api/audio´{${searchText}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error en la solicitud: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Actualiza el estado de los resultados con los datos recibidos.
//         setResults(data);
//       })
//       .catch((error) => {
//         console.error(`Error en la solicitud: ${error}`);
//         // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Buscar..."
//         value={query}
//         onChange={handleSearch}
//       />
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;


// import React, { useState } from 'react';
// import './MusicSearch.css';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = (e) => {
//     const searchText = e.target.value;
//     setQuery(searchText);

//     // Llama a la función performSearch para realizar la búsqueda.
//     performSearch(searchText);
//   };

//   const performSearch = (searchText) => {
//     // Realiza una solicitud GET a la API de backend con los parámetros de búsqueda.
//     fetch(`https://localhost:7134/api/audio?Name=${searchText}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error en la solicitud: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Actualiza el estado de los resultados con los datos recibidos.
//         setResults(data);
//       })
//       .catch((error) => {
//         console.error(`Error en la solicitud: ${error}`);
//         // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Buscar..."
//         value={query}
//         onChange={handleSearch}
//       />
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result.title}</li> 
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;



// import React, { useState } from 'react';
// import './MusicSearch.css';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState(''); // Por defecto, la categoría es "naturaleza"
//   const [results, setResults] = useState([]);

//   // Función para manejar cambios en el término de búsqueda
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // Función para manejar cambios en la categoría
//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   // Función para manejar la tecla "Enter"
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   // Función para realizar la búsqueda
//   const handleSearch = () => {
//     // Realiza la búsqueda con searchTerm y category
//     //fetch(`https://localhost:7134/api/audio?Name=${searchTerm}&Category=${category}`)
//     //fetch(`https://localhost:7134/api/audio?Name=${searchTerm}&Category=${category}`)
//     fetch(`https://localhost:7134/api/audio?Name=${searchTerm}&Category=${category}`)


//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error en la solicitud: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Actualiza el estado de los resultados con los datos recibidos.
//         setResults(data);
//       })
//       .catch((error) => {
//         console.error(`Error en la solicitud: ${error}`);
//         // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
//       });
//   };

//   return (
//     <div className="music-search">
//       <input
//         type="text"
//         placeholder="Buscar música..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         onKeyPress={handleKeyPress}
//       />
//       <select value={category} onChange={handleCategoryChange}>
//         <option value="naturaleza">Naturaleza</option>
//         <option value="instrumentos">Instrumentos</option>
//       </select>
//       <button onClick={handleSearch}>Buscar</button>
//     </div>
//   );
// };

// export default SearchBar;



