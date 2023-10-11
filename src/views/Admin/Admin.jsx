import React, { useState, useEffect } from 'react';
import './Admin.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    videoSrc: '',
    audioSrc: '',
    title: '',
    description: '',
    category: 'Naturaleza',
  });

  const [cards, setCards] = useState([]);
  const [editCardId, setEditCardId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener todas las tarjetas al cargar la página
    fetchAllCards();
  }, []);

  const fetchAllCards = async () => {
    try {
      const response = await fetch('https://localhost:7134/AudioFiles/Get');
      if (response.ok) {
        const data = await response.json();
        setCards(data);
        setFilteredCards(data); // Mostrar todas las tarjetas al principio
      } else {
        console.error('Error en la obtención de datos');
      }
    } catch (error) {
      console.error('Error en la obtención de datos', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isEditing) {
      // Lógica para la edición de tarjetas
      const updatedData = {
        videoSrc: formData.videoSrc,
        audioSrc: formData.audioSrc,
        title: formData.title,
        description: formData.description,
        Id_category: getCategoryByName(formData.category),
      };
  
      fetch(`https://localhost:7134/AudioFiles/Put/${editCardId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire('Success', 'Card updated successfully!', 'success');
            setEditCardId(null);
            setIsEditing(false);
            // Actualizar la lista de tarjetas
            fetchAllCards();
            // Limpiar los campos del formulario
            setFormData({
              videoSrc: '',
              audioSrc: '',
              title: '',
              description: '',
              category: 'Naturaleza',
            });
          } else {
            console.error('Error al actualizar la tarjeta', error);
            Swal.fire('Error', 'Failed to update card.', 'error');
          }
        })
        .catch((error) => {
          console.error('Error al actualizar la tarjeta', error);
          Swal.fire('Error', 'An error occurred while updating the card.', 'error');
        });
    } else {
      // Lógica para agregar una nueva tarjeta
      const categoryId = getCategoryByName(formData.category);
  
      if (categoryId !== null) {
        formData.Id_category = categoryId;
  
        const response = await fetch('https://localhost:7134/AudioFiles/Post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const newAudioFileId = await response.json();
          setFormData({
            videoSrc: '',
            audioSrc: '',
            title: '',
            description: '',
            category: 'Naturaleza',
          });
  
          fetchAllCards();
  
          Swal.fire('Success', `Card added successfully with ID ${newAudioFileId}!`, 'success');
        } else {
          Swal.fire('Error', 'Failed to add card.', 'error');
        }
      } else {
        Swal.fire('Error', 'Invalid category selected.', 'error');
      }
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', { replace: true });
      }
    });
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
          console.error('Error al obtener tarjetas por categoría');
        }
      } catch (error) {
        console.error('Error al obtener tarjetas por categoría', error);
      }
    }

    setFilterCategory(category);
  };

  const getCategoryByName = (name) => {
    switch (name) {
      case 'Naturaleza':
        return 1;
      case 'Instrumento':
        return 2;
      default:
        return null;
    }
  };

  const handleDelete = async (id_AudioFiles) => {
    Swal.fire({
      title: '¿Estás seguro de que quieres borrar esta tarjeta?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://localhost:7134/AudioFiles/Delete/${id_AudioFiles}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            fetchAllCards();
            Swal.fire('Success', 'Card deleted successfully!', 'success');
          } else {
            Swal.fire('Error', 'Failed to delete card.', 'error');
          }
        } catch (error) {
          console.error('Error deleting card', error);
          Swal.fire('Error', 'An error occurred while deleting the card.', 'error');
        }
      }
    });
  };

  const handleEdit = (id) => {
    Swal.fire({
      title: '¿Estás seguro de que quieres editar esta tarjeta?',
      text: 'Esta acción abrirá un formulario de edición.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const cardToEdit = cards.find((card) => card.id_AudioFiles === id);
        if (cardToEdit) {
          // Copia los datos de la tarjeta en el estado de edición
          setFormData({
            videoSrc: cardToEdit.videoSrc,
            audioSrc: cardToEdit.audioSrc,
            title: cardToEdit.title,
            description: cardToEdit.description,
            category: getCategoryById(cardToEdit.Id_category),
          });

          // Establece el ID de la tarjeta en edición
          setEditCardId(id);

          // Cambia el estado a edición
          setIsEditing(true);
        }
      }
    });
  };

  const getCategoryById = (id) => {
    switch (id) {
      case 1:
        return 'Naturaleza';
      case 2:
        return 'Instrumento';
      default:
        return 'Naturaleza';
    }
  };

  return (
    <>
      <div className="bodyadmin">
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>

        <div className="form-styles">
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="videoSrc">Video URL:</label>
            <input
              type="text"
              id="videoSrc"
              name="videoSrc"
              value={formData.videoSrc}
              onChange={handleChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="audioSrc">Audio URL:</label>
            <input
              type="text"
              id="audioSrc"
              name="audioSrc"
              value={formData.audioSrc}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Naturaleza">Naturaleza</option>
              <option value="Instrumento">Instrumento</option>
            </select>

            <button type="submit" className="Add">
              {isEditing ? 'Edit Card' : 'Add Card'}
            </button>
          </form>
        </div>
        <div className="filter-buttons">
          <button onClick={() => handleFilter('all')} className={filterCategory === 'all' ? 'active' : ''}>
            All Cards
          </button>
          <button
            onClick={() => handleFilter('Naturaleza')}
            className={filterCategory === 'Naturaleza' ? 'active' : ''}
          >
            Naturaleza
          </button>
          <button
            onClick={() => handleFilter('Instrumento')}
            className={filterCategory === 'Instrumento' ? 'active' : ''}
          >
            Instrumento
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
                  <button className="edit" onClick={() => handleEdit(card.id_AudioFiles)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(card.id_AudioFiles)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;







