
import React, { useState, useEffect, useRef } from 'react';
import './Admin.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const videoRefs = useRef({});
  const audioRefs = useRef({});

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
  const [shouldAutoPlayVideo, setShouldAutoPlayVideo] = useState(false);

  useEffect(() => {
    fetchAllCards();
  }, []);

  const fetchAllCards = async () => {
    try {
      const response = await fetch('https://localhost:7134/AudioFiles/Get');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlayVideo = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
      setShouldAutoPlayVideo(true);
    }
  };

  const handlePauseVideo = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      setShouldAutoPlayVideo(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryId = getCategoryByName(formData.category);

    if (isEditing) {
      const updatedData = {
        videoSrc: formData.videoSrc,
        audioSrc: formData.audioSrc,
        title: formData.title,
        description: formData.description,
        Id_category: categoryId,
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

            fetchAllCards();

            setFormData({
              videoSrc: '',
              audioSrc: '',
              title: '',
              description: '',
              category: 'Nature',
            });
          } else {
            console.error('Error updating card', error);
            Swal.fire('Error', 'Failed to update card.', 'error');
          }
        })
        .catch((error) => {
          console.error('Error updating card', error);
          Swal.fire('Error', 'An error occurred while updating the card.', 'error');
        });
    } else {
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
            category: 'Nature',
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
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
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

  const handleDelete = async (id_AudioFiles) => {
    Swal.fire({
      title: 'Are you sure you want to delete this card?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
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
      title: 'Are you sure you want to edit this card?',
      text: 'This action will open an edit form.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, edit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const cardToEdit = cards.find((card) => card.id_AudioFiles === id);
        if (cardToEdit) {
          setFormData({
            videoSrc: cardToEdit.videoSrc,
            audioSrc: cardToEdit.audioSrc,
            title: cardToEdit.title,
            description: cardToEdit.description,
            category: getCategoryById(cardToEdit.Id_category),
          });

          setEditCardId(id);
          setIsEditing(true);
        }
      }
    });
  };

  const getCategoryById = (id) => {
    switch (id) {
      case 1:
        return 'Nature';
      case 2:
        return 'Instrument';
      default:
        return 'Nature';
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
              <option value="Nature">Nature</option>
              <option value="Instrument">Instrument</option>
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
                    ref={(ref) => (videoRefs.current[card.id_AudioFiles] = ref)}
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
                    ref={(ref) => (audioRefs.current[card.id_AudioFiles] = ref)}
                  >
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

