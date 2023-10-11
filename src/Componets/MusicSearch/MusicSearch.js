import React, { useState } from 'react';

function MusicSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('naturaleza'); // Por defecto, la categoría es "naturaleza"

  // Función para manejar cambios en el término de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar cambios en la categoría
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Función para manejar la búsqueda
  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda en función del término y la categoría seleccionada
    // Puedes usar AJAX para llamar a un servicio backend que buscará la música.
    // Actualiza el resultado en el estado o realiza la acción deseada.
  };

  return (
    <div className="music-search">
      <input
        type="text"
        placeholder="Buscar música..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="naturaleza">Naturaleza</option>
        <option value="instrumentos">Instrumentos</option>
      </select>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default MusicSearch;